/**
 * Blyx contact form backend.
 *
 * Forwards submissions to a Google Form (see FORM_RESPONSE_URL below), which
 * logs every inquiry to a linked Sheet and can notify you by email through
 * Forms' own notification system (Responses tab -> "Get email notifications
 * for new responses"). This sidesteps a Gmail quirk where MailApp/GmailApp
 * mail sent from an account to its own alias silently never reaches the
 * inbox (self-send-to-alias delivery suppression).
 *
 * Setup:
 * 1. Go to script.google.com, create a new project, paste this file in.
 * 2. Deploy > New deployment > type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 3. Copy the resulting /exec URL and set it as CONTACT_FORM_ENDPOINT in src/main.js.
 */

const FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdXmBS4UtoTdL6Pse6m1Bhm-_1L94vwIxWJW_se9QHrS-moEQ/formResponse';

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
  const data = JSON.parse(e.postData.contents);

  // Honeypot: bots fill hidden fields, real users never see this input.
  if (data.company) {
    return jsonResponse({ ok: true });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const projectZip = (data.projectZip || '').trim();
  const propertyType = (data.propertyType || '').trim();
  const projectSize = (data.projectSize || '').trim();
  const areasOfNeed = Array.isArray(data.areasOfNeed) ? data.areasOfNeed : [];
  const message = (data.message || '').trim();

  const hasValidAreas = areasOfNeed.length > 0 &&
    areasOfNeed.every((area) => ALLOWED_AREAS_OF_NEED.includes(area)) &&
    !(areasOfNeed.includes('Not sure yet') && areasOfNeed.length > 1);

  if (
    !name ||
    !email ||
    !message ||
    !/^\d{5}(-\d{4})?$/.test(projectZip) ||
    !ALLOWED_PROPERTY_TYPES.includes(propertyType) ||
    !ALLOWED_PROJECT_SIZES.includes(projectSize) ||
    !hasValidAreas
  ) {
    return jsonResponse({ ok: false, error: 'missing_required_fields' });
  }

  const payload = [
    formField(FORM_ENTRY_IDS.projectZip, projectZip),
    formField(FORM_ENTRY_IDS.name, name),
    formField(FORM_ENTRY_IDS.email, email),
    formField(FORM_ENTRY_IDS.phone, data.phone || ''),
    formField(FORM_ENTRY_IDS.propertyType, propertyType),
    ...areasOfNeed.map((area) => formField(FORM_ENTRY_IDS.areasOfNeed, area)),
    formField(FORM_ENTRY_IDS.projectSize, projectSize),
    formField(FORM_ENTRY_IDS.message, message),
  ].join('&');

  const response = UrlFetchApp.fetch(FORM_RESPONSE_URL, {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    payload: payload,
    muteHttpExceptions: true,
  });
  Logger.log('Form response code: %s', response.getResponseCode());
  Logger.log('Form response body: %s', response.getContentText());

  return jsonResponse({
    ok: true,
    formResponseCode: response.getResponseCode(),
    formResponseBody: response.getContentText().slice(0, 800),
  });
}

function formField(name, value) {
  return encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
