import './styles/site.css';
import { initializeAnalytics, trackContactIntent } from './analytics.js';

initializeAnalytics();

document.querySelectorAll('[data-contact]').forEach((link) => {
  link.addEventListener('click', () => {
    trackContactIntent(link.dataset.contact);
  });
});

// scripts/contact-form.gs deployed as a Google Apps Script Web App.
const CONTACT_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwc9nBOx_PnyQj889FPsAamdPs4guJOP_r9mI15fPmsM3brKhTl3Kng76U-0z3tlAGrQg/exec';

const contactForm = document.getElementById('contact-form');
const contactFormStatus = document.getElementById('contact-form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!CONTACT_FORM_ENDPOINT) {
      setFormStatus('error', "Form isn't connected yet — email us directly at contact@blyxventures.com.");
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const payload = Object.fromEntries(new FormData(contactForm).entries());

    submitButton.disabled = true;
    setFormStatus('pending', 'Sending…');

    try {
      // Apps Script web apps don't handle CORS preflight, so this is sent as a
      // simple, unreadable ("no-cors") request — a resolved fetch is the only
      // success signal available.
      await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      contactForm.reset();
      setFormStatus('success', "Thanks — we'll be in touch soon.");
      trackContactIntent('contact-form');
    } catch {
      setFormStatus('error', "Something went wrong — email us directly at contact@blyxventures.com.");
    } finally {
      submitButton.disabled = false;
    }
  });
}

function setFormStatus(state, message) {
  if (!contactFormStatus) return;
  contactFormStatus.textContent = message;
  contactFormStatus.dataset.state = state;
}
