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
- **Preserve:** Residential and light-commercial services use audience-specific language, imagery, proof, and qualification within one Blyx brand and shared service pages.
- **Preserve:** The homepage service directory presents Networking, Video surveillance, Access control, and Home automation once each. Access control encompasses compatible automated entry; the service page explains where their scope, outcomes, and requirements differ. Home automation's supported systems, project boundaries, and proof requirements must be defined before publishing detailed claims.
- **Preserve:** Copy begins with customer needs and outcomes, then supports them with concrete service detail.
- **Preserve:** The company voice uses “we” without implying unverified team size, capacity, credentials, authorizations, or experience.
- **Preserve:** Pricing remains consultative; the site explains fit and inquiry steps without packages or starting prices.
- **Preserve:** Blyx may state that it is fully insured.
- **Reconsider:** “Smarter Spaces” may remain in supplied logo artwork, but page-level positioning must lead with the central promise: deploying technology to empower the customer’s life.
- **Replace:** Generic “smart space” positioning where it obscures specific customer outcomes or treats the services as products.
- **Replace:** Enterprise-scale, high-volume, or otherwise unsupported commercial positioning.

### Shared shell and navigation

- **Preserve:** A skip link targets the main content on every route.
- **Preserve:** The logo links to the homepage and has an accessible home label.
- **Preserve:** Root primary navigation includes `Services`, linking to the homepage service directory. `Tell us about your project` begins in the hero and appears in the reserved header action region after the hero action scrolls above the header.
- **Preserve:** The footer links to the service directory and names the shared contact methods, insured status, the privacy route, and Blyx Ventures LLC.
- **Preserve:** Service pages identify the service clearly and distinguish Residential from Business scope wherever both are offered.
- **Reconsider:** Section-anchor navigation may be adapted to the final responsive page structures.

### Inquiry availability

- **Preserve:** Public site copy and metadata do not publish a geographic service boundary.
- **Preserve:** Visitors may submit residential or business inquiries regardless of location.
- **Preserve:** The form may collect a project ZIP for planning, but the value never gates submission by service-area membership.

### Claims and boundaries

- **Preserve:** System compatibility is evaluated before a solution is promised.
- **Preserve:** Installation includes an agreed scope, clean work, testing, administrative-access transfer where applicable, user guidance, and cleanup.
- **Preserve:** Video surveillance improves visibility and recording but does not guarantee prevention, identification, or complete coverage.
- **Preserve:** Blyx focuses on complete new camera systems rather than taking over, repairing, troubleshooting, or expanding systems installed by others.
- **Preserve:** Blyx works on the network within the property and does not sell internet service or coordinate service with internet providers.
- **Replace:** Any unsupported certification, manufacturer relationship, performance guarantee, or portfolio claim.

## 📚 Route and section inventory

| Route | Purpose | Required content | Disposition |
| --- | --- | --- | --- |
| `/` | Establish the shared promise, present the service directory, and capture inquiries | Brand hero, four-panel service directory, audience-aware contact section, footer | Reconsider |
| `/networking/` | Explain Residential and Business networking needs, scope, boundaries, process, proof, and common questions | Shared service hero, audience-specific situations and scope, boundaries, process, relevant proof, FAQ, contextual contact actions | Preserve |
| `/surveillance/` | Explain Residential and Business video-surveillance needs, scope, boundaries, process, proof, and common questions | Shared service hero, audience-specific situations and scope, boundaries, process, relevant proof, FAQ, contextual contact actions | Preserve |
| `/access-control/` | Explain access control for Residential and Business needs, including compatible automated entry where applicable | Shared service hero, distinct audience outcomes, credentials, permissions, automated operation where applicable, compatibility boundaries, process, proof, FAQ, contextual contact actions | Preserve |
| `/home-automation/` | Explain the verified Residential home-automation offering without overstating supported systems or proof | Hero, need states, supported scope, boundaries, process, FAQ, contact action, related services, and imagery requirements after service discovery | Reconsider |
| `/contact/` | Collect an audience-aware project inquiry | Audience selection first, conditional service and qualification fields, direct contact alternatives, privacy disclosure, delivery states | Preserve |
| `/privacy.html` | Explain personal-information handling and contact choices | Policy date, collection, use, providers, choices, security, privacy contact | Preserve |
| `/design-guide/` | Provide an internal browser-viewable visual reference | Tokens, typography, layout, components, imagery, compositions | Preserve outside public navigation |
| `/prototype/` | Historical implementation artifact | None | Replace; exclude from redesign inputs and production navigation |

### Homepage

#### Hero

- **Preserve:** Begin with the central promise without an eyebrow or audience label above it.
- **Preserve:** Quiet phone access and a direct `Tell us about your project` hero action that hands off to the header after scrolling.
- **Preserve:** The central promise is followed by one sentence that names networking, security cameras, access control, automated entry, and home automation while explaining that Blyx helps design and implement a system around day-to-day needs.
- **Preserve:** Concise residential and light-commercial positioning when the surrounding service claims remain accurate and specific.

#### Homepage service directory

- **Preserve:** Service cards use the approved shared structure: coordinated media, service label, outcome-led heading, concise explanation, and bottom-aligned action.
- **Preserve:** Networking, Video surveillance, Access control, and Home automation each use one equally weighted panel.
- **Preserve:** Networking includes wired and wireless planning, coverage, dependable connections, useful network separation, focused upgrades, testing, and handoff.
- **Preserve:** Video surveillance includes coverage planning, cabling, cameras, recording, retention, remote access, permissions, supported detection, testing, and handoff.
- **Preserve:** Access control leads with secure, manageable access and includes compatible credentials, permissions, testing, administrative-access transfer, and handoff. Compatible automated entry is explained within the service page when automatic opening, activation controls, or remote operation apply.
- **Preserve:** Home automation uses the fourth equal panel and links to `/home-automation/`; its concise statement must remain within the verified public scope and must not imply that existing project proof covers it.
- **Preserve:** Shared service pages distinguish Business and Residential copy, boundaries, and imagery where required.
- **Preserve:** Business service-page imagery remains unproduced until its service boundaries and separate image brief are approved; residential proof is not a substitute.
- **Reconsider:** Long-form service copy should be shortened for the panels without losing the service facts above.

#### Project proof and testimonial

- **Preserve:** All authentic project media and facts belong to one private residential project spanning networking, video surveillance, and automated entry.
- **Preserve:** Networking and camera work includes attic cabling, Wi-Fi coverage improvement, camera installation, dependable recording, remote viewing, and an organized central equipment area.
- **Preserve:** Automated-entry work includes powered swing-door operators at two entrances, fingerprint entry, wireless activation, remote visitor access, independent entry, and independent exit.
- **Preserve:** Customer privacy requires omitting the residence address, camera views, and coverage details.
- **Preserve:** The available testimonial must appear as proof and be attributed with the client’s first name and last initial.
- **Reconsider:** Proof may be summarized differently on each service page, but all uses must identify the material as the same integrated project.
- **Replace:** “Two separate projects” and any wording or layout that implies multiple customers or a broader portfolio.
- **Replace:** Any testimonial placeholder or invented quotation. The approved testimonial text and attribution must be supplied from the verified source before implementation.

#### Contact

- **Preserve:** Introductory guidance says a rough description is enough and explains that Blyx responds by email, may ask follow-up questions, and may arrange a call or site assessment.
- **Preserve:** Basic project-fit guidance and fully insured status appear as concise support beside the form rather than as a separate homepage section.
- **Preserve:** Contact paths include the form, `contact@blyxventures.com`, and `(502) 500-0105`.
- **Preserve:** The form collects name, email, optional phone, project city or ZIP, project size, areas of need, and a project description.
- **Preserve:** Residential areas of need include Access control and Automated entry as distinct inquiry choices within the Access control service, alongside Networking, Security cameras, Home automation, and Not sure yet. Business areas of need include Access control. “Not sure yet” is mutually exclusive.
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

### Video-surveillance page

- **Preserve:** The page leads with useful views, dependable recording, practical footage review, and controlled access.
- **Preserve:** Planning covers goals, lighting, mounting positions, viewing angles, cabling, network needs, storage, retention, remote viewing, user permissions, alerts, and supported detection.
- **Preserve:** The offering is a complete new camera system for homes and small workplaces, including renovation or new-construction projects.
- **Preserve:** The process covers defining important activity and areas, planning positions and storage, installation, recording verification, remote-access verification, and handoff.
- **Preserve:** The FAQ answers phone viewing, retention factors, internet dependence, continuous versus activity-based recording, and the boundary against takeover or repair work.
- **Preserve:** Accurate small-workplace and light-commercial references in body copy, metadata, and structured data.

### Access-control page

- **Preserve:** Access control is the primary residential message. Automated entry remains part of the service and may operate together with access control when the door and equipment are compatible.
- **Preserve:** Credential options may include buttons, key fobs, PIN codes, RFID cards, supported biometric credentials, and remote approval or operation.
- **Preserve:** Planning covers the people using the entrance, door condition and swing, frame, hinges, lock, power, wiring paths, safe egress, permissions, control placement, and coordinated unlocking and opening.
- **Preserve:** Good-fit work includes independent residential entry, remote visitor access, credential-based entry for a home or small workplace, and compatible access control with an automatic swing-door operator.
- **Preserve:** The process covers understanding daily use, coordinating compatible parts, testing the full entry sequence, transferring administrative access, and handoff.
- **Preserve:** The FAQ answers existing-door feasibility, entry methods, coordinated access and opening, remote visitor access, and power or internet interruptions.
- **Preserve:** Accurate small-workplace and light-commercial references in body copy, metadata, and structured data.

### Home automation

- **Preserve:** Home automation is viable as a Blyx service area.
- **Reconsider:** Define the supported device and system categories, customer needs, compatibility rules, project minimums, exclusions, ongoing-support expectations, handoff process, and relationship to networking and access before writing public copy.
- **Preserve:** Home automation uses `/home-automation/` and the fourth position in the Residential homepage row.
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
- **Preserve:** The homepage and service routes include matching Open Graph and X card title, description, URL, locale, site name, and image references.
- **Preserve:** Favicons, Apple touch icon, and the web manifest remain linked.
- **Preserve:** Titles and descriptions identify the service and accurately represent both audiences when the route serves both.
- **Preserve:** The privacy route retains its own title, description, canonical URL, and icons; social-card fields are optional for this utility page.

### Structured data

- **Preserve:** The homepage defines Blyx Ventures LLC as a `ProfessionalService` with the public URL, logo, image, email, phone number, and verified residential and business offerings.
- **Preserve:** Each service route defines one `Service` entity with a stable page-specific ID, accurate audience coverage, service type, URL, description, and provider reference.
- **Preserve:** Residential and light-commercial service types and descriptions remain distinct and accurate to their defined scopes.
- **Preserve:** Add home automation to `makesOffer` and create service-level structured data when its public description and supported scope are approved.
- **Reconsider:** `priceRange` remains only if it accurately communicates Blyx’s consultative positioning without functioning as a price claim.

### Crawling and install metadata

- **Preserve:** `robots.txt` allows crawling and declares the absolute sitemap URL.
- **Preserve:** `sitemap.xml` contains the homepage, contact and privacy pages, and all published service routes with canonical `www` URLs.
- **Preserve:** The web manifest names Blyx, supplies the 32-pixel and 512-pixel icons, and defines theme and background colors consistent with the implemented design tokens.
- **Replace:** Prototype and design-guide routes must not be added to the public sitemap.

### External search setup

- **Preserve:** `https://www.blyxventures.com` remains the canonical origin until an apex-domain configuration is verified and a deliberate canonical-host decision is recorded.
- **Preserve:** Launch readiness verifies the apex-domain behavior instead of assuming that `blyxventures.com` redirects correctly.
- **Preserve:** Google Search Console and Bing Webmaster Tools receive the production sitemap after ownership verification.
- **Preserve:** Any Google Business Profile uses the legal business name, public phone number, canonical website, and verified residential and light-commercial categories.
- **Preserve:** Business listings use a consistent business name, phone number, and canonical URL.
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
| Residential service renders | Coordinated networking, video-surveillance, and access-control WebP renders in the design-guide asset set | Conceptual residential service-card illustration only; never label as completed Blyx work |
| Business service renders | No assets produced | Keep image requirements separate from residential and defer generation until explicit approval |
| Home automation | No approved proof or conceptual render is recorded | Define the service scope and image brief before sourcing or generating an asset; never repurpose the existing project proof |
| Brand assets | Supplied logo, symbol, favicon, touch icon, manifest icon, and existing social image | Preserve brand identity; do not redesign the logo |

All proof images retain meaningful alternative text, intrinsic dimensions, responsive sources where available, lazy loading below the fold, and captions that explain why the image matters. The approved project photographs remain one project record even when a service page shows only the portion relevant to that service.

## ✅ Downstream acceptance checklist

- [ ] Public copy accurately addresses residential and light-commercial customers without implying enterprise-scale capabilities
- [ ] Root navigation and hero give residential and business inquiries equal access
- [ ] The homepage uses one shared service-panel instance for each service
- [ ] Shared service pages distinguish residential and Business scope, imagery, and proof where required
- [ ] Home-automation scope, boundaries, proof requirements, page copy, and technical-render brief are explicitly defined before publication
- [ ] Every preserved service fact is represented on the appropriate route
- [ ] Authentic proof is presented as one integrated private residential project
- [ ] Approved testimonial copy and first-name-plus-last-initial attribution are verified before implementation
- [ ] The contact form, direct contact methods, validation, submission confirmation, privacy disclosure, and analytics remain functional
- [ ] Metadata, structured data, sitemap, and robots declarations match the final routes and residential and light-commercial positioning
- [ ] Prototype content does not influence or enter the redesign
