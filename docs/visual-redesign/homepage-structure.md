# Redesigned homepage and audience architecture

_Milestone 03 information architecture for the Blyx homepage and audience paths_

---

## 🎯 Homepage job and story

The root homepage establishes one Blyx brand, then directs visitors into the residential or business experience before presenting detailed services. It moves from proposition to inquiry in three sections:

1. Understand the shared Blyx promise and access the direct inquiry path.
2. Choose the residential or business experience.
3. Confirm basic fit and start an audience-aware inquiry.

The root homepage does not ask one service section to address incompatible residential and commercial needs. Audience hubs own the service language, imagery, proof, and qualification details.

## 📚 Ordered homepage outline

| Order | Section | Purpose | Primary message | Primary action | Proof requirement | Visual role |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Brand hero | Establish the shared promise and offer a direct inquiry path | Dependable technology that keeps up with you | Tell us about your project | No portfolio or scale claim | Typography remains primary; one audience-neutral generated network-rack render provides subordinate technical context on the right |
| 2 | Audience gateway | Make the residential or business context the next page decision | Residential and Business paths | Explore home services; Explore business services | Each path states only verified audience scope | Two image fields with bottom CTA links, separated by a narrow background gap: residential left, business right; no section introduction above the selector |
| 3 | Contact and fit | Let visitors confirm basic fit and begin an audience-aware inquiry without creating a hard gate | A rough description is enough to begin; Blyx works with residential and light-commercial spaces | Send project details | Fully insured status, functional form, direct contact alternatives, privacy disclosure, validation, confirmed delivery, and analytics behavior | Form and concise fit guidance on solid fields; no imagery or separate qualification panel |

The global header exposes `Residential` and `Business`. `Tell us about your project` begins in the hero and appears in its reserved header position only after the hero action scrolls above the header. The footer repeats the two audience paths, shared contact methods, fully insured status, legal name, and privacy link.

## 🔗 Audience and URL architecture

Use customer-facing `business` language in paths and navigation. Treat `light commercial` as the internal scope boundary and explain it where qualification requires precision.

```text
/
├── residential/
│   ├── networking/
│   ├── surveillance/
│   ├── automated-entry/
│   └── home-automation/
│
├── business/
│   ├── networking/
│   ├── surveillance/
│   ├── access-control/
│   └── automation-controls/  [publish only after scope approval]
│
├── contact/
└── privacy/
```

### Audience hubs

- `/residential/` is the residential homepage. It owns household language, residential imagery, the four residential service cards, authentic residential project proof, and residential inquiry framing.
- `/business/` is the light-commercial homepage. It owns operational language, genuine small-workplace imagery, business-specific service-card variants, commercial proof when available, and business inquiry framing.
- Keep a visible audience switch on both hubs. Never redirect automatically from device, location, referrer, or remembered preference.

### Audience-specific service cards

- Retain the approved service-card structure on both audience hubs: coordinated media, service label, outcome-led heading, concise explanation, and one bottom-aligned action.
- The residential hub uses the existing residential card direction for Networking, Surveillance, Automated entry & access control, and Home automation. Automated entry leads the message; credentials, permissions, locks, and remote access remain part of the service.
- The business hub uses variants of the same component for Networking, Surveillance, and Access control. Add Automation and controls only after its business scope is approved.
- Preserve the component geometry, typography, spacing, interaction states, and image treatment across audiences so the cards remain recognizably Blyx.
- Change the language, image subject, service boundary, proof, and destination for the audience. A business card is not a residential card with `home` replaced by `business`.
- Keep each hub's cards equal within that hub. The two hubs do not need the same number of cards.
- Do not place the complete residential and business card sets on the root homepage. The root audience choices lead to the relevant card set.

### Service routes

- Publish service content only within its audience context under `/residential/` or `/business/`.
- Link every service card, related-service link, search result, and contextual navigation item directly to the corresponding audience-specific route.
- Do not publish audience-neutral service pages or service gateways.

### Contact routing

- Use `/contact/` as the single form route and canonical URL.
- Audience and service links may preselect context with parameters such as `/contact/?audience=business&service=networking`.
- Parameters configure the form but do not create indexable pages. Remove temporary parameters from the visible URL after initialization.
- Residential and business contexts may reveal different qualification fields while preserving one submission and privacy workflow.

## 📦 Section requirements

### Brand hero

- Use the central promise as the only dominant headline.
- Begin with the central promise. Do not place an eyebrow or audience label above it.
- Set “with you” in `brand-strong`; keep the rest of the central promise in the primary text color.
- Use this supporting copy: “Be it reliable networking, security cameras, access control, automated entry, or home automation, we help you design and implement a system that supports your day-to-day needs.”
- Place `Tell us about your project` in the hero as the direct inquiry action. Do not repeat it in either audience gateway CTA.
- Retain direct phone access as a quiet utility action.
- State residential and light-commercial availability without listing every service or duplicating the audience gateway.
- Do not place audience-specific imagery or service cards in the hero.
- Use `HR-N01` as the only hero-support image. Keep the generated rack audience-neutral, subordinate to the copy, visually separate from proof, and positioned on the right with a calm copy field on the left.
- At wide viewports, enlarge `HR-N01` uniformly without changing its perspective, position both left-side rack corners clearly inside the composition, and clip the right-side continuation at the hero boundary. Keep the complete rack visible in the stacked compact layout.
- Keep the hero concise enough that the audience gateway remains apparent as the next decision.

### Audience gateway

- Present the audience selector without a separate eyebrow, section title, or explanatory paragraph.
- Render two equal non-interactive panels. Place `Explore home services` as a text link to `/residential/` and `Explore business services` as a text link to `/business/`.
- Keep each image, audience label, and statement outside the link hit area. Do not use a stretched-link overlay or make the complete panel interactive.
- Give each side a visible audience label, one short outcome-led statement, and a text cue: `Explore home services` or `Explore business services`. Place the text cue 24 pixels below the statement. Layer this copy over the image in a deliberately quiet, contrast-protected region.
- Apply hover, focus, and active states only to the CTA link. The keyboard focus treatment remains visible within the copy region.
- Place residential on the left and business on the right at wide widths. Give both sides equal area and equal interaction weight.
- Fill each panel with its audience render; do not divide the image and copy into separate vertical regions. The copy sits above the full-bleed image.
- Shape the adjacent edge of both panels to the same diagonal. Leave one narrow gap between the residential and business clip paths so the background behind the component is visible; neither image remains rectangular at the shared boundary.
- Do not add a colored overlay, graphite line, parallel stroke, drop shadow, or accent color to the gap. The separation comes only from the space between the two clipped images.
- Keep the gap within the section without creating horizontal page overflow. Do not clip either CTA focus treatment.
- At compact widths, stack residential before business. Give the residential panel a slanted bottom edge and the business panel the matching slanted top edge, then continue the same background gap across that boundary. Preserve both CTA links and their complete labels.
- Use solid graphite-and-off-white architectural illustrations with precise contour lines, simplified material detail, and restrained tonal shadows. Preserve direct environmental camera views; do not introduce cutaways, aerial or axonometric views, transparency, ghosted structure, or mixed-opacity wireframes. Favor familiar materials, ordinary proportions, and attainable spaces over luxury architectural styling. Do not depict service-specific equipment.
- Do not use green, brand-accent, or audience-specific accent colors in either render. Distinguish the two audiences through architecture, subject matter, tonal balance, and composition only.
- Use residential context on the home side and genuine small-workplace context on the business side. Do not reuse, crop, or relabel one audience image for the other.
- Use placement-specific desktop and compact sources for both audiences so each environment retains its intended copy-safe region and recognizable context across the responsive layout.
- Residential language centers on household routines, comfort, confidence, privacy, independent use, and living with the finished system.
- Business language centers on operations, staff and visitor access, uptime, remote management, permissions, and minimal disruption.
- Use real residential and light-commercial context. Do not represent business with an office tower, enterprise control room, or relabeled residential project image.
- Treat the two paths as navigation choices, not competing promotional campaigns.
- Do not add `Discuss a project`, `See services`, `Learn more`, or another generic action inside the audience gateway.
- Do not lead with company history, products, technical features, or an audience-neutral service-card grid.

### Contact

- Ask the visitor to select Residential or Business before service-specific fields.
- Place concise project-fit guidance beside the form rather than in a separate section.
- Name both residential and light-commercial work without publishing a geographic service boundary.
- Include fully insured status as factual reassurance rather than a badge or certification treatment.
- Leave audience- and service-specific limitations to their destination pages.
- Preserve direct email and telephone alternatives.
- Preserve accessible labels, inline validation, focus management, pending and outcome states, delivery confirmation, retry guidance, spam protection, bounded inputs, and privacy disclosure.
- Keep the form understandable before JavaScript enhances or preselects it.

## 👉 CTA hierarchy

| Location | CTA | Destination | Rule |
| --- | --- | --- | --- |
| Hero, then global header | Tell us about your project | `/contact/` | Begins in the hero; a matching header action appears only after the hero action scrolls above the header; the form asks Residential or Business first |
| Residential gateway CTA | Explore home services | `/residential/` | Only the bottom CTA is linked; never styled as secondary to business |
| Business gateway CTA | Explore business services | `/business/` | Only the bottom CTA is linked; never styled as secondary to residential |
| Contact | Send project details | Form submission | The only conversion action in the final section |
| Residential hub | Discuss a home project | `/contact/?audience=residential` | Carries residential context into the form |
| Business hub | Discuss a business project | `/contact/?audience=business` | Carries business context into the form |
| Residential service card | Explore [residential outcome] | Audience-specific residential service page | Uses household language and carries residential context |
| Business service card | Explore [business outcome] | Audience-specific business service page | Uses operational language and carries business context |

Audience-specific service pages use precise actions such as `Discuss a home networking project` or `Discuss a business networking project`.

Avoid generic labels such as `Get started`, `Learn more`, `See solutions`, or repeated `Discuss a project` buttons. An action label identifies either the audience destination, the specific project context, or the form submission outcome.

### Hero-to-header action behavior

- Render one hero link and one matching header link with the same label, destination, and analytics identity. Do not move or clone a focused DOM node while the visitor is interacting with it.
- Keep the header action hidden and non-interactive while the hero action is visible or remains below the viewport.
- Use `IntersectionObserver` to show the header action only when the hero action has crossed above the sticky header. Hide it again when the hero action returns to view.
- Reserve the header action's layout region so its appearance does not shift the logo or navigation.
- Use a short opacity transition for the handoff. Disable the transition under `prefers-reduced-motion`; the state change remains immediate and understandable.
- Keep the hero action available when JavaScript is unavailable. The header enhancement may remain absent without blocking the contact path.
- If the hero link has keyboard focus while its visibility state changes, leave it in place until focus moves. Never hide or replace the focused control.
- Expose only the visible instance to pointer and keyboard interaction. The inactive header link uses `visibility: hidden`, `pointer-events: none`, and removal from the tab order rather than `display: none` when its reserved space is needed.

## 🖼️ Audience visual distinction

| Context | Language emphasis | Image subjects | Exclude |
| --- | --- | --- | --- |
| Residential | Routines, comfort, confidence, privacy, convenient control, independent use | Entrances, living areas, utility spaces, eaves, household circulation, and authentic residential proof | Generic luxury interiors, retail product arrays, or business-operational language |
| Business | Operations, staff and visitor access, uptime, permissions, remote management, minimal disruption | Small offices, storefronts, studios, clinics, restaurants, back-of-house areas, staff entrances, equipment spaces, and customer Wi-Fi contexts | Office towers, data centers, enterprise dashboards, industrial campuses, or relabeled residential proof |

Both contexts use the same brand identity, design tokens, interaction patterns, installation standards, and accessibility requirements. Audience distinction comes from content, subject matter, composition, and proof rather than unrelated color themes.

## 🔍 Discovery and canonical rules

- Give every published audience hub and audience-specific service page a self-referencing canonical URL.
- Treat residential and business pages as distinct content; never canonicalize one audience version to the other.
- Include hubs, audience-specific service pages, `/contact/`, and `/privacy/` in the sitemap.
- Exclude parameterized contact URLs from the sitemap and canonicalize them to `/contact/`.
- Use breadcrumbs on audience-specific service pages to preserve the selected context.
- Keep page titles, descriptions, structured data, and social metadata audience-specific.

## ✅ Approval dependencies

- [x] Residential and business service-page responsibilities and project-story rules are defined in the [reusable page templates](./page-templates.md)
- [x] Business imagery requirements are recorded without repurposing residential project proof in the [page image matrix](./image-matrix.md)
- [ ] Home-automation residential scope, exclusions, handoff, and support expectations are approved
- [ ] Business automation-and-controls scope is approved before that route is published or added to navigation
- [ ] Approved residential testimonial wording and client attribution are available
- [ ] Contact frontend, backend allowlists, privacy language, and analytics taxonomy support audience and service context together
