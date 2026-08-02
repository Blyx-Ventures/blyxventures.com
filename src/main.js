import './styles/site.css';
import { initializeAnalytics, trackContactIntent } from './analytics.js';

initializeAnalytics();

document.querySelectorAll('[data-contact]').forEach((link) => {
  link.addEventListener('click', () => {
    trackContactIntent(link.dataset.contact);
  });
});
