# Blyx spacing, grid, and responsive layout system

_Issue #27 · Visual design system · September 2026_

This specification defines the site-wide layout system. It creates deliberate whitespace and repeatable compositions while keeping copy primary, imagery supportive, and reading order intact across viewport sizes.

## Layout principles

- Use the smallest composition that communicates the content. Do not add columns, containers, or decoration to fill available space.
- Keep essential copy on an uninterrupted field. Imagery may meet or cross the viewport edge but must not displace or obscure the message.
- Align content to shared container and grid lines. Deliberate asymmetry comes from column spans, not arbitrary offsets.
- Preserve generous section rhythm while keeping related elements visibly grouped.
- Let content determine block height. Do not force sections to fill the viewport or crop text to maintain a composition.
- Keep source order meaningful. Responsive layout may reposition supporting media, but it does not change the reading or focus order.

## Spacing scale

Use only the following base spacing values inside components and content groups.

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 3rem;     /* 48px */
  --space-8: 4rem;     /* 64px */
  --space-9: 6rem;     /* 96px */
  --space-10: 8rem;    /* 128px */
  --space-11: 10rem;   /* 160px */

  --gutter-inline: clamp(1.25rem, 0.35rem + 4vw, 4.5rem);
  --grid-gap: clamp(1rem, 0.75rem + 1vw, 2rem);
  --section-block: clamp(5rem, 3.75rem + 5vw, 9rem);
  --section-block-compact: clamp(3.5rem, 2.75rem + 3vw, 6rem);
  --content-gap: clamp(2rem, 1.5rem + 2vw, 4rem);
}
```

The base scale handles relationships inside a component. The semantic fluid tokens handle viewport-level composition:

| Token | Use |
| --- | --- |
| `gutter-inline` | Minimum space between the viewport edge and contained content |
| `grid-gap` | Horizontal and vertical gap between grid tracks |
| `section-block` | Standard top and bottom padding for a major page section |
| `section-block-compact` | Top and bottom padding for utility sections, footer groups, or a short continuation on the same surface |
| `content-gap` | Separation between major groups inside one section, including copy and media |

Use `space-1` through `space-3` for icon, label, and validation relationships; `space-4` through `space-6` for component internals and compact groups; and `space-7` through `space-11` only for large content groups or fixed compositions. Choose the nearest token rather than introducing an intermediate value.

## Content widths

```css
:root {
  --width-canvas: 90rem;    /* 1440px */
  --width-wide: 80rem;      /* 1280px */
  --width-standard: 72rem;  /* 1152px */
  --width-narrow: 48rem;    /* 768px */
  --width-reading: 65ch;
}

.container {
  width: var(--width-standard);
  max-width: calc(100% - var(--gutter-inline) - var(--gutter-inline));
  margin-inline: auto;
}
```

| Width | Use |
| --- | --- |
| `canvas` | Maximum visual field for edge-led hero and project imagery; never a default text width |
| `wide` | Image-led sections and compositions that need broad alignment |
| `standard` | Default header, section, service, proof, form, and footer content |
| `narrow` | Policy pages, focused introductions, and single-column forms |
| `reading` | Maximum sustained paragraph measure; individual type roles may define a shorter measure |

A full-width section owns its background. Its content sits in one of these centered widths, except when an approved image composition intentionally reaches the viewport edge. Text always remains inside `gutter-inline`.

Do not nest a second width container merely to shift one child. Place the child on grid columns or apply its typographic measure. All grid children use `min-width: 0` so long content cannot force horizontal overflow.

## Responsive grid

Use mobile-first layout with three grid states and one large-canvas refinement.

| State | Viewport | Columns | Gap | Expected behavior |
| --- | --- | ---: | --- | --- |
| Compact | Below 48rem / 768px | 4 | `grid-gap` | Single reading flow; most groups span all columns |
| Medium | 48rem / 768px and above | 6 | `grid-gap` | Labels, short asides, and compact two-part groups may separate |
| Wide | 64rem / 1024px and above | 12 | `grid-gap` | Full split compositions and deliberate asymmetric spans |
| Large | 80rem / 1280px and above | 12 | `grid-gap` | Same grid; fluid gutters and type continue to expand toward their limits |

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--grid-gap);
}

@media (min-width: 48rem) {
  .grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
}
```

Breakpoints respond to available content width, not device names. Add a component breakpoint only when its content fails between these states, document the exception beside that component, and use a relative unit. Do not add global breakpoints to adjust one isolated component.

## Standard compositions

Column ranges below use one-based grid lines and apply at the wide state. At compact widths every listed region spans columns 1–5 in the specified source order. Medium layouts may use all six columns or a 2/4 split when both regions remain readable.

| Composition | Wide placement | Use and constraints |
| --- | --- | --- |
| Hero split | Copy 1–7; media 7–13 | Default hero. Reserves half the field for copy and keeps the image adjacent. A 5/7 split is allowed when the copy remains within its type measure. |
| Section introduction | Label 1–4; heading and lede 4–11 | Opens a major section without centering or placing the text in a card. Extend copy to line 13 only when its measure still applies. |
| Copy and supporting media | Copy 1–7; media 8–13 | Explanatory section with a clear gap between meaning and visual proof. |
| Project proof | Media 1–6; story 7–13 | Gives authentic project material enough detail while keeping the story readable. DOM order remains story, then media when the compact order must put copy first. |
| Contact split | Introduction 1–6; form 7–13 | Keeps inquiry context adjacent to the form. Stack before either region becomes narrower than 20rem. |
| Audience gateway | Residential 1–7; business 7–13 | Two equally weighted block-level links with distinct copy and imagery. An oversized decorative slash crosses the shared seam and extends beyond the section's visual bounds. Stack residential before business at compact widths. |
| Service panel group | Wide: two panels per row at six columns each. Large: distribute three or four equal panels across 12 columns. | Equal-size panels with identical media, copy, and action regions within one audience hub; stack the panels at compact widths. |
| Reading page | Content 3–11 | Policy and long-form content remains no wider than `width-reading`; the outer columns preserve calm whitespace. |

These are starting patterns, not templates that every section must use. A composition may omit a region and allow the remaining content to occupy fewer columns; it must not stretch copy beyond its defined measure simply to fill the grid.

### Audience gateway

Each half is one anchor occupying its complete grid region. Keep text and imagery inside that anchor; do not use an absolutely positioned stretched-link overlay or nest another interactive control. Give the anchor a visible focus outline around the full panel boundary and ensure the decorative slash cannot receive pointer events or cover the focus treatment.

At wide widths, the two anchors share one block size and meet along a common diagonal edge. Clip the residential side and business side to complementary shapes so the images are adjacent at every point along that seam. Each audience image fills its complete anchor, with copy layered over a quiet, contrast-protected region. Cover the shared edge with a narrow off-white architectural reveal and one graphite keyline using positioned pseudo-elements on a non-interactive wrapper. Do not use parallel dark strokes, a drop shadow, or an accent color. The reveal may extend beyond the section's top and bottom boundaries, but the page shell prevents horizontal overflow. It does not create a dead area between the links.

At compact widths, stack the anchors in residential-then-business source order. Use complementary slanted bottom and top edges so the images remain adjacent, then continue the off-white reveal and single keyline over that shared seam. Do not preserve a steep desktop diagonal by clipping text or focus treatment.

### Service panel group

An audience service overview contains equal-size panels. The residential hub contains four in this order: Networking, Surveillance, Automated entry & access control, and Home automation. The business hub contains Networking, Surveillance, and Access control; add Automation and controls only after its scope is approved. All panels within a hub use the same internal grid:

1. A technical-render media region occupying 40–45% of the panel block size
2. A short service label or title
3. One outcome-led heading and a concise explanation
4. One service-page action pinned to the bottom of the content region, with `space-2` internal top padding and a minimum target height of `control-height-compact`

Use the same aspect ratio, compact minimum block size, padding, border, radius, and content tracks across all panels in a hub. Pin every action to the bottom edge so the actions align. Constrain copy so one panel does not gain height from a longer title or description. Do not resize one panel to feature a preferred service.

Use `service-panel-min-height` at 29rem, `service-panel-media-height` at 13rem, and `service-panel-copy-overlap` at 1rem. At the minimum panel height, the media occupies approximately 45% of the card. Remove the hard rule between media and copy. Fade the image's bottom edge into `surface`, overlap the copy field upward, and make that field fully opaque before the eyebrow begins. Content may increase the panel height when text reflows; never clip copy or reduce the action target to hold the minimum height.

At the medium and wide states, use two equal panels per row. At the large state, four residential panels span three columns each; three business panels span four columns each. Below 48rem, stack the panels in source order and preserve equal dimensions. Do not use an orphaned row, horizontal carousel, or content reordering.

Residential service actions are:

- Networking: “Explore reliable connectivity”
- Surveillance: “Explore smarter surveillance”
- Automated entry & access control: “Explore easier, secure entry”
- Home automation: “Explore home automation”

Business variants use outcome-led operational language and link to the corresponding `/business/` service route. Their image requirements may be documented, but business images remain unproduced until separately approved.

The card set is a named audience-hub composition, not permission to convert the root homepage or other content sections into card grids. Use spacing or surface changes for other repeated content unless a separate documented component requires a container.

## Section rhythm

- Apply `section-block` once to each major section. Use `section-block-compact` when two neighboring sections share a surface and read as one sequence.
- Do not create vertical rhythm with empty elements, repeated line breaks, fixed heights, or viewport-height spacers.
- Keep an eyebrow or label `space-5` from its heading unless the component specification defines a tighter control relationship.
- Keep a heading `space-5` from its lede and `space-6` from its primary action group.
- Separate paragraphs by `space-4`; use `space-5` before a list and `space-6` between distinct content groups.
- Use `content-gap` between a section introduction and its primary content, and between copy and supporting media when they stack.
- Keep repeated items on one rhythm: `space-6` for compact lists or `space-7` for service and process rows, with a shared border rather than individual containers.
- The first and last child do not add margins outside a section. The section owns its boundary spacing.

Use a flow utility for ordinary vertical content instead of assigning margins to every element:

```css
.flow > * {
  margin-block: 0;
}

.flow > * + * {
  margin-block-start: var(--flow-space, var(--space-4));
}
```

Set `--flow-space` on the content group from the spacing scale when a documented relationship calls for a different interval.

## Alignment rules

- Align section headings, paragraphs, controls, and media edges to grid lines. A child may be narrower than its span to honor its content measure.
- Default to start alignment. Center only a short standalone statement of three lines or fewer, consistent with the typography rules.
- Align related items by their first meaningful text baseline when practical; do not vertically center long copy beside media.
- A section label aligns with the heading's first line. An action aligns with the content group it advances, not the outer section edge.
- Use one intentional asymmetry per composition. Do not combine offset columns, overlapping media, and unequal vertical starts unless each serves the message.
- Allow approved imagery to reach the container or viewport edge. Text, controls, captions, and focus indicators remain within the content gutter.
- Keep backgrounds and borders aligned to section boundaries rather than wrapping each text group in a panel.

## Mobile stacking and reordering

The compact state is one clear reading sequence. Use this order when each region exists:

1. Label or eyebrow
2. Heading
3. Supporting copy
4. Primary and secondary actions
5. Supporting media and its caption
6. Secondary note or metadata that depends on the media

Apply the following rules:

- Write the DOM in the meaningful compact order. Use grid placement at wider states instead of CSS `order` to repair source order.
- Stack hero copy before hero imagery. The promise and action must remain complete if the image is absent.
- Keep copy before imagery in alternating desktop sections; do not alternate the compact reading order for visual variety.
- Keep an image and its caption together as one figure. Move the figure as a unit.
- Stack contact context before the form. Keep submit feedback directly after the control or form it describes.
- Collapse multi-column service, process, metadata, and footer rows into one vertical group per item before moving to the next item.
- Let action groups wrap. Stack actions when their labels collide or when either action would fall below its minimum target size; do not reduce label text.
- Preserve at least `gutter-inline` around every text and control region, including images that extend beyond the content container.
- Use intrinsic media dimensions or `aspect-ratio` to reserve image space. Image crops and subject placement belong to the image-composition specification.

## Responsive safeguards

- At 320 CSS pixels, the page must have no horizontal scrolling for ordinary content and no clipped text, controls, focus rings, or captions.
- At 200% text zoom, layouts must fall back to a simpler grid state without loss of content or functionality.
- Do not set fixed block heights on text containers, navigation panels, form controls with multiline content, or sections.
- Use `min()`, `max()`, `clamp()`, `minmax()`, and content measures instead of viewport-specific pixel widths.
- Account for notches only on elements that touch the viewport edge, using safe-area insets in addition to—not instead of—the content gutter.
- Horizontal scrolling is allowed only for content whose meaning depends on two-dimensional presentation. The core site compositions defined here do not require it.

## Acceptance checks

- Build representative hero, section-introduction, copy/media, project-proof, service-panel, contact, and reading-page compositions using only documented widths, grid lines, gaps, and spacing tokens.
- Review each composition at 320px, 768px, 1024px, 1280px, and 1440px viewport widths.
- Repeat the review at 200% text zoom and with the fallback font from the typography specification.
- Confirm that removing every image leaves the message, service scope, and primary action complete and correctly aligned.
- Follow the DOM with CSS disabled and with keyboard focus to verify that visual placement never changes reading or interaction order.
- Flag every spacing, width, offset, and breakpoint value that is not defined here or in a component-specific exception.
- Confirm that major sections retain intentional whitespace without forcing short content to fill a viewport.
