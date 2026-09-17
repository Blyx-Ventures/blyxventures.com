# Redesign content and functional requirements

_Milestone 03 source of truth for page planning and content preservation_

---

## 📋 Inventory rules

This inventory separates durable content and behavior from presentation. Page structures may change during redesign, but every item marked **Preserve** must remain represented and every item marked **Replace** must be removed or rewritten before launch.

| Disposition | Meaning |
| --- | --- |
| **Preserve** | Carry the fact, content purpose, or behavior into the redesign |
| **Reconsider** | Keep the communication purpose while revising its wording, grouping, or prominence |
| **Replace** | Do not carry the item into the redesign in its present form |

The redesign serves residential and light-commercial customers. Keep the light-commercial scope specific to small organizations and workplaces; do not imply enterprise-scale facilities, staffing, capacity, or experience.

## 🎯 Site-wide requirements

### Positioning and voice

- **Preserve:** Blyx designs, installs, tests, supports, and hands off integrated technology systems for homes and light-commercial spaces.
- **Preserve:** Residential and light-commercial services use audience-specific language, imagery, proof, qualification, and destinations within one Blyx brand.
- **Preserve:** The residential hub gives Networking, Security cameras, Automated entry & access control, and Home automation equal service-card prominence. Automated entry leads the residential message while credentialing, permissions, locks, and remote access remain part of the combined service. Home automation's supported systems, project boundaries, and proof requirements must be defined before publishing detailed claims.
- **Preserve:** Copy begins with customer needs and outcomes, then supports them with concrete service detail.
- **Preserve:** The company voice uses “we” without implying unverified team size, capacity, credentials, authorizations, or experience.
- **Preserve:** Pricing remains consultative; the site explains fit and inquiry steps without packages or starting prices.
- **Preserve:** Blyx may state that it is fully insured.
- **Reconsider:** “Smarter Spaces” may remain in supplied logo artwork, but page-level positioning must lead with the central promise: dependable technology, thoughtfully integrated into the customer’s space.
- **Replace:** Generic “smart space” positioning where it obscures specific customer outcomes or treats the services as products.
- **Replace:** Enterprise-scale, high-volume, or otherwise unsupported commercial positioning.

### Shared shell and navigation

- **Preserve:** A skip link targets the main content on every route.
- **Preserve:** The logo links to the homepage and has an accessible home label.
- **Preserve:** Root primary navigation gives `For homes` and `For business` equal prominence and includes `How we work`. `Tell us about your project` begins in the hero and appears in the reserved header action region after the hero action scrolls above the header.
- **Preserve:** Audience hubs keep a visible audience switch and expose only the services verified for that audience.
- **Preserve:** The footer names both audience paths, shared contact methods, Louisville, insured status, the privacy route, and Blyx Ventures LLC.
- **Preserve:** Audience-specific service pages identify the active audience and service and cross-link only to relevant services.
- **Reconsider:** Section-anchor navigation may be adapted to the final responsive page structures.

### Service area

- **Preserve:** Blyx serves Louisville Metro and Bullitt, Oldham, Shelby, and Spencer counties in Kentucky.
- **Preserve:** The service area remains secondary but visible near the contact path and in the footer.
- **Preserve:** A project outside the named area may still be submitted for consideration.
- **Preserve:** The form collects project location as a city or ZIP code without rejecting an inquiry based on service-area membership.
- **Preserve:** Light-commercial inquiries use the same named service area unless Blyx records a separate verified boundary.

### Claims and boundaries

- **Preserve:** System compatibility is evaluated before a solution is promised.
- **Preserve:** Installation includes an agreed scope, clean work, testing, administrative-access transfer where applicable, user guidance, and cleanup.
- **Preserve:** Security cameras improve visibility and recording but do not guarantee prevention, identification, or complete coverage.
- **Preserve:** Blyx focuses on complete new camera systems rather than taking over, repairing, troubleshooting, or expanding systems installed by others.
- **Preserve:** Blyx works on the network within the property and does not sell internet service or coordinate service with internet providers.
- **Replace:** Any unsupported certification, manufacturer relationship, performance guarantee, or portfolio claim.

## 📚 Route and section inventory

| Route | Purpose | Required content | Disposition |
| --- | --- | --- | --- |
| `/` | Establish the shared promise, route by audience, explain the shared approach and fit, and capture inquiries | Brand hero, split audience gateway, shared approach, audience-aware contact and fit section, footer | Reconsider |
| `/residential/` | Introduce the residential experience and its services | Residential hero, four equal service cards, integrated residential project proof, residential fit, contextual contact action | Preserve |
| `/business/` | Introduce the light-commercial experience and its verified services | Business hero, business-specific service-card variants, business fit, proof only when verified, contextual contact action | Preserve |
| `/residential/{service}/` | Explain residential needs, scope, boundaries, process, proof, and common questions | Audience-specific hero, situations, planning, boundaries, process, residential proof where relevant, FAQ, contact action, related residential services | Preserve |
| `/residential/automated-entry/` | Explain residential automated entry with compatible access control | Independent entry, automatic operation, credentials, permissions, remote visitor access, compatibility boundaries, process, proof, FAQ, contact action | Preserve |
| `/business/{service}/` | Explain light-commercial needs, scope, boundaries, process, proof, and common questions | Audience-specific hero, operational situations, planning, boundaries, process, verified business proof when available, FAQ, contact action, related business services | Preserve |
| `/networking/`, `/surveillance/`, `/access-control/` | Route an audience-neutral service visitor without forcing the wrong context | Concise shared service boundary plus equal `For homes` and `For business` routes | Reconsider |
| `/residential/home-automation/` | Explain the verified residential home-automation offering without overstating supported systems or proof | Hero, need states, supported scope, boundaries, process, FAQ, contact action, related services, and imagery requirements after service discovery | Reconsider |
| `/contact/` | Collect an audience-aware project inquiry | Audience selection first, conditional service and qualification fields, direct contact alternatives, privacy disclosure, delivery states | Preserve |
| `/privacy.html` | Explain personal-information handling and contact choices | Policy date, collection, use, providers, choices, security, privacy contact | Preserve |
| `/design-guide/` | Provide an internal browser-viewable visual reference | Tokens, typography, layout, components, imagery, compositions | Preserve outside public navigation |
| `/prototype/` | Historical implementation artifact | None | Replace; exclude from redesign inputs and production navigation |

### Homepage

#### Hero

- **Preserve:** Quiet phone access and a direct `Tell us about your project` hero action that hands off to the header after scrolling.
- **Reconsider:** Headline and supporting copy around the central promise for homes and light-commercial spaces.
- **Preserve:** Concise residential and light-commercial positioning when the surrounding service claims remain accurate and specific.

#### Audience routing

- **Preserve:** Residential and business choices occupy a dedicated split section immediately after the hero, with equal visual weight, distinct messages and authentic context, and direct links to their audience hubs.
- **Preserve:** Each complete side is one block-level link. Residential routes to `/residential/`; business routes to `/business/`. Neither side contains a nested link or button.
- **Preserve:** Each audience render fills its complete linked side and the copy sits above it in a contrast-protected safe area. Complementary slanted edges make the images and link hit areas meet along one diagonal boundary. A narrow off-white architectural reveal with one graphite keyline follows that boundary and extends beyond the section's visual bounds without blocking either link or producing horizontal overflow. Compact layouts stack the links with matching slanted edges and continue the same reveal treatment.
- **Preserve:** Audience imagery uses warm graphite and off-white only, without green or another accent color. It is visibly more solid and environmental than the service-card renders, with translucency and blueprint linework limited to supporting details. Business imagery remains unproduced until separately approved.
- **Replace:** A mixed-audience service-card grid on the root homepage.

#### Audience-hub service overviews

- **Preserve:** Service cards use the approved shared structure: coordinated media, service label, outcome-led heading, concise explanation, and bottom-aligned action.
- **Preserve:** The residential hub uses four equally weighted cards, each with a customer problem, concise scope, handoff outcome, and link to its residential service page.
- **Preserve:** Networking includes wired and wireless planning, coverage, dependable connections, useful network separation, focused upgrades, testing, and handoff.
- **Preserve:** Security cameras include coverage planning, cabling, cameras, recording, retention, remote access, permissions, supported detection, testing, and handoff.
- **Preserve:** Automated entry & access control leads with easier or independent entry and includes compatible credentials, buttons or controls, automatic opening, remote operation, permissions, testing, administrative-access transfer, and handoff.
- **Preserve:** Residential Home automation uses a fourth equal panel and links to `/residential/home-automation/`; its concise statement must remain within the verified public scope and must not imply that existing project proof covers it.
- **Preserve:** The business hub uses variants of the same component for Networking, Surveillance, and Access control. Its copy, service boundaries, destinations, and imagery requirements are business-specific.
- **Preserve:** Business imagery remains unproduced until its service boundaries and separate image brief are approved; residential renders and proof are not substitutes.
- **Reconsider:** Long-form service copy should be shortened for the cards without losing the audience-specific facts above.

#### Approach

- **Preserve:** The four commitments are clear scope, clean installation, tested system, and ready-to-use handoff.
- **Preserve:** Scope changes are confirmed, the property is protected, equipment and cabling are installed neatly and securely, problems are corrected before handoff, the site is cleaned, and the customer receives usable system information.
- **Reconsider:** The section should communicate the commitments without a dense or repetitive process treatment.

#### Project proof and testimonial

- **Preserve:** All authentic project media and facts belong to one private residential project spanning networking, security cameras, and automated entry.
- **Preserve:** Networking and camera work includes attic cabling, Wi-Fi coverage improvement, camera installation, dependable recording, remote viewing, and an organized central equipment area.
- **Preserve:** Automated-entry work includes powered swing-door operators at two entrances, fingerprint entry, wireless activation, remote visitor access, independent entry, and independent exit.
- **Preserve:** Customer privacy requires omitting the residence address, camera views, and coverage details.
- **Preserve:** The available testimonial must appear as proof and be attributed with the client’s first name and last initial.
- **Reconsider:** Proof may be summarized differently on each service page, but all uses must identify the material as the same integrated project.
- **Replace:** “Two separate projects” and any wording or layout that implies multiple customers or a broader portfolio.
- **Replace:** Any testimonial placeholder or invented quotation. The approved testimonial text and attribution must be supplied from the verified source before implementation.

#### Contact

- **Preserve:** Introductory guidance says a rough description is enough and explains that Blyx responds by email, may ask follow-up questions, and may arrange a call or site assessment.
- **Preserve:** Basic project-fit guidance, the complete service area, outside-area inquiry permission, and fully insured status appear as concise support beside the form rather than as a separate homepage section.
- **Preserve:** Contact paths include the form, `contact@blyxventures.com`, and `(502) 500-0105`.
- **Preserve:** The form collects name, email, optional phone, project city or ZIP, project size, areas of need, and a project description.
- **Preserve:** Residential areas of need are Networking, Security cameras, Automated entry & access control, Home automation, and Not sure yet. Business areas of need include Access control as its own operational service. “Not sure yet” is mutually exclusive.
- **Preserve:** The form provides visible labels, keyboard access, inline validation, focus on the first invalid field, pending status, confirmed success, retry guidance, and an email fallback.
- **Preserve:** A hidden honeypot, normalized server-side validation, duplicate-request protection, short-lived anonymous delivery status, and bounded input lengths protect the submission workflow.
- **Preserve:** Service-page contact links preselect relevant areas and attach a recognized source, then remove the temporary query parameters from the visible URL.
- **Reconsider:** Project-size options may remain if they aid qualification without implying packages or prices.
- **Preserve:** The audience choice between Residential and Business appears before service-specific fields; customer-facing Business maps to the verified light-commercial scope.
- **Preserve:** Home automation enters the areas-of-need choices, frontend allowlist, backend allowlist, privacy disclosure, and analytics taxonomy together when its public scope is approved.

### Networking page

- **Preserve:** The page leads with reliable Wi-Fi and wired connections planned around how a home or small workplace is used.
- **Preserve:** Need states cover Wi-Fi dead zones, wired connections for fixed devices, renovations or new construction, and defined upgrades to existing networks.
- **Preserve:** Planning covers floor plan and construction, coverage goals, access-point locations, Ethernet routes, network equipment, guest or device separation, testing, and customer handoff.
- **Preserve:** Good-fit work includes whole-home networks, coverage improvements, structured cabling, organized equipment areas, renovations, new construction, and focused upgrades with an agreed outcome.
- **Preserve:** The process covers walking the space, agreeing on equipment and placement, installing neatly, testing, and handing over access and system information.
- **Preserve:** The FAQ answers internet-service boundaries, finished-space cabling, wired versus wireless use, reuse of compatible equipment, and separate device access.
- **Preserve:** Accurate small-workplace and light-commercial references in body copy, metadata, and structured data.

### Security-camera page

- **Preserve:** The page leads with useful views, dependable recording, practical footage review, and controlled access.
- **Preserve:** Planning covers goals, lighting, mounting positions, viewing angles, cabling, network needs, storage, retention, remote viewing, user permissions, alerts, and supported detection.
- **Preserve:** The offering is a complete new camera system for homes and small workplaces, including renovation or new-construction projects.
- **Preserve:** The process covers defining important activity and areas, planning positions and storage, installation, recording verification, remote-access verification, and handoff.
- **Preserve:** The FAQ answers phone viewing, retention factors, internet dependence, continuous versus activity-based recording, and the boundary against takeover or repair work.
- **Preserve:** Accurate small-workplace and light-commercial references in body copy, metadata, and structured data.

### Residential automated-entry and access-control page

- **Preserve:** Automated entry is the primary residential message. Access control remains part of the service and may operate separately or together with automatic door operation when the door and equipment are compatible.
- **Preserve:** Credential options may include buttons, key fobs, PIN codes, RFID cards, supported biometric credentials, and remote approval or operation.
- **Preserve:** Planning covers the people using the entrance, door condition and swing, frame, hinges, lock, power, wiring paths, safe egress, permissions, control placement, and coordinated unlocking and opening.
- **Preserve:** Good-fit work includes independent residential entry, remote visitor access, credential-based entry for a home or small workplace, and compatible access control with an automatic swing-door operator.
- **Preserve:** The process covers understanding daily use, coordinating compatible parts, testing the full entry sequence, transferring administrative access, and handoff.
- **Preserve:** The FAQ answers existing-door feasibility, entry methods, coordinated access and opening, remote visitor access, and power or internet interruptions.
- **Preserve:** Accurate small-workplace and light-commercial references in body copy, metadata, and structured data.

### Home automation

- **Preserve:** Home automation is viable as a Blyx service area.
- **Reconsider:** Define the supported device and system categories, customer needs, compatibility rules, project minimums, exclusions, ongoing-support expectations, handoff process, and relationship to networking and access before writing public copy.
- **Preserve:** Home automation uses `/residential/home-automation/` and a fourth equal residential-hub card position.
- **Replace:** Luxury lifestyle, universal compatibility, effortless whole-home control, or completed-project claims without supporting evidence.
- **Replace:** Use of the existing integrated residential project as home-automation proof unless verified project records establish that work.

### Privacy page

- **Preserve:** Blyx Ventures LLC operates `blyxventures.com` and provides a dated privacy policy.
- **Preserve:** The policy discloses contact data, project-location data, project details, contact channels, Google Analytics, Google Apps Script, Google Forms, and the linked Google Sheet.
- **Preserve:** The policy covers use, service-provider sharing, no sale or rental of personal information, legal disclosure, browser cookie choices, access or correction or deletion requests, security limitations, and the privacy contact email.
- **Reconsider:** The list of collected fields must match the final residential and light-commercial contact form exactly.

## 🔍 Metadata and discovery requirements

### Per-page metadata

- **Preserve:** Every public route has a unique title, description, canonical URL on `https://www.blyxventures.com`, index/follow directive, viewport declaration, and theme color.
- **Preserve:** The homepage, audience hubs, and audience-specific service routes include matching Open Graph and X card title, description, URL, locale, site name, and image references.
- **Preserve:** Favicons, Apple touch icon, and the web manifest remain linked.
- **Preserve:** Titles and descriptions identify the specific audience and service. Audience-neutral gateway metadata describes its routing role without duplicating an audience page.
- **Preserve:** The privacy route retains its own title, description, canonical URL, and icons; social-card fields are optional for this utility page.

### Structured data

- **Preserve:** The homepage defines Blyx Ventures LLC as a Louisville-based `ProfessionalService` with the public URL, logo, image, email, phone number, service area, locality, and verified residential and business offerings.
- **Preserve:** Service area entries name Jefferson, Bullitt, Oldham, Shelby, and Spencer counties in Kentucky.
- **Preserve:** Each audience-specific service route defines one `Service` entity with a stable page-specific ID, audience-specific name, service type, URL, description, provider reference, and Louisville-area service region.
- **Preserve:** Residential and light-commercial service types and descriptions remain distinct and accurate to their defined scopes.
- **Preserve:** Add home automation to `makesOffer` and create service-level structured data when its public description and supported scope are approved.
- **Reconsider:** `priceRange` remains only if it accurately communicates Blyx’s consultative positioning without functioning as a price claim.

### Crawling and install metadata

- **Preserve:** `robots.txt` allows crawling and declares the absolute sitemap URL.
- **Preserve:** `sitemap.xml` contains the homepage, audience hubs, retained gateways, contact and privacy pages, and all published audience-specific service routes with canonical `www` URLs.
- **Preserve:** The web manifest names Blyx, supplies the 32-pixel and 512-pixel icons, and defines theme and background colors consistent with the implemented design tokens.
- **Replace:** Prototype and design-guide routes must not be added to the public sitemap.

### External search setup

- **Preserve:** `https://www.blyxventures.com` remains the canonical origin until an apex-domain configuration is verified and a deliberate canonical-host decision is recorded.
- **Preserve:** Launch readiness verifies the apex-domain behavior instead of assuming that `blyxventures.com` redirects correctly.
- **Preserve:** Google Search Console and Bing Webmaster Tools receive the production sitemap after ownership verification.
- **Preserve:** Any Google Business Profile uses the legal business name, public phone number, canonical website, hidden street address, accurate service area, and verified residential and light-commercial categories.
- **Preserve:** Business listings use consistent business name, phone number, canonical URL, and service-area facts.
- **Preserve:** Structured-data `sameAs` entries remain empty unless corresponding public profiles are verified.

## 📊 Analytics and contact behaviors

- **Preserve:** Google Analytics initializes with measurement ID `G-NVEJ77FERX` on production pages.
- **Preserve:** Contact-intent actions emit the `generate_lead` event.
- **Preserve:** The event includes `contact_method` for header email, project email, phone, or confirmed contact-form submission.
- **Preserve:** Service-originated contact actions include audience and service context, such as `audience=residential` with `service=networking` or `audience=business` with `service=access-control`.
- **Preserve:** A form event fires only after delivery is confirmed as accepted; validation errors, pending submissions, and unconfirmed submissions do not count as leads.
- **Preserve:** Direct email and telephone links remain usable without JavaScript.
- **Preserve:** Form delivery continues through the published Google Apps Script endpoint to Google Forms and its linked Sheet unless a later implementation issue explicitly replaces that integration.
- **Preserve:** Operational logging excludes customer-provided values and records only request ID, stage, response code, elapsed time, and an error category.

## 📦 Approved proof assets

| Asset group | Content | Required use |
| --- | --- | --- |
| Network and cameras | Attic-cabling and network-rack photographs in source JPEG and responsive WebP sizes | Authentic proof of cabling, network improvement, camera-system support, and organized equipment |
| Automated entry | Door-operator and entry-reader photographs in source JPEG and responsive WebP sizes | Authentic proof of installed entry equipment |
| Automated entry video | Independent ingress and egress MP4 files with poster images and text descriptions | Authentic proof of independent entry and exit; retain controls, captions, and descriptive text |
| Residential service renders | Coordinated networking, surveillance, and access-control WebP renders in the design-guide asset set | Conceptual residential service-card illustration only; never label as completed Blyx work |
| Business service renders | No assets produced | Keep image requirements separate from residential and defer generation until explicit approval |
| Home automation | No approved proof or conceptual render is recorded | Define the service scope and image brief before sourcing or generating an asset; never repurpose the existing project proof |
| Brand assets | Supplied logo, symbol, favicon, touch icon, manifest icon, and existing social image | Preserve brand identity; do not redesign the logo |

All proof images retain meaningful alternative text, intrinsic dimensions, responsive sources where available, lazy loading below the fold, and captions that explain why the image matters. The approved project photographs remain one project record even when a service page shows only the portion relevant to that service.

## ✅ Downstream acceptance checklist

- [ ] Public copy accurately addresses residential and light-commercial customers without implying enterprise-scale capabilities
- [ ] Root navigation and hero give residential and business paths equal prominence
- [ ] Residential and business hubs use the shared service-card component with audience-specific copy, destinations, imagery, and proof
- [ ] Business image requirements are documented without generating assets or repurposing residential renders
- [ ] Home-automation scope, boundaries, proof requirements, page copy, and technical-render brief are explicitly defined before publication
- [ ] Every preserved service fact is represented on the appropriate route
- [ ] Authentic proof is presented as one integrated private residential project
- [ ] Approved testimonial copy and first-name-plus-last-initial attribution are verified before implementation
- [ ] The contact form, direct contact methods, validation, submission confirmation, privacy disclosure, and analytics remain functional
- [ ] Metadata, structured data, sitemap, and robots declarations match the final routes and residential and light-commercial positioning
- [ ] Prototype content does not influence or enter the redesign
