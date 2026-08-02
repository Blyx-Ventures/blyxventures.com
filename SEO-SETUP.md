# Blyx Ventures — SEO Setup

## What changed in the code (already done, not yet pushed)

- Added `public/robots.txt` and `public/sitemap.xml` so search engines can crawl and find every page.
- Added `ProfessionalService` structured data (JSON-LD) to `index.html` describing Blyx as a Louisville-area service business offering networking, access control, and surveillance — no street address listed, matching a service-area business.
- Added favicon, apple-touch-icon, and a web manifest (generated from the green logo mark).
- Fixed `canonical` / Open Graph / Twitter URLs, which pointed to `https://blyxventures.com/` — a domain that currently returns nothing. Your site only resolves at `https://www.blyxventures.com/` (see below). These now point to the working `www` URL.
- Added canonical link and matching icons to `privacy.html`.

Review the diff and push to `main` when ready — that triggers the GitHub Pages deploy.

## Important: fix your apex domain

`blyxventures.com` (no "www") doesn't currently resolve to your site — only `www.blyxventures.com` does. Your `CNAME` file only configures the `www` subdomain, and there's no DNS record making the bare domain work.

This matters because anyone who types `blyxventures.com` without "www," or any listing/backlink that uses the bare domain, hits a dead end. Fix it one of two ways at your DNS registrar:
- Point the apex domain (`@`) to GitHub Pages' IPs (185.199.108.153, .109.153, .110.153, .111.153) and add `blyxventures.com` alongside `www.blyxventures.com` in the repo's GitHub Pages settings, so GitHub redirects apex → www automatically, **or**
- Set up a simple redirect from the apex to `www.blyxventures.com` through your registrar/DNS provider.

Until this is fixed, always use `www.blyxventures.com` in business listings, ads, and print materials.

## Step 1 — Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add a property using **URL prefix**: `https://www.blyxventures.com/` (use "Domain" property only after the apex-domain fix above, since Domain properties verify via DNS and cover both apex and www).
3. Verify using the HTML tag method — Search Console gives you a `<meta name="google-site-verification" ...>` tag; send it to me and I'll add it to `index.html`, or verify via the HTML file upload method instead (upload the file it gives you into the `public/` folder).
4. Once verified, go to **Sitemaps** and submit: `https://www.blyxventures.com/sitemap.xml`
5. Use **URL Inspection** on `https://www.blyxventures.com/` and click **Request Indexing** to speed up the first crawl.

## Step 2 — Google Business Profile

1. Go to [business.google.com](https://business.google.com).
2. Create a profile for "Blyx Ventures LLC." When asked about location, choose **"I deliver goods and services to my customers"** (service-area business) and hide the address — matches how the site is set up.
3. Set the service area to Louisville, KY (add surrounding areas later if you want to target them by name).
4. Pick categories that match what people actually search — good candidates: "Home automation company," "Security system installer," or "Computer networking service." You can select one primary and a few secondary categories.
5. Add phone `(502) 500-0105`, website `https://www.blyxventures.com`, hours, and a short services list matching the three offerings on the site.
6. Google will verify the business by phone, email, or postcard depending on category — follow whatever it offers.

## Step 3 — Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters).
2. Easiest path: sign in and use "Import from Google Search Console" once GSC is set up — pulls over verification and sitemap automatically.
3. Otherwise verify manually and submit the same sitemap URL.

## Step 4 — Local citations (optional, helps rankings)

List the business with consistent name/phone/service-area info on Yelp, Nextdoor, Angi, and Houzz. Consistency across listings (same business name, same phone number, same website) is a real ranking factor for local search — inconsistent listings can hurt more than having none.

## Longer-term opportunity

This is a well-built single-page site, which covers the technical basics well, but a single page can only rank for a handful of terms. If you want to compete for more local searches over time (e.g. "home network installer Louisville," "camera system installation Louisville"), the next step up is adding a few dedicated content pages — one per service, or a short project/case-study section — since each indexed page is a separate shot at ranking. Happy to help with that when you're ready.
