# Blyx living visual design guide

_Issue #30 · Visual design system · September 2026_

This guide is the entry point for designing, implementing, and reviewing Blyx website pages. It connects the approved design decisions to shared tokens and browser-viewable examples so the system can be applied without relying on memory.

## Open the guide

Run the website locally and open `/design-guide/`. The guide is also included in the production build as `design-guide/index.html`.

The browser reference contains:

- design principles and content hierarchy;
- typography roles and representative specimens;
- semantic color, surface, and status examples;
- the spacing scale and responsive grid;
- navigation, buttons, links, form controls, and component states;
- hero and equal service-panel compositions;
- approved image treatments using existing Blyx project photography; and
- a repeatable page-review checklist.

## Sources of truth

Use the following sources together:

1. [`design-tokens.css`](../../src/styles/design-tokens.css) defines the reusable values consumed by the browser guide and website components.
2. The detailed specifications define when and why each value, component, and composition is used.
3. The browser guide shows representative combinations and responsive behavior.

The detailed specifications are:

- [Typography and content hierarchy](./typography.md)
- [Color, surface, border, and depth system](./color-surfaces.md)
- [Spacing, grid, and responsive layout system](./layout.md)
- [Navigation, controls, and form system](./components.md)
- [Image composition and edge-fade system](./imagery.md)

When a shared decision changes, update the specification, token definition, and affected browser example in the same change. Page-specific values are permitted only as documented component exceptions.

## How to use the guide

### Design a page

1. Establish the semantic outline and meaningful compact-screen source order.
2. Choose a documented composition and assign regions to the responsive grid.
3. Apply type roles and measures before introducing surface changes.
4. Add only the controls and states required by the page task.
5. Select imagery that provides credible proof and supports the intended crop. If an asset looks below high-resolution quality at its intended size, recommend upscaling and obtain explicit approval before creating or using an enhanced derivative.
6. Use the documented equal-panel composition for the homepage service directory; keep its technical renders conceptual, its text on solid fields, and its Residential and Business content distinct.

### Review a page

Review in this order:

1. **Purpose:** one clear page promise and one primary action per group.
2. **Structure:** one `h1`, logical heading order, meaningful source order, and no content hidden by presentation.
3. **Tokens:** every shared color, type, spacing, width, radius, border, shadow, and timing maps to `design-tokens.css`.
4. **Composition:** text measures, grid spans, gutters, and section rhythm follow the layout specification.
5. **Interaction:** default, hover, focus, active, loading, disabled, success, and error states are present where applicable and remain understandable without color alone.
6. **Imagery:** the focal subject and architectural context remain clear; essential text stays on a solid field. Any subpar asset is flagged, and any upscale or replacement has explicit approval and recorded provenance.
7. **Responsive access:** test 320, 768, 1024, 1280, and 1440 CSS pixels, 200% text zoom, keyboard order, visible focus, font fallback, and image failure.

## Implementation contract

- Import `design-tokens.css` before component styles. Components consume semantic tokens and do not redefine shared values.
- Use semantic HTML and native controls as the baseline. Styling does not replace labels, state language, heading order, or accessible names.
- Keep single-line form controls compact at a 2.75rem minimum height with `space-2` block and `space-4` inline padding. Checkbox marks are 1.125rem inside a clickable row at least 2.75rem high. Preserve 16px control text and the shared Blyx border, radius, and focus treatment.
- Keep responsive behavior mobile-first. The shared grid changes at 48rem and 64rem; 80rem is a large-canvas refinement.
- Build the homepage service directory with Business first and Residential second. Begin each row directly with its panels; do not add visible section or audience-row introductions. Business uses three equal panels in Networking, Security cameras, and Access control order. Residential uses four equal panels in Networking, Security cameras, Automated entry & access control, and Home automation order. Automated entry leads the third Residential panel while access control remains within its scope. Do not generate Business images until approved. Each panel uses the same 40–45% technical-render region, a surface-matched bottom fade into an overlapping solid copy field, constrained copy structure, and bottom-aligned action. Use two columns from 48rem, distribute three or four panels evenly from 80rem, and use a single stack below 48rem.
- Keep essential content usable when fonts, images, animation, or JavaScript are unavailable.
- Preserve original image assets. Upscaled derivatives require explicit approval, a documented method and intended use, and verification that no proof-bearing detail was invented or materially changed.
- Treat the browser examples as representative combinations, not copy-and-paste page templates.

The visual guide is intentionally lightweight and dependency-free. Its purpose is to make design decisions inspectable and repeatable, while the production website remains the final test of those decisions in real content.
