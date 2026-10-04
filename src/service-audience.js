export function initializeServiceAudience() {
  const selector = document.querySelector('.audience-switch');
  if (!selector) return;

  const inputs = [...selector.querySelectorAll('input')];
  const update = () => {
    const audience = inputs.find((input) => input.checked).value;
    document.querySelectorAll('[data-audience]').forEach((region) => {
      region.hidden = region.dataset.audience !== audience;
    });
    document.querySelectorAll('[data-surveillance-inquiry]').forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set('audience', audience);
      link.href = `${url.pathname}${url.search}${url.hash}`;
    });
  };

  inputs.forEach((input) => input.addEventListener('change', update));
  selector.hidden = false;
  update();
}
