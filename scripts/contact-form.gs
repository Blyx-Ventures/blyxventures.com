/**
 * Blyx contact form backend.
 *
 * Setup:
 * 1. Go to script.google.com (signed in as contact@blyxventures.com or a Workspace account
 *    that can send mail as that address), create a new project, paste this file in.
 * 2. Deploy > New deployment > type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 3. Copy the resulting /exec URL and set it as CONTACT_FORM_ENDPOINT in src/main.js.
 */

const NOTIFY_EMAIL = 'contact@blyxventures.com';

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

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${data.phone || '—'}`,
    `Property type: ${data.propertyType || '—'}`,
    `Service interest: ${data.service || '—'}`,
    '',
    'Message:',
    message,
  ];

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `Project inquiry from ${name}`,
    body: lines.join('\n'),
  });

  return jsonResponse({ ok: true });
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
