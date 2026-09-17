# Flagship homepage and surveillance designs

_Milestone 04 implementation-ready design validation · September 2026_

The browser designs at `/flagship/homepage/` and `/flagship/residential-surveillance/` apply the approved visual system to complete responsive pages. They are review artifacts and remain excluded from indexing. They do not replace the production routes until the website-implementation milestone.

## Homepage design

The homepage follows the four-part structure in [`homepage-structure.md`](./homepage-structure.md): shared promise, audience gateway, shared approach, and contact. Residential and business receive equal linked areas in the gateway, distinct environmental images, and audience-specific language. The business side depicts a modest local-office setting and emphasizes staff, visitors, uptime, and operations without implying enterprise scale or business proof.

### Responsive behavior

- The hero uses a wide text-and-support composition, then becomes one reading column below the medium grid state.
- The audience gateway uses two full-panel links and a single architectural reveal across their shared diagonal. Compact layouts stack residential before business and continue the complementary slanted boundary.
- The complete navigation and inquiry label switch to the disclosure header below `75rem`, where the three-region header does not fit reliably.
- The contact section keeps context before the form in source order. Fields collapse to one column without changing labels or validation behavior.
- Motion is limited to state transitions and is removed for `prefers-reduced-motion`.

### Component states

- Gateway hover changes the tonal overlay; focus uses an inset high-contrast outline around the complete linked panel; active links retain their full hit area.
- The menu exposes `aria-expanded` and `aria-controls`, changes its visible label between `Menu` and `Close`, closes after link activation, and returns focus to the trigger after Escape.
- The hero-to-header action uses stable links and `IntersectionObserver`; the inactive header action is hidden and removed from the tab order.
- The form includes selected, focus, invalid, and confirmed-preview states. Submission is intentionally local to the design artifact and does not transmit data.

### Image art direction

- `GW-R01` and `GW-B01` remain root-gateway-only assets. Their desktop and compact sources are placement-specific and never cross audiences.
- Copy overlays only the preplanned quiet regions. The graphite overlay protects contrast without introducing audience accent colors.
- The shared hero and process sections remain typographic; no decorative image is added where it would compete with the audience decision.

## Residential surveillance design

The surveillance design applies the audience-specific service template in this order: context and hero, recognizable needs, planning and scope, fit and boundaries, process, verified residential proof, common questions, and contextual inquiry.

### Responsive behavior

- Wide layouts place copy on a solid field beside the camera image. A single copy-facing mask recedes the low-information image edge before the focal subject.
- Compact layouts preserve copy before media, use the dedicated 5:4 crop, and remove the horizontal mask.
- Need states, planning details, proof, FAQ, and inquiry sections become one source-ordered column. The four-step process becomes two columns at medium widths and one at compact widths.
- The camera, mount, cable entry, eave, and masonry return remain intact at representative wide and compact sizes.

### Image art direction and proof

- `SV-H01` is conceptual residential marketing context. Its visible caption prevents it from being mistaken for completed Blyx work.
- `PR-N01` is authentic proof from the one verified integrated residential project. It uses a hard crop, visible project label, and immediate caption; no fade or copy crosses proof-bearing details.
- Neither asset is used as commercial proof or business-page imagery. A business surveillance page uses small-workplace language and the separate `BS-S01` image when that brief and asset are approved.

## Creative-brief review

| Brief requirement | Flagship result |
| --- | --- |
| Dependable, thoughtfully integrated, space-led positioning | The homepage leads with the central promise; service content begins with customer outcomes and planning decisions rather than products. |
| Residential and light-commercial scope | The homepage gives both audiences equal weight and distinct context; the service example remains explicitly residential instead of blending audiences. |
| Clear, spacious, exact visual character | Large type, restrained surfaces, open section rhythm, and rule-based lists carry hierarchy without card-grid density. |
| Honest proof | Generated camera imagery is disclosed as conceptual; the rack is labeled as completed residential work from the single integrated project. |
| Accessible interaction | Semantic landmarks, logical source order, visible focus, native controls, disclosure state, validation state, reduced motion, and intrinsic image dimensions are present. |
| No parallax or required spectacle | The pages use no parallax, scroll-tied content, or motion required for comprehension. |
| Commercial context without enterprise inflation | Business copy and imagery reference a modest workplace, staff, visitors, and operations; no office tower, control room, scale claim, or residential proof is repurposed. |

## Approved guide corrections

- The root header uses a `75rem` content-fit breakpoint for inline navigation; this is documented in [`components.md`](./components.md).
- The residential surveillance hero uses a square desktop media crop and a 5:4 compact crop, with the seam fade removed on compact layouts; provenance and exact crops are recorded in [`assets/surveillance-hero.md`](./assets/surveillance-hero.md).
- The existing full-frame rack composition is retained because tighter crops remove proof-bearing rack edges or cable context; the decision is recorded in [`assets/network-rack.md`](./assets/network-rack.md).

## Known exceptions and dependencies

- The flagship contact form demonstrates frontend states only. Production delivery, duplicate protection, analytics, and context allowlists remain implementation responsibilities.
- Business surveillance imagery remains pending its separately approved small-workplace brief. The residential camera image is not an acceptable substitute.
- Home-automation and business automation-and-controls content remain blocked by their service-scope approvals.
- The final production pages must repeat the documented checks at 320, 768, 1024, 1280, and 1440 CSS pixels, 200% text zoom, keyboard-only input, image failure, and font fallback.
