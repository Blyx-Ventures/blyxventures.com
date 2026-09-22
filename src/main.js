import './styles/site.css';
import './styles/components.css';
import './styles/home.css';
import { initializeAnalytics, trackContactIntent } from './analytics.js';

const APPROVED_AREAS = new Set(['Networking', 'Security cameras', 'Access control', 'Automated entry']);
const APPROVED_SOURCES = new Set(['networking', 'surveillance', 'access-control']);
const SOURCE_BY_PATH = {
  '/networking/': 'networking',
  '/surveillance/': 'surveillance',
  '/access-control/': 'access-control',
};
const inquiryContext = readInquiryContext();

initializeAnalytics();
initializeNavigation();
initializeHeaderActions();

document.querySelectorAll('[data-contact]').forEach((link) => {
  link.addEventListener('click', () => {
    trackContactIntent(link.dataset.contact, inquiryContext.source);
  });
});

// scripts/contact-form.gs deployed as a Google Apps Script Web App.
const CONTACT_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx_jInLvBZEe3Aphuawule9-xA_FPQaVmCxy_7pNz54srf_47NcgbVGrAAqMOmx7p87qw/exec';
const STATUS_CALLBACK = '__blyxContactStatus';
const STATUS_POLL_INTERVAL_MS = 1000;
const STATUS_POLL_TIMEOUT_MS = 20000;
const STATUS_REQUEST_TIMEOUT_MS = 5000;

const contactForm = document.getElementById('contact-form');
const contactFormStatus = document.getElementById('contact-form-status');
const statusResolvers = new Map();

window[STATUS_CALLBACK] = (result) => {
  if (!result || typeof result.requestId !== 'string') return;
  statusResolvers.get(result.requestId)?.(result.status);
};

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const submitButtonLabel = submitButton.textContent;
  const areaInputs = [...contactForm.querySelectorAll('input[name="areasOfNeed"]')];
  const notSureInput = contactForm.querySelector('[data-not-sure]');
  const areasGroup = document.getElementById('cf-areas-group');
  const areasError = document.getElementById('cf-areas-error');
  const controls = [
    field('cf-property', 'cf-property-error', {
      valueMissing: 'Select Residential or Business.',
    }),
    field('cf-name', 'cf-name-error', {
      valueMissing: 'Enter your name.',
      blank: 'Enter your name.',
      tooLong: 'Keep your name under 120 characters.',
    }),
    field('cf-email', 'cf-email-error', {
      valueMissing: 'Enter your email address.',
      typeMismatch: 'Enter a valid email address.',
      tooLong: 'Keep your email address under 254 characters.',
    }),
    field('cf-project-zip', 'cf-project-zip-error', {
      valueMissing: 'Enter the project ZIP code.',
      patternMismatch: 'Enter a five-digit ZIP code or ZIP+4.',
      tooLong: 'Enter a five-digit ZIP code or ZIP+4.',
    }),
    field('cf-project-size', 'cf-project-size-error', {
      valueMissing: 'Select an approximate project size.',
    }),
    field('cf-message', 'cf-message-error', {
      valueMissing: 'Tell us what you are trying to achieve.',
      blank: 'Tell us what you are trying to achieve.',
      tooLong: 'Keep the description under 3,000 characters.',
    }),
  ];
  let hasAttemptedSubmit = false;
  let pendingRequestId = null;

  applyInquiryAreas(areaInputs, notSureInput, inquiryContext.areas);

  controls.forEach(({ control, error, messages }) => {
    const updateValidation = () => {
      if (hasAttemptedSubmit || control.getAttribute('aria-invalid') === 'true') {
        validateControl(control, error, messages, true);
      }
    };
    control.addEventListener('input', updateValidation);
    control.addEventListener('change', updateValidation);
  });

  areaInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (input === notSureInput && input.checked) {
        areaInputs.forEach((areaInput) => {
          if (areaInput !== notSureInput) areaInput.checked = false;
        });
      } else if (input.checked && notSureInput) {
        notSureInput.checked = false;
      }

      if (hasAttemptedSubmit || areasGroup?.getAttribute('aria-invalid') === 'true') {
        validateAreasOfNeed(areaInputs, areasGroup, areasError, true);
      }
    });
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;

    hasAttemptedSubmit = true;
    const firstInvalid = validateForm(controls, areaInputs, areasGroup, areasError);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setFailureStatus();
      return;
    }

    const formData = new FormData(contactForm);
    const requestId = pendingRequestId || createRequestId();
    const payload = Object.fromEntries(formData.entries());
    payload.areasOfNeed = formData.getAll('areasOfNeed');
    payload.requestId = requestId;
    pendingRequestId = requestId;

    setSubmitBusy(submitButton, true, submitButtonLabel);
    setFormStatus('pending', 'Sending…');

    try {
      const statusPromise = waitForSubmissionStatus(requestId);
      fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      }).catch(() => {});

      const deliveryStatus = await statusPromise;
      if (deliveryStatus !== 'accepted') {
        if (deliveryStatus === 'failed') pendingRequestId = null;
        setFailureStatus();
        return;
      }

      pendingRequestId = null;
      hasAttemptedSubmit = false;
      contactForm.reset();
      clearValidation(controls, areasGroup, areasError);
      setFormStatus('success', "Thanks — we'll be in touch soon.");
      trackContactIntent('contact-form', inquiryContext.source);
    } finally {
      setSubmitBusy(submitButton, false, submitButtonLabel);
    }
  });
}

function initializeNavigation() {
  const header = document.querySelector('.site-header');
  const button = header?.querySelector('.menu-button');
  const panel = button ? document.getElementById(button.getAttribute('aria-controls')) : null;
  const label = button?.querySelector('[data-menu-label]');
  if (!header || !button || !panel || !label) return;

  const close = (restoreFocus = false) => {
    button.setAttribute('aria-expanded', 'false');
    label.textContent = 'Menu';
    panel.hidden = true;
    if (restoreFocus) button.focus();
  };

  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    label.textContent = opening ? 'Close' : 'Menu';
    panel.hidden = !opening;
  });

  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close(true);
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (button.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) close();
  });

  window.matchMedia('(min-width: 80rem)').addEventListener('change', (event) => {
    if (event.matches) close();
  });
}

function initializeHeaderActions() {
  const source = document.querySelector('[data-header-action-source]');
  const actions = [...document.querySelectorAll('[data-header-action]')];
  if (!actions.length) return;

  const setActive = (active) => {
    actions.forEach((action) => {
      action.classList.toggle('is-active', active);
      action.setAttribute('aria-hidden', String(!active));
      action.tabIndex = active ? 0 : -1;
    });
  };

  if (!source) {
    setActive(true);
    return;
  }

  let shouldActivate = false;
  const applyState = () => {
    if (shouldActivate && document.activeElement === source) {
      source.addEventListener('blur', applyState, { once: true });
      return;
    }
    setActive(shouldActivate);
  };

  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;

  if (!('IntersectionObserver' in window)) {
    const updateFromScroll = () => {
      shouldActivate = source.getBoundingClientRect().bottom <= headerHeight;
      applyState();
    };
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    document.addEventListener('scroll', updateFromScroll, { passive: true, capture: true });
    updateFromScroll();
    return;
  }

  const observer = new IntersectionObserver(([entry]) => {
    shouldActivate = !entry.isIntersecting && entry.boundingClientRect.bottom <= entry.rootBounds.top;
    applyState();
  }, { rootMargin: `${headerHeight * -1}px 0px 0px` });

  observer.observe(source);
}

function setSubmitBusy(button, busy, idleLabel) {
  if (busy) {
    button.style.minWidth = `${button.getBoundingClientRect().width}px`;
    button.textContent = 'Sending…';
    button.classList.add('is-loading');
    button.setAttribute('aria-busy', 'true');
    button.disabled = true;
    return;
  }

  button.textContent = idleLabel;
  button.classList.remove('is-loading');
  button.removeAttribute('aria-busy');
  button.disabled = false;
  button.style.removeProperty('min-width');
}

function field(controlId, errorId, messages) {
  return {
    control: document.getElementById(controlId),
    error: document.getElementById(errorId),
    messages,
  };
}

function validateForm(controls, areaInputs, areasGroup, areasError) {
  let firstInvalid = null;

  controls.forEach(({ control, error, messages }) => {
    if (!validateControl(control, error, messages, true) && !firstInvalid) {
      firstInvalid = control;
    }
  });

  if (!validateAreasOfNeed(areaInputs, areasGroup, areasError, true) && !firstInvalid) {
    firstInvalid = areaInputs[0];
  }

  return firstInvalid;
}

function validateControl(control, errorElement, messages, showError) {
  const message = validationMessage(control, messages);
  control.toggleAttribute('aria-invalid', Boolean(message));
  errorElement.textContent = showError ? message : '';
  return !message;
}

function validationMessage(control, messages) {
  if (control.validity.valueMissing) return messages.valueMissing || 'Complete this field.';
  if (control.required && !control.value.trim()) return messages.blank || messages.valueMissing || 'Complete this field.';
  if (control.validity.typeMismatch) return messages.typeMismatch || 'Enter a valid value.';
  if (control.validity.patternMismatch) return messages.patternMismatch || 'Enter a valid value.';
  if (control.validity.tooLong) return messages.tooLong || 'This entry is too long.';
  return '';
}

function validateAreasOfNeed(inputs, group, errorElement, showError) {
  const hasSelection = inputs.some((input) => input.checked);
  const message = hasSelection ? '' : 'Choose at least one area of need.';
  inputs[0].setCustomValidity(message);
  group?.toggleAttribute('aria-invalid', !hasSelection);
  errorElement.textContent = showError ? message : '';
  return hasSelection;
}

function clearValidation(controls, areasGroup, areasError) {
  controls.forEach(({ control, error }) => {
    control.removeAttribute('aria-invalid');
    error.textContent = '';
  });
  areasGroup?.removeAttribute('aria-invalid');
  areasError.textContent = '';
}

function createRequestId() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();

  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

async function waitForSubmissionStatus(requestId) {
  const deadline = Date.now() + STATUS_POLL_TIMEOUT_MS;

  while (Date.now() < deadline) {
    const status = await readSubmissionStatus(requestId);
    if (status === 'accepted' || status === 'failed') return status;
    await delay(STATUS_POLL_INTERVAL_MS);
  }

  return 'unknown';
}

function readSubmissionStatus(requestId) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    const finish = (status) => {
      clearTimeout(timeoutId);
      statusResolvers.delete(requestId);
      script.remove();
      resolve(status);
    };
    const timeoutId = setTimeout(() => finish('unknown'), STATUS_REQUEST_TIMEOUT_MS);

    statusResolvers.set(requestId, finish);
    script.onerror = () => finish('unknown');
    script.src = `${CONTACT_FORM_ENDPOINT}?action=status&requestId=${encodeURIComponent(requestId)}&_=${Date.now()}`;
    document.head.append(script);
  });
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function setFailureStatus() {
  if (!contactFormStatus) return;
  contactFormStatus.textContent = 'We couldn’t confirm your submission. Your information is still here. ';
  const retryButton = document.createElement('button');
  retryButton.className = 'button button-quiet status-retry';
  retryButton.type = 'button';
  retryButton.textContent = 'Try again';
  retryButton.addEventListener('click', () => contactForm.requestSubmit());
  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:contact@blyxventures.com?subject=Project%20inquiry%20for%20Blyx';
  emailLink.textContent = 'contact@blyxventures.com';
  emailLink.addEventListener('click', () => trackContactIntent('project-email', inquiryContext.source));
  contactFormStatus.append(retryButton, 'Or email ', emailLink, '.');
  contactFormStatus.dataset.state = 'error';
  contactFormStatus.setAttribute('role', 'alert');
  contactFormStatus.setAttribute('aria-live', 'assertive');
  contactFormStatus.tabIndex = -1;
  contactFormStatus.focus();
}

function readInquiryContext() {
  const url = new URL(window.location.href);
  const requestedSource = url.searchParams.get('source') || '';
  const source = APPROVED_SOURCES.has(requestedSource) ? requestedSource : (SOURCE_BY_PATH[url.pathname] || '');
  const areas = [...new Set(url.searchParams.getAll('area').filter((area) => APPROVED_AREAS.has(area)))];

  if (areas.length || APPROVED_SOURCES.has(requestedSource)) {
    history.replaceState({}, '', `${url.pathname}${url.hash || '#contact'}`);
  }

  return { source, areas };
}

function applyInquiryAreas(areaInputs, notSureInput, areas) {
  if (!areas.length) return;

  areaInputs.forEach((input) => {
    input.checked = areas.includes(input.value);
  });
  if (notSureInput) notSureInput.checked = false;
}

function setFormStatus(state, message) {
  if (!contactFormStatus) return;
  contactFormStatus.textContent = message;
  contactFormStatus.dataset.state = state;
  contactFormStatus.setAttribute('role', 'status');
  contactFormStatus.setAttribute('aria-live', 'polite');
  contactFormStatus.removeAttribute('tabindex');
}
