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

export function trackContactIntent(method) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'generate_lead', {
    contact_method: method,
  });
}
