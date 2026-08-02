# Blyx website

Marketing website for Blyx, a Louisville custom integrator focused on networking, access control, and surveillance for residential and light-commercial spaces.

## Development

Requirements: Node.js 24 and npm.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Both `index.html` and `privacy.html` are build entry points. Google Analytics is initialized in `src/analytics.js`, and contact-link interactions emit the `generate_lead` event.

## Deployment

Pushes to `main` build and deploy the site to GitHub Pages through `.github/workflows/deploy-pages.yml`. The repository's `CNAME` file is included in each production build.
