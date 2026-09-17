# Redesigned homepage and audience architecture

_Milestone 03 information architecture for the Blyx homepage and audience paths_

---

## 🎯 Homepage job and story

The root homepage establishes one Blyx brand, then directs visitors into the residential or business experience before presenting detailed services. It moves from proposition to inquiry in four sections:

1. Understand the shared Blyx promise and access the direct inquiry path.
2. Choose the residential or business experience.
3. Understand the standards shared by every Blyx project.
4. Confirm basic fit and start an audience-aware inquiry.

The root homepage does not ask one service section to address incompatible residential and commercial needs. Audience hubs own the service language, imagery, proof, and qualification details.

## 📚 Ordered homepage outline

| Order | Section | Purpose | Primary message | Primary action | Proof requirement | Visual role |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Brand hero | Establish the shared promise and offer a direct inquiry path | Dependable technology, thoughtfully integrated into your space | Tell us about your project | No portfolio or scale claim | Shared brand composition led by typography rather than audience-specific imagery |
| 2 | Audience gateway | Make the residential or business context the next page decision | Purpose-built service experiences for homes and businesses | Explore home services; Explore business services | Each path states only verified audience scope | Two linked image fields divided by an oversized decorative slash: residential left, business right |
| 3 | Shared approach | Explain what remains consistent across every project | Clear scope, clean installation, tested systems, and ready-to-use handoff | No section CTA | Concrete process commitments; no numerical experience or capacity claims | Primarily typographic; no decorative imagery |
| 4 | Contact and fit | Let visitors confirm basic fit and begin an audience-aware inquiry without creating a hard gate | A rough description is enough to begin; Blyx serves homes and light-commercial spaces in the named Louisville-area counties and welcomes outside-area inquiries | Send project details | Named service area, fully insured status, functional form, direct contact alternatives, privacy disclosure, validation, confirmed delivery, and analytics behavior | Form and concise fit guidance on solid fields; no imagery or separate qualification panel |

The global header exposes `For homes`, `For business`, and `How we work`. `Tell us about your project` begins in the hero and appears in its reserved header position only after the hero action scrolls above the header. The footer repeats the two audience paths, shared contact methods, Louisville-based service context, fully insured status, legal name, and privacy link.

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
- Place `Tell us about your project` in the hero as the direct inquiry action. Do not repeat it inside either audience gateway link.
- Retain direct phone access as a quiet utility action.
- State residential and light-commercial availability without listing every service or duplicating the audience gateway.
- Do not place audience-specific imagery or service cards in the hero.
- Keep the hero concise enough that the audience gateway remains apparent as the next decision.

### Audience gateway

- Render two equal block-level links: the residential side links to `/residential/` and the business side links to `/business/`.
- Use one anchor as the outermost interactive element for each side. Do not place a nested button, link, or independently interactive image inside either anchor.
- Give each side a visible audience label, one short outcome-led statement, and a text cue: `Explore home services` or `Explore business services`. Layer this copy over the image in a deliberately quiet, contrast-protected region.
- Apply hover, focus, and active states to the complete side. The keyboard focus outline follows the linked panel boundary and remains visible across its image and copy regions.
- Place residential on the left and business on the right at wide widths. Give both sides equal area and equal interaction weight.
- Fill each linked side with its audience render; do not divide the image and copy into separate vertical regions. The copy sits above the full-bleed image.
- Shape the adjacent edge of both linked sides to the same diagonal. The residential image ends at the slanted seam and the business image begins there; neither image remains rectangular at the shared boundary.
- Place a narrow off-white architectural reveal directly over that shared diagonal edge so it marks the actual boundary between the two links. Add one restrained graphite keyline to one edge of the reveal; do not use parallel dark strokes, a drop shadow, or an accent color. Extend the reveal beyond the section's top and bottom visual bounds. Implement it as decorative pseudo-elements with `aria-hidden="true"` semantics and `pointer-events: none` so it never blocks either link.
- Prevent the oversized slash from creating horizontal page overflow. Do not clip the focus outline of either linked side.
- At compact widths, stack residential before business. Give the residential panel a slanted bottom edge and the business panel the matching slanted top edge, then continue the off-white reveal and single keyline across that boundary. Preserve both full-panel links and their complete labels.
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

### Shared approach

- Use one concise introduction followed by the four commitments.
- Explain observable behavior: scope confirmation, property protection, neat installation, testing, correction before handoff, cleanup, access transfer where applicable, and user guidance.
- Keep the section typographic. Numbering, rules, or spacing may establish sequence without cards or decorative illustrations.

### Contact

- Ask the visitor to select Residential or Business before service-specific fields.
- Place concise project-fit and service-area guidance beside the form rather than in a separate section.
- Name both residential and light-commercial work and state the complete service area once.
- State that outside-area inquiries are welcome without promising availability.
- Include fully insured status as factual reassurance rather than a badge or certification treatment.
- Leave audience- and service-specific limitations to their destination pages.
- Preserve direct email and telephone alternatives.
- Preserve accessible labels, inline validation, focus management, pending and outcome states, delivery confirmation, retry guidance, spam protection, bounded inputs, and privacy disclosure.
- Keep the form understandable before JavaScript enhances or preselects it.

## 👉 CTA hierarchy

| Location | CTA | Destination | Rule |
| --- | --- | --- | --- |
| Hero, then global header | Tell us about your project | `/contact/` | Begins in the hero; a matching header action appears only after the hero action scrolls above the header; the form asks Residential or Business first |
| Residential gateway side | Explore home services | `/residential/` | The entire residential side is the link; never styled as secondary to business |
| Business gateway side | Explore business services | `/business/` | The entire business side is the link; never styled as secondary to residential |
| Shared approach | None | — | Let the process build confidence without interrupting the page with another button |
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
