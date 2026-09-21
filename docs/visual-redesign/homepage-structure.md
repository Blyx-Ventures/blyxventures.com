# Redesigned homepage and audience architecture

_Milestone 03 information architecture for the Blyx homepage and audience paths_

---

## 🎯 Homepage job and story

The root homepage establishes one Blyx brand, presents the complete verified service directory, and moves from proposition to inquiry in three sections:

1. Understand the shared Blyx promise and access the direct inquiry path.
2. Review each service once in a shared directory.
3. Confirm basic fit and start an audience-aware inquiry.

The homepage service directory presents shared service paths without duplicating cards by audience. Service pages retain distinct audience language, imagery, scope, and inquiry context where needed.

## 📚 Ordered homepage outline

| Order | Section | Purpose | Primary message | Primary action | Proof requirement | Visual role |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Brand hero | Establish the shared promise and offer a direct inquiry path | Deploying technology to empower your life | Tell us about your project | No portfolio or scale claim | Typography remains primary; one audience-neutral generated network-rack render provides subordinate technical context on the right |
| 2 | Services | Present every verified service without separate audience-hub pages or duplicate audience cards | Networking, Video surveillance, Access control, Home automation | One service-specific action per panel | Service-specific imagery; unproduced imagery uses a reserved media field rather than a substitute | One four-panel group using the shared equal-panel component; no visible section introduction |
| 3 | Contact and fit | Let visitors confirm basic fit and begin an audience-aware inquiry without creating a hard gate | A rough description is enough to begin; Blyx works with residential and light-commercial spaces | Send project details | Fully insured status, functional form, direct contact alternatives, privacy disclosure, validation, confirmed delivery, and analytics behavior | Form and concise fit guidance on solid fields; no imagery or separate qualification panel |

The global header exposes `Services`, linking to the homepage service directory. `Tell us about your project` begins in the hero and appears in its reserved header position only after the hero action scrolls above the header. The footer links to the service directory and repeats the shared contact methods, fully insured status, legal name, and privacy link.

## 🔗 Audience and URL architecture

Use customer-facing `Business` language in the homepage directory. Treat `light commercial` as the internal scope boundary and explain it where qualification requires precision.

```text
/
├── networking/
├── surveillance/
├── access-control/
├── home-automation/  [publish only after scope approval]
├── contact/
└── privacy/
```

### Homepage service directory

- Present Networking, Video surveillance, Access control, and Home automation once each.
- Use the approved service-panel structure throughout: coordinated media, service label, outcome-led heading, concise explanation, and one bottom-aligned action.
- Preserve component geometry, typography, spacing, interaction states, and image treatment across the group.
- Keep each panel service-specific. Audience distinctions belong on the shared service page rather than in duplicate homepage cards.
- Keep all four panels equal at the large state.
- Use an image-free reserved media field when the approved image does not exist. Do not substitute another service’s render.

### Service routes

- Publish one route per service. Networking and Video surveillance explain their distinct Business and Residential applications within the same service page. Access control encompasses compatible automated entry and explains the relevant distinctions within the shared service page. Home automation remains Residential-only.
- Link every homepage service panel, related-service link, search result, and contextual navigation item directly to the corresponding service route.
- Preserve the originating audience in the panel copy and inquiry context even when two panels share one destination.

### Contact routing

- Use `/contact/` as the single form route and canonical URL.
- Audience and service links may preselect context with parameters such as `/contact/?audience=business&service=networking`.
- Parameters configure the form but do not create indexable pages. Remove temporary parameters from the visible URL after initialization.
- Business and Residential contexts may reveal different qualification fields while preserving one submission and privacy workflow.

## 📦 Section requirements

### Brand hero

- Use the central promise as the only dominant headline.
- Begin with the central promise. Do not place an eyebrow or audience label above it.
- Set “your life.” in `brand-strong`; keep the rest of the central promise in the primary text color.
- Use this supporting copy: “Be it reliable networking, security cameras, access control, automated entry, or home automation, we help you design and implement a system that supports your day-to-day needs.”
- Place `Tell us about your project` in the hero as the direct inquiry action.
- Retain direct phone access as a quiet utility action.
- State residential and light-commercial availability without duplicating the service directory.
- Do not place audience-specific imagery or service cards in the hero.
- Use `HR-N01` as the only hero-support image. Keep the generated rack audience-neutral, subordinate to the copy, visually separate from proof, and positioned on the right with a calm copy field on the left.
- At wide viewports, enlarge `HR-N01` uniformly without changing its perspective, position both left-side rack corners clearly inside the composition, and clip the right-side continuation at the hero boundary. Keep the complete rack visible in the stacked compact layout.
- Keep the hero concise enough that the contact section remains apparent as the next step.

### Services

- Place the section between the hero and contact.
- Begin directly with the four service panels. Do not add a visible section eyebrow or section title.
- Keep the semantic `Services` label for assistive technology.
- Keep the directory order: Networking, Video surveillance, Access control, then Home automation.
- At the large state, keep all four equal panels on one row. At medium widths, use two columns; at compact widths, stack in source order.
- Use the existing networking and video-surveillance renders without modification. Reserve image fields without imagery for Access control and Home automation until approved assets exist.
- Keep each action specific to its service. Do not link an entire panel.

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
| Contact | Send project details | Form submission | The only conversion action in the final section |
| Residential service panel | Explore [residential outcome] | Matching service page | Uses household language and carries Residential context |
| Business service panel | Explore [business outcome] | Matching service page | Uses operational language and carries Business context |

Service pages use precise actions such as `Discuss a home networking project` or `Discuss a business networking project` where the page branches by audience.

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

- Give every published service page a self-referencing canonical URL.
- Keep shared service-route metadata accurate to the full service scope without implying unsupported audience coverage.
- Include the homepage, published service pages, `/contact/`, and `/privacy/` in the sitemap.
- Exclude parameterized contact URLs from the sitemap and canonicalize them to `/contact/`.
- Use breadcrumbs on service pages to preserve the service context.
- Keep page titles, descriptions, structured data, and social metadata service-specific.

## ✅ Approval dependencies

- [x] Shared service-page responsibilities and audience-specific content rules are defined in the [reusable page templates](./page-templates.md)
- [x] Business imagery requirements are recorded without repurposing residential project proof in the [page image matrix](./image-matrix.md)
- [ ] Home-automation residential scope, exclusions, handoff, and support expectations are approved
- [ ] Business automation-and-controls scope is approved before that route is published or added to navigation
- [ ] Approved residential testimonial wording and client attribution are available
- [ ] Contact frontend, backend allowlists, privacy language, and analytics taxonomy support audience and service context together
