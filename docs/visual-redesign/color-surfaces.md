# Blyx color, surface, border, and depth system

_Issue #26 · Visual design system · September 2026_

This specification defines the site-wide color and surface system. Warm neutral fields create the calm composition approved for the redesign; deep ink and green provide hierarchy and action without competing with project imagery.

## Design principles

- Let typography, spacing, and imagery carry the composition. Color clarifies hierarchy, interaction, and status.
- Use semantic token names so a component can move between pages without acquiring page-specific values.
- Prefer a solid field behind essential text. Do not use overlays to repair contrast on detailed imagery.
- Use green selectively for brand recognition, links, actions, focus, and small moments of emphasis—not as a decorative wash across every section.
- Prefer borders and background shifts to shadows. Elevation must describe a real layer in the interface.

## Color tokens

Use these values directly when implementing the visual design guide. Components consume the semantic token that describes their purpose; they do not introduce one-off hex values.

```css
:root {
  color-scheme: light;

  --color-brand-accent: #159d73;
  --color-brand-strong: #0c7253;

  --color-text: #17201d;
  --color-text-muted: #56625d;
  --color-text-inverse: #f5f3ed;
  --color-text-inverse-muted: #bcc8c2;
  --color-text-disabled: #606a65;
  --color-text-inverse-disabled: #aab6b0;

  --color-background: #f5f3ed;
  --color-surface: #ffffff;
  --color-surface-subtle: #e9e6dd;
  --color-surface-brand: #ddefe8;
  --color-surface-inverse: #17201d;
  --color-surface-inverse-raised: #202b27;
  --color-surface-disabled: #e5e7e4;
  --color-surface-inverse-disabled: #2e3a34;

  --color-border: #c8cec9;
  --color-border-strong: #858f8a;
  --color-border-inverse: #3f4c46;
  --color-border-inverse-strong: #69766f;

  --color-focus: #0c7253;
  --color-focus-inverse: #72e0ba;

  --color-success: #17633f;
  --color-success-surface: #e2f1e9;
  --color-success-inverse: #82dbb2;
  --color-error: #9d3030;
  --color-error-surface: #fbe8e8;
  --color-error-inverse: #ffb3b3;
}
```

### Token roles

| Token | Role |
| --- | --- |
| `brand-accent` | Brand mark, meaningful icons, selected indicators, and controlled accent fills |
| `brand-strong` | Links and actions on light fields; compact brand labels that require normal-text contrast |
| `text` | Headings, body copy, labels, and primary interface text on light fields |
| `text-muted` | Supporting copy, captions, metadata, and secondary interface text on light fields |
| `text-inverse` | Primary text on inverse surfaces |
| `text-inverse-muted` | Supporting copy and metadata on inverse surfaces |
| `text-disabled` | Text inside an unavailable control; pair with `surface-disabled` and never reduce opacity |
| `text-inverse-disabled` | Text inside an unavailable control on an inverse field |
| `background` | Primary page field and default copy region |
| `surface` | Reading sections, forms, menus, and panels that need separation from the page field |
| `surface-subtle` | Quiet grouped content and low-emphasis section differentiation |
| `surface-brand` | Short brand callouts, selected states, or confirmation-adjacent content |
| `surface-inverse` | Dark section field, primarily for the contact close and footer |
| `surface-inverse-raised` | Nested panel or control grouping on an inverse field |
| `surface-disabled` | Unavailable controls on a light field |
| `surface-inverse-disabled` | Unavailable controls on an inverse field |
| `border` / `border-inverse` | Decorative separators and boundaries that are not required to identify a control |
| `border-strong` / `border-inverse-strong` | Control boundaries and meaningful graphical edges requiring 3:1 contrast |
| `focus` / `focus-inverse` | Keyboard focus indicators on light and dark fields |
| `success` / `success-surface` | Confirmed completion or valid submission state |
| `success-inverse` | Success text and icons on inverse fields |
| `error` / `error-surface` | Invalid input, failed submission, or destructive consequence |
| `error-inverse` | Error text, icons, and control boundaries on inverse fields |

The green logo asset remains the primary brand mark on light fields. Use an approved monochrome logo on dark or visually complex fields. The orange logo variants are not interface accent colors and do not extend the palette.

## Approved foreground and background pairs

Contrast values are rounded to two decimals from unrounded calculations. Normal text requires at least 4.5:1. Large text follows the size and weight threshold defined in the [typography specification](./typography.md). Control boundaries, meaningful icons, and focus indicators require at least 3:1 against adjacent colors.

| Foreground | Background | Ratio | Approved use |
| --- | --- | ---: | --- |
| `text` | `background` | 15.01:1 | All text roles |
| `text-muted` | `background` | 5.73:1 | All text roles |
| `brand-strong` | `background` | 5.33:1 | Links, actions, labels |
| `text` | `surface` | 16.66:1 | All text roles |
| `text-muted` | `surface` | 6.36:1 | All text roles |
| `text` | `surface-subtle` | 13.35:1 | All text roles |
| `text-muted` | `surface-subtle` | 5.10:1 | All text roles |
| `text` | `surface-brand` | 13.95:1 | All text roles |
| `brand-strong` | `surface-brand` | 4.96:1 | Links, actions, labels |
| `text-inverse` | `surface-inverse` | 15.01:1 | All text roles |
| `text-inverse-muted` | `surface-inverse` | 9.66:1 | All text roles |
| `text-inverse` | `surface-inverse-raised` | 13.18:1 | All text roles |
| `text-inverse-muted` | `surface-inverse-raised` | 8.48:1 | All text roles |
| `surface` | `brand-strong` | 5.92:1 | Button and compact action text |
| `text` | `brand-accent` | 4.84:1 | Text on accent fills |
| `success` | `success-surface` | 6.22:1 | Status heading and message |
| `success` | `background` | 6.54:1 | Status icon, heading, and message |
| `success` | `surface` | 7.26:1 | Status icon, heading, and message |
| `error` | `error-surface` | 6.14:1 | Error heading and message |
| `error` | `background` | 6.53:1 | Error icon, heading, and message |
| `error` | `surface` | 7.24:1 | Error icon, heading, and message |
| `text-disabled` | `surface-disabled` | 4.51:1 | Disabled control text |
| `text-inverse-disabled` | `surface-inverse-disabled` | 5.66:1 | Inverse disabled control text |
| `success-inverse` | `surface-inverse` | 10.09:1 | Inverse success icon and message |
| `success-inverse` | `surface-inverse-raised` | 8.86:1 | Inverse success icon and message |
| `error-inverse` | `surface-inverse` | 9.80:1 | Inverse error icon and message |
| `error-inverse` | `surface-inverse-raised` | 8.60:1 | Inverse error text and control boundary |
| `border-strong` | `background` | 3.01:1 | Control boundary |
| `border-strong` | `surface` | 3.34:1 | Control boundary |
| `border-inverse-strong` | `surface-inverse` | 3.51:1 | Inverse control boundary |
| `border-inverse-strong` | `surface-inverse-raised` | 3.08:1 | Inverse control boundary |
| `focus` | `background` | 5.33:1 | Focus indicator |
| `focus` | `surface` | 5.92:1 | Focus indicator |
| `focus-inverse` | `surface-inverse` | 10.38:1 | Inverse focus indicator |
| `focus-inverse` | `surface-inverse-raised` | 9.11:1 | Inverse focus indicator |

`brand-accent` reaches 3.10:1 on `background` and 3.44:1 on `surface`. It may identify large text, icons, focus-independent selected states, and decorative brand details there, but it must not color normal-size text. Use `brand-strong` when green normal-size text is required.

## Light and dark surfaces

The default page alternates only when content structure benefits from a new field:

1. Use `background` for hero copy fields and spacious editorial sections.
2. Use `surface` for forms, reading-dense sections, and content that needs a clean separation from the page field.
3. Use `surface-subtle` for quiet grouping; it does not create a card by itself.
4. Use `surface-brand` sparingly for one concise callout or selected state, not as a page background.

Do not alternate backgrounds mechanically. Adjacent sections may share a field and rely on spacing or a separator. Avoid placing every section in a container.

Reserve `surface-inverse` for a purposeful dark close, such as the contact section and footer, or for a short proof section that benefits from concentrated emphasis. Keep contiguous dark sections visually continuous rather than alternating dark shades. Use `surface-inverse-raised` only when a nested element must be distinguishable.

On inverse fields, use only inverse text, border, and focus tokens. Do not place `text-muted`, `brand-strong`, success, or error foreground tokens on dark fields without a separately verified pair. Avoid large solid areas of `brand-accent`; green remains an accent rather than a section theme.

Images may meet a surface edge or blend into it under the image-composition system, but essential text remains on one of the defined solid fields. Gradients are reserved for directional image-edge fades, not decorative section backgrounds.

## Borders

```css
:root {
  --border-width: 1px;
  --border-width-focus: 2px;
}
```

- Use a 1px `border` or `border-inverse` separator for section rules, list divisions, and nonessential grouping.
- Use a 1px `border-strong` or `border-inverse-strong` boundary wherever the edge is required to identify an input, select, checkbox, or other control.
- Focus uses a solid 2px outline with a 3px offset. Choose `focus` or `focus-inverse` from the surface beneath the outline; never remove the outline without an equally visible replacement.
- Do not combine a full border, shadow, and contrasting fill on the same static container. Select the least decoration that makes the relationship clear.
- Dividers may be low contrast because they are supplementary. They must not be the only indication of hierarchy, state, or control shape.

## Radius

```css
:root {
  --radius-control: 0.25rem;
  --radius-surface: 0.5rem;
  --radius-pill: 999px;
}
```

- Use `radius-control` for text fields, selects, compact controls, and rectangular buttons.
- Use `radius-surface` for menus, dialogs, and the rare bordered or raised content surface.
- Use `radius-pill` only for short primary actions, tags, and binary state controls whose shape communicates interaction.
- Images follow their composition rather than receiving a default radius. Full-width and edge-blended images remain square; an explicitly framed image may use `radius-surface`.
- Do not mix radius values within one component family or invent larger decorative rounding.

## Depth

```css
:root {
  --shadow-raised:
    0 1px 2px rgba(23, 32, 29, 0.08),
    0 12px 32px rgba(23, 32, 29, 0.10);
  --shadow-overlay:
    0 4px 12px rgba(23, 32, 29, 0.10),
    0 24px 64px rgba(23, 32, 29, 0.18);
}
```

- The default elevation is none. Static sections, cards, images, form fields, and buttons do not receive shadows.
- Use `shadow-raised` for a mobile navigation panel, sticky header after scroll, popover, or other element that visibly sits above page content.
- Use `shadow-overlay` only for a modal or dialog above a backdrop.
- Use no more than one raised layer and one overlay layer in a viewport. Do not use inset, glow, colored, or continuously animated shadows.
- On dark fields, distinguish layers with the inverse surface and border tokens rather than a dark shadow.

## Status and state rules

- Pair success and error foregrounds with their matching surfaces for messages. Use the foreground token alone for an icon or label only on `background` or `surface`, where it also exceeds 4.5:1.
- State language and an icon accompany status color. Color is never the only indicator of success, error, selection, or required input.
- Disabled controls use `text-disabled`, `surface-disabled`, and `border` on light fields, or their inverse disabled counterparts on dark fields. Do not lower the entire component's opacity, because that makes nested text unpredictable.
- Hover, active, loading, and selected behavior will reuse these tokens in the shared-controls specification. That work may assign tokens to states but must not add new colors without updating this source.

## Accessibility and validation

- Test final rendered combinations, including antialiasing, imagery, transparency, and browser state changes. The table validates solid token pairs only.
- Maintain at least 4.5:1 for normal text and 3:1 for large text as defined by WCAG 2.2 contrast minimum.
- Maintain at least 3:1 for meaningful control boundaries, state indicators, and icons against adjacent colors.
- Give keyboard focus a visible area equivalent to a 2px perimeter and at least 3:1 contrast between focused and unfocused pixels.
- Recheck contrast whenever a color, opacity, blend mode, or background changes. Do not infer contrast from token names.

Validate implementations against [WCAG 2.2 contrast minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum), [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), and [focus appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html).

## Acceptance checks

- Confirm that every rendered color maps to a semantic token and that no component uses a page-specific color name.
- Review representative hero, reading, form, contact, footer, success, and error compositions on their intended fields.
- Measure every foreground/background pair used for text, meaningful icons, control boundaries, and focus indicators.
- Verify that removing color still leaves status, selection, links, and required fields understandable through text, shape, position, or decoration.
- Confirm that shadows occur only where interface layers overlap and that radii follow the three defined roles.
- Check approved logo variants on each surface without recoloring, effects, or unverified contrast assumptions.
