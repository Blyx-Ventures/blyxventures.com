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
  name: 'entry.1461307863',
  email: 'entry.754023572',
  phone: 'entry.1221293026',
  propertyType: 'entry.190311980',
  service: 'entry.743115782',
  message: 'entry.1160746768',
};

function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  // Honeypot: bots fill hidden fields, real users never see this input.
  if (data.company) {
    return jsonResponse({ ok: true });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    return jsonResponse({ ok: false, error: 'missing_required_fields' });
  }

  const payload = {};
  payload[FORM_ENTRY_IDS.name] = name;
  payload[FORM_ENTRY_IDS.email] = email;
  payload[FORM_ENTRY_IDS.phone] = data.phone || '';
  payload[FORM_ENTRY_IDS.propertyType] = data.propertyType || '';
  payload[FORM_ENTRY_IDS.service] = data.service || '';
  payload[FORM_ENTRY_IDS.message] = message;

  const response = UrlFetchApp.fetch(FORM_RESPONSE_URL, {
    method: 'post',
    payload: payload,
    muteHttpExceptions: true,
  });
  Logger.log('Form response code: %s', response.getResponseCode());
  Logger.log('Form response body: %s', response.getContentText());

  return jsonResponse({ ok: true, formResponseCode: response.getResponseCode() });
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
