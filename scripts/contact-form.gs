/**
 * Blyx contact form backend.
 *
 * Validates submissions, forwards accepted inquiries to the business Google
 * Form, and exposes a short-lived, anonymous delivery status for the website.
 * Customer-provided values are never returned by the status endpoint or
 * written to operational logs.
 */

const FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdXmBS4UtoTdL6Pse6m1Bhm-_1L94vwIxWJW_se9QHrS-moEQ/formResponse';
const STATUS_CALLBACK = 'window.__blyxContactStatus';
const STATUS_TTL_SECONDS = 600;
const MAX_REQUEST_LENGTH = 16384;
const STATUS_KEY_PREFIX = 'contact-status:';
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_PATTERN = /^\d{5}(-\d{4})?$/;

const FORM_ENTRY_IDS = {
  projectZip: 'entry.1162493948',
  name: 'entry.1461307863',
  email: 'entry.754023572',
  phone: 'entry.1221293026',
  propertyType: 'entry.190311980',
  areasOfNeed: 'entry.743115782',
  projectSize: 'entry.2030822594',
  message: 'entry.1160746768',
};

const EXPECTED_FIELDS = [
  'requestId',
  'name',
  'email',
  'phone',
  'projectZip',
  'propertyType',
  'projectSize',
  'areasOfNeed',
  'message',
  'company',
];
const ALLOWED_PROPERTY_TYPES = ['Residential', 'Light commercial'];
const ALLOWED_PROJECT_SIZES = [
  'Focused improvement',
  'One complete system',
  'Multiple systems',
  'Renovation or new construction',
  'Not sure yet',
];
const ALLOWED_AREAS_OF_NEED = [
  'Networking',
  'Security cameras',
  'Access control',
  'Automated entry',
  'Not sure yet',
];

function doPost(e) {
  const startedAt = Date.now();
  let requestId = '';

  try {
    const contents = e && e.postData && e.postData.contents;
    if (typeof contents !== 'string' || contents.length > MAX_REQUEST_LENGTH) {
      logEvent('', 'rejected', null, startedAt, 'invalid_request_size');
      return jsonResponse({ ok: false });
    }

    const data = JSON.parse(contents);
    if (!data || Object.prototype.toString.call(data) !== '[object Object]') {
      logEvent('', 'rejected', null, startedAt, 'invalid_json_shape');
      return jsonResponse({ ok: false });
    }

    requestId = typeof data.requestId === 'string' ? data.requestId.toLowerCase() : '';
    if (!UUID_PATTERN.test(requestId)) {
      logEvent('', 'rejected', null, startedAt, 'invalid_request_id');
      return jsonResponse({ ok: false });
    }

    const claimedStatus = claimRequest(requestId);
    if (claimedStatus !== 'new') {
      logEvent(requestId, 'duplicate', null, startedAt, claimedStatus);
      return jsonResponse({ ok: claimedStatus === 'accepted' || claimedStatus === 'pending' });
    }

    if (Object.keys(data).some((key) => !EXPECTED_FIELDS.includes(key))) {
      setRequestStatus(requestId, 'failed');
      logEvent(requestId, 'rejected', null, startedAt, 'unexpected_fields');
      return jsonResponse({ ok: false });
    }

    if (data.company !== undefined && typeof data.company !== 'string') {
      setRequestStatus(requestId, 'failed');
      logEvent(requestId, 'rejected', null, startedAt, 'invalid_honeypot_type');
      return jsonResponse({ ok: false });
    }

    if (typeof data.company === 'string' && data.company.trim()) {
      setRequestStatus(requestId, 'accepted');
      logEvent(requestId, 'accepted', null, startedAt, 'filtered');
      return jsonResponse({ ok: true });
    }

    const submission = normalizeSubmission(data);
    if (!submission) {
      setRequestStatus(requestId, 'failed');
      logEvent(requestId, 'rejected', null, startedAt, 'invalid_fields');
      return jsonResponse({ ok: false });
    }

    const response = UrlFetchApp.fetch(FORM_RESPONSE_URL, {
      method: 'post',
      contentType: 'application/x-www-form-urlencoded',
      payload: formPayload(submission),
      muteHttpExceptions: true,
    });
    const responseCode = response.getResponseCode();
    const accepted = responseCode >= 200 && responseCode < 300;
    setRequestStatus(requestId, accepted ? 'accepted' : 'failed');
    logEvent(requestId, accepted ? 'accepted' : 'delivery_failed', responseCode, startedAt, 'google_form');

    return jsonResponse({ ok: accepted });
  } catch (error) {
    if (requestId && UUID_PATTERN.test(requestId)) setRequestStatus(requestId, 'failed');
    logEvent(requestId, 'error', null, startedAt, errorCategory(error));
    return jsonResponse({ ok: false });
  }
}

function doGet(e) {
  const requestId = e && e.parameter && typeof e.parameter.requestId === 'string'
    ? e.parameter.requestId.toLowerCase()
    : '';
  const isStatusRequest = e && e.parameter && e.parameter.action === 'status';
  const status = isStatusRequest && UUID_PATTERN.test(requestId)
    ? getRequestStatus(requestId)
    : 'unknown';
  const result = JSON.stringify({
    requestId: UUID_PATTERN.test(requestId) ? requestId : '',
    status: ['pending', 'accepted', 'failed'].includes(status) ? status : 'unknown',
  });

  return ContentService
    .createTextOutput(STATUS_CALLBACK + '(' + result + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function claimRequest(requestId) {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);

  try {
    const existingStatus = getRequestStatus(requestId);
    if (existingStatus !== 'unknown') return existingStatus;
    setRequestStatus(requestId, 'pending');
    return 'new';
  } finally {
    lock.releaseLock();
  }
}

function normalizeSubmission(data) {
  const name = singleLine(data.name, 120);
  const email = singleLine(data.email, 254);
  const phone = singleLine(data.phone || '', 40, true);
  const projectZip = singleLine(data.projectZip, 10);
  const propertyType = singleLine(data.propertyType, 40);
  const projectSize = singleLine(data.projectSize, 40);
  const message = multiLine(data.message, 3000);
  const areasOfNeed = normalizeAreas(data.areasOfNeed);

  if (
    name === null ||
    !email || !EMAIL_PATTERN.test(email) ||
    phone === null ||
    !projectZip || !ZIP_PATTERN.test(projectZip) ||
    !ALLOWED_PROPERTY_TYPES.includes(propertyType) ||
    !ALLOWED_PROJECT_SIZES.includes(projectSize) ||
    !areasOfNeed ||
    !message
  ) {
    return null;
  }

  return { name, email, phone, projectZip, propertyType, projectSize, areasOfNeed, message };
}

function singleLine(value, maxLength, allowEmpty) {
  if (typeof value !== 'string') return null;
  const normalized = value.normalize('NFKC').replace(/\s+/g, ' ').trim();
  if ((!allowEmpty && !normalized) || normalized.length > maxLength) return null;
  return normalized;
}

function multiLine(value, maxLength) {
  if (typeof value !== 'string') return null;
  const normalized = value.normalize('NFKC').replace(/\r\n?/g, '\n').trim();
  if (!normalized || normalized.length > maxLength) return null;
  return normalized;
}

function normalizeAreas(value) {
  if (!Array.isArray(value) || value.length < 1 || value.length > 4) return null;
  if (value.some((area) => typeof area !== 'string')) return null;

  const areas = value.map((area) => singleLine(area, 40));
  if (areas.some((area) => !area || !ALLOWED_AREAS_OF_NEED.includes(area))) return null;
  if (new Set(areas).size !== areas.length) return null;
  if (areas.includes('Not sure yet') && areas.length > 1) return null;
  return areas;
}

function formPayload(submission) {
  return [
    formField(FORM_ENTRY_IDS.projectZip, submission.projectZip),
    formField(FORM_ENTRY_IDS.name, submission.name),
    formField(FORM_ENTRY_IDS.email, submission.email),
    formField(FORM_ENTRY_IDS.phone, submission.phone),
    formField(FORM_ENTRY_IDS.propertyType, submission.propertyType),
    ...submission.areasOfNeed.map((area) => formField(FORM_ENTRY_IDS.areasOfNeed, area)),
    formField(FORM_ENTRY_IDS.projectSize, submission.projectSize),
    formField(FORM_ENTRY_IDS.message, submission.message),
  ].join('&');
}

function formField(name, value) {
  return encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

function getRequestStatus(requestId) {
  return CacheService.getScriptCache().get(STATUS_KEY_PREFIX + requestId) || 'unknown';
}

function setRequestStatus(requestId, status) {
  CacheService.getScriptCache().put(STATUS_KEY_PREFIX + requestId, status, STATUS_TTL_SECONDS);
}

function errorCategory(error) {
  return error && error.name ? String(error.name).slice(0, 80) : 'unknown_error';
}

function logEvent(requestId, stage, responseCode, startedAt, category) {
  console.log(JSON.stringify({
    requestId: UUID_PATTERN.test(requestId) ? requestId : null,
    stage: stage,
    responseCode: responseCode,
    elapsedMs: Date.now() - startedAt,
    category: category,
  }));
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
