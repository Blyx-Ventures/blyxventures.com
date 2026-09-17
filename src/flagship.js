const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.flagship-nav');
const menuLabel = menuButton?.querySelector('.menu-label');

function setMenuState(isOpen, returnFocus = false) {
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  navigation?.classList.toggle('is-open', isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? 'Close' : 'Menu';
  if (returnFocus) menuButton?.focus();
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen);
});

navigation?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  setMenuState(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenuState(false, true);
  }
});

const heroAction = document.querySelector('[data-hero-action]');
const headerAction = document.querySelector('[data-header-action]');

if (heroAction && headerAction && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const hasHeroFocus = document.activeElement === heroAction;
      const showHeaderAction = !entry.isIntersecting && entry.boundingClientRect.bottom < 0 && !hasHeroFocus;
      headerAction.classList.toggle('is-visible', showHeaderAction);
      headerAction.tabIndex = showHeaderAction ? 0 : -1;
    },
    { rootMargin: '0px 0px -80% 0px' },
  );
  observer.observe(heroAction);
}

const form = document.querySelector('[data-demo-form]');
const formStatus = document.querySelector('[data-form-status]');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const audienceInputs = [...form.querySelectorAll('input[name="audience"]')];
  const audienceError = form.querySelector('[data-error-for="audience"]');
  const requiredFields = [...form.querySelectorAll('input[required], textarea[required]')];
  let firstInvalid = null;

  if (!audienceInputs.some((input) => input.checked)) {
    audienceError.textContent = 'Choose residential or business.';
    firstInvalid = audienceInputs[0];
  } else {
    audienceError.textContent = '';
  }

  requiredFields.forEach((field) => {
    const invalid = !field.checkValidity();
    field.toggleAttribute('aria-invalid', invalid);
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    formStatus.textContent = 'Review the highlighted fields.';
    formStatus.classList.remove('is-success');
    firstInvalid.focus();
    return;
  }

  formStatus.textContent = 'Design preview: the completed form is ready to show its confirmed-delivery state.';
  formStatus.classList.add('is-success');
});
