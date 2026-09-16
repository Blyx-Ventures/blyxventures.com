# Blyx typography and content hierarchy

_Issue #25 · Visual design system · September 2026_

This specification defines the site-wide type system. It supports a calm, precise hierarchy in which the message and primary action remain clear before imagery is considered.

## Typeface

Use **Inter Variable** for every text role. A single family keeps the interface restrained and gives headings, body copy, navigation, and forms a consistent voice. Use the roman variable file for weights 400–700 and the italic variable file where editorial rules call for italics; do not synthesize bold or italic faces.

Self-host WOFF2 files and preload only the roman variable file used above the fold. Load the italic file without preloading it. Set `font-display: swap`. The site must remain readable and keep the same hierarchy while the web font loads or when it is unavailable.

```css
:root {
  --font-sans: "Inter Variable", Inter, ui-sans-serif, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html {
  font-family: var(--font-sans);
  font-size: 100%;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
```

The fallback order prioritizes the platform UI family, then common neutral sans serifs. Never reduce a fallback's size or line height to imitate Inter. Layouts must tolerate the fallback metrics without clipping, overlap, or loss of controls.

## Type roles

All sizes use `rem`; the table assumes the browser default of 16px. Fluid values scale between narrow and wide viewports without breakpoint jumps. The maximums are limits, not targets for every placement.

| Token | Use | Size | Weight | Line height | Tracking | Measure |
| --- | --- | --- | --- | --- | --- | --- |
| `display-xl` | Homepage promise only | `clamp(3rem, 1.8rem + 5.5vw, 6rem)` (48–96px) | 600 | 0.94 | `-0.045em` | 11ch |
| `display-lg` | Service-page hero | `clamp(2.5rem, 1.7rem + 3.6vw, 4.5rem)` (40–72px) | 600 | 0.98 | `-0.04em` | 14ch |
| `heading-1` | Primary page title when no display style is used | `clamp(2.25rem, 1.75rem + 2.2vw, 3.5rem)` (36–56px) | 600 | 1.02 | `-0.035em` | 18ch |
| `heading-2` | Major section heading | `clamp(1.75rem, 1.45rem + 1.35vw, 2.5rem)` (28–40px) | 600 | 1.08 | `-0.025em` | 24ch |
| `heading-3` | Subsection or item heading | `clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)` (20–24px) | 600 | 1.2 | `-0.015em` | 30ch |
| `body-lg` | Hero lede and section introduction | `clamp(1.125rem, 1.075rem + 0.22vw, 1.25rem)` (18–20px) | 400 | 1.55 | `0` | 60ch |
| `body` | Paragraphs, lists, and long-form content | `1rem` (16px) | 400 | 1.6 | `0` | 65ch |
| `body-sm` | Secondary notes and compact supporting copy | `0.875rem` (14px) | 400 | 1.5 | `0` | 60ch |
| `label` | Eyebrows, navigation, metadata labels, and short control labels | `0.75rem` (12px) | 700 | 1.35 | `0.1em` when uppercase; `0.02em` otherwise | 32ch |
| `caption` | Image captions, legal notes, and tertiary metadata | `0.75rem` (12px) | 400 | 1.5 | `0.01em` | 60ch |
| `form-label` | Visible form labels | `0.875rem` (14px) | 600 | 1.4 | `0` | 40ch |
| `form-control` | Input, select, and textarea values | `1rem` (16px) | 400 | 1.5 | `0` | unrestricted inside control |
| `form-help` | Instructions, validation, and error text | `0.875rem` (14px) | 400; 600 for the error lead-in | 1.45 | `0` | 60ch |
| `action` | Buttons and text links | `0.875rem` (14px) | 600 | 1.3 | `0.01em` | one short phrase |

Weights have fixed jobs: 400 for reading, 600 for hierarchy and actions, and 700 only for compact labels. Do not use weight 500 as an extra hierarchy level. Do not use weights below 400.

## Hierarchy

Each page has one semantic `h1`. A homepage or service hero may style that `h1` as `display-xl` or `display-lg`; display size is a visual role, not an additional heading level. Major sections use `h2`, nested sections use `h3`, and heading levels are never skipped to obtain a visual size.

A content group follows this order when each element is needed:

1. Optional label or eyebrow
2. Heading
3. Supporting copy
4. Primary action
5. Optional secondary action or note

Use one dominant heading per viewport section. Supporting copy must be visibly quieter through size and semantic text color, not by reducing opacity. Navigation and actions use sentence case. Uppercase is reserved for short labels of no more than four words and must use the label tracking value.

## Line length and wrapping

- Keep paragraph text between 45ch and 70ch; target 60–65ch for sustained reading.
- Keep hero explanations to 60ch and two to four lines at their intended viewport.
- Apply `text-wrap: balance` to display and heading roles and `text-wrap: pretty` to body copy where supported. Normal wrapping remains the fallback.
- Do not insert manual line breaks in headings by default. A deliberate desktop break is allowed only when it preserves meaning and is removed below that composition's breakpoint.
- Avoid a final line containing a single short word. Rewrite the copy before tightening tracking or changing the type size.
- Never compress type, use negative word spacing, or reduce the specified line height to make copy fit.
- Left-align paragraphs and form content. Do not justify body text. Center alignment is limited to short standalone statements of three lines or fewer.
- Let long words, email addresses, and URLs wrap with `overflow-wrap: anywhere`; do not truncate information required to act.

## Emphasis and editorial rules

- Prefer structure, concise writing, and whitespace over multiple typographic treatments.
- Use `strong` for meaningful emphasis and render it at weight 600. Limit emphasis to the phrase that carries the distinction.
- Use italics only for titles, technical terms at first use, or quoted emphasis. Do not use italics for instructions, errors, or important actions.
- Use underlines for inline links. Color alone must not identify a link inside body copy.
- Use tabular numerals for phone numbers, project indices, measurements, and other values that benefit from alignment.
- Use real text for all essential content. Logos are the only routine exception to the prohibition on images of text.
- Write customer-facing copy in plain language: outcome first, concrete service detail second. Do not create hierarchy with repeated slogans or ornamental microcopy.

## Responsive and accessibility rules

- Preserve the user's browser font-size preference: keep the root at `100%` and use relative units for text and text containers.
- At 320 CSS pixels wide, text must reflow without horizontal page scrolling, clipping, overlap, or hidden actions. Components may wrap or stack before text is reduced.
- At 200% text zoom, all content and controls must remain present, readable, and operable.
- Body and form-control text never renders below 16px. Supporting text never renders below 14px; 12px is reserved for labels, captions, and tertiary metadata with short line lengths.
- Text and images of text require at least 4.5:1 contrast against every background state. Text at least 24px regular or 18.5px bold may use the 3:1 large-text threshold, but 4.5:1 remains the preferred target.
- Placeholder text does not replace a label and must meet the normal-text contrast threshold when it conveys useful information.
- Text placed over detailed photography is prohibited. When text and an image share a region, the text must sit on a solid or reliably controlled field that meets contrast requirements in every crop and state.
- Do not rely on font weight, size, capitalization, or color alone to communicate validation state, required status, or interaction state.

Validate these rules against [WCAG 2.2 contrast minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum), [resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), and [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

## Acceptance checks

- Review the homepage, one service page, navigation, contact form, and footer at 320px, 768px, 1280px, and 1440px widths.
- Repeat the review with the web font blocked to verify the fallback strategy.
- Test browser text zoom at 200% and viewport reflow at 320 CSS pixels.
- Confirm one `h1` per page and a logical, unskipped heading outline.
- Measure the longest paragraph and representative hero, heading, label, caption, and form content against the role limits.
- Check contrast for default, hover, focus, disabled, success, and error text wherever those states exist.
