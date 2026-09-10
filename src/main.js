import './styles/site.css';
import { initializeAnalytics, trackContactIntent } from './analytics.js';

initializeAnalytics();

document.querySelectorAll('[data-contact]').forEach((link) => {
  link.addEventListener('click', () => {
    trackContactIntent(link.dataset.contact);
  });
});

// scripts/contact-form.gs deployed as a Google Apps Script Web App.
const CONTACT_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx_jInLvBZEe3Aphuawule9-xA_FPQaVmCxy_7pNz54srf_47NcgbVGrAAqMOmx7p87qw/exec';

const contactForm = document.getElementById('contact-form');
const contactFormStatus = document.getElementById('contact-form-status');

if (contactForm) {
  const areaInputs = [...contactForm.querySelectorAll('input[name="areasOfNeed"]')];
  const notSureInput = contactForm.querySelector('[data-not-sure]');
  const areasError = document.getElementById('cf-areas-error');

  areaInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (input === notSureInput && input.checked) {
        areaInputs.forEach((areaInput) => {
          if (areaInput !== notSureInput) areaInput.checked = false;
        });
      } else if (input.checked && notSureInput) {
        notSureInput.checked = false;
      }

      validateAreasOfNeed(areaInputs, areasError);
    });
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    validateAreasOfNeed(areaInputs, areasError);

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setFormStatus('error', "Form isn't connected yet — email us directly at contact@blyxventures.com.");
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());
    payload.areasOfNeed = formData.getAll('areasOfNeed');

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
      validateAreasOfNeed(areaInputs, areasError, false);
      setFormStatus('success', "Thanks — we'll be in touch soon.");
      trackContactIntent('contact-form');
    } catch {
      setFormStatus('error', "Something went wrong — email us directly at contact@blyxventures.com.");
    } finally {
      submitButton.disabled = false;
    }
  });
}

function validateAreasOfNeed(inputs, errorElement, showError = true) {
  if (!inputs.length) return true;

  const hasSelection = inputs.some((input) => input.checked);
  const message = hasSelection ? '' : 'Choose at least one area of need.';
  inputs[0].setCustomValidity(message);

  if (errorElement) {
    errorElement.textContent = showError ? message : '';
  }

  return hasSelection;
}

function setFormStatus(state, message) {
  if (!contactFormStatus) return;
  contactFormStatus.textContent = message;
  contactFormStatus.dataset.state = state;
}
