const MEASUREMENT_ID = 'G-NVEJ77FERX';

export function initializeAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.append(script);
}

export function trackContactIntent(method, landingPage = '') {
  if (typeof window.gtag !== 'function') return;

  const eventData = {
    contact_method: method,
  };

  if (landingPage) eventData.landing_page = landingPage;
  window.gtag('event', 'generate_lead', eventData);
}
