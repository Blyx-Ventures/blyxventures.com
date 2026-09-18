# Blyx navigation, controls, and form system

_Issue #28 · Visual design system · September 2026_

This specification defines the appearance and behavior of recurring interactive elements. Components use the shared [typography](./typography.md), [color and surface](./color-surfaces.md), and [layout](./layout.md) tokens without introducing page-specific variants.

## Interaction principles

- Make the next action obvious without turning every link into a button.
- Use native links, buttons, inputs, selects, textareas, and fieldsets as the behavioral foundation.
- Keep labels visible and state language explicit. Placeholder text, color, and icons never carry meaning alone.
- Provide the same behavior and state hierarchy on light and dark fields.
- Use motion only to clarify a state change. Respect `prefers-reduced-motion` and never require motion for comprehension.
- Preserve a minimum 44px target for standalone controls. Inline text links follow their text line box and maintain adequate separation from adjacent targets.

## Shared dimensions and motion

These component dimensions are named exceptions to the spacing scale. Internal gaps and margins continue to use the spacing tokens.

```css
:root {
  --control-height: 3rem;
  --control-height-compact: 2.75rem;
  --field-height: 2.75rem;
  --header-height: clamp(4.5rem, 4.1rem + 1vw, 5.5rem);
  --transition-state: 160ms ease;
}
```

| Token | Use |
| --- | --- |
| `control-height` | Standard buttons and standalone action targets |
| `control-height-compact` | Menu toggle, icon button, or compact header action; never use below 44px |
| `field-height` | Single-line input and select minimum height (44px) |
| `header-height` | Shared header block size from compact through wide layouts |
| `transition-state` | Color, background, border, and short opacity transitions |

Do not transition layout dimensions or use spring, bounce, or continuous loading motion. A loading spinner may rotate when reduced motion is not requested; otherwise show it as a static progress glyph beside the loading label.

## Keyboard focus

Every keyboard-operable element uses the focus treatment defined by the color system:

```css
:focus-visible {
  outline: var(--border-width-focus) solid var(--color-focus);
  outline-offset: 3px;
}

.on-inverse :focus-visible {
  outline-color: var(--color-focus-inverse);
}
```

The outline remains visible in hover, active, selected, invalid, and loading states. Do not replace it with a box shadow or border-color change. Sticky headers and open navigation panels must not obscure the focused element.

## Header and primary navigation

The shared header is sticky at the top of the viewport on a solid `background` field. It uses `header-height`, a bottom `border`, the standard content width, and the standard inline gutter. The header does not overlay hero copy or photography.

At the large grid state, use three regions:

- Brand mark at the start, linking to the homepage and labeled “Blyx home.”
- Primary navigation centered or start-aligned in the available middle region.
- A reserved action region at the end. It contains “Tell us about your project” only after the matching hero action has scrolled above the header.

Root primary navigation exposes `For homes`, `For business`, and `How we work`. The two audience links receive equal prominence. Audience hubs may replace `How we work` with concise contextual service links when they fit, but must retain a visible switch to the other audience. Do not place mixed residential and business services in one dropdown.

On the root homepage, the primary inquiry action begins in the hero. Use `IntersectionObserver` to activate the matching reserved header action only after the hero action crosses above the sticky header. Use two stable links rather than reparenting one link between containers. Both share the same label, `/contact/` destination, and analytics identity; only one is interactive at a time. Preserve the hero link as the no-JavaScript path.

Reserve the header action width in both states to prevent navigation movement. The inactive action uses `visibility: hidden`, `pointer-events: none`, and `tabindex="-1"`. When activating it, restore visibility, pointer events, and normal tab order. If the hero action is focused, defer the handoff until focus leaves it. A short opacity transition may clarify the state change, but it is removed under `prefers-reduced-motion`.

Navigation links use the `action` type role, `text` color, and a target height of at least `control-height-compact`. The current page uses `aria-current="page"`, weight 600, and a 2px underline or bottom rule. Hover uses `brand-strong`; focus keeps the shared outline; active uses `text` plus a 1px downward press without removing the current-page indicator.

The brand asset has a maximum width of 9rem and retains its intrinsic ratio. It receives a target area at least `control-height-compact` high. Use an approved logo asset without recoloring or effects.

Set `scroll-padding-top` on the document and `scroll-margin-top` on anchored sections to `header-height` plus `space-4`, so in-page targets and focused content are not hidden beneath the sticky header.

## Mobile navigation

Below the large grid state, replace the inline navigation and header action with one visible “Menu” button. Pair the visible text label with a decorative three-line menu icon. Use three restrained two-pixel strokes; the middle stroke may be slightly shorter and end-aligned to add distinction without weakening the familiar symbol. The expanded state changes the label to “Close” and resolves the outer strokes into an X while the middle stroke disappears. The button uses `aria-expanded` and `aria-controls` to identify the navigation panel.

The closed panel uses the native `hidden` state so it and its descendants are absent from the accessibility tree and keyboard order. The open panel:

- Sits immediately below the header on `surface`, separated by `border` and `shadow-raised`.
- Uses the standard inline gutter and `space-5` block padding.
- Lists For homes, For business, and How we work as full-width links with a minimum 48px target on the root page. Audience hubs may list their contextual services after the audience switch.
- Keeps “Tell us about your project” visible beside the compact header or immediately after the navigation links once the hero action has crossed above the header. Use the arrangement that preserves the 44px targets at 320px and 200% text zoom; do not shorten the visible label into an ambiguous phrase.
- Allows content to determine its height and remains usable at 200% text zoom.

Opening the panel leaves focus on the expanded Menu button; the next Tab moves to the first link. Escape closes the panel and returns focus to the Menu button. Activating a link closes the panel. Closing through a pointer action outside the panel is allowed but is never the only closing method. Do not trap focus because the panel is a disclosure, not a modal dialog.

The panel may appear without animation. If animated, transition only opacity and a short vertical offset for `transition-state`; skip the transition under reduced motion. The expanded button label changes to “Close,” while the accessible name continues to describe the action.

## Audience gateway links

The root audience gateway contains two large linked panels. Each side uses one block-level anchor as its outermost element and complete hit area. Residential links to `/residential/`; business links to `/business/`. Text, decorative imagery, and the visible action cue remain inside the anchor without nested links or buttons.

The default state preserves clear panel boundaries and readable text without relying on hover. Hover may adjust the image treatment and action cue together. Focus uses the shared two-pixel outline around the full panel and remains visible above the slash and image layers. Active applies the standard one-pixel press to the content treatment without moving the panel boundary.

The two links use complementary clipped shapes so their images and hit areas meet along one diagonal edge. A narrow off-white architectural reveal with one graphite keyline sits directly over that seam. It belongs to the non-interactive wrapper, is excluded from the accessibility tree, uses `pointer-events: none`, and never overlaps the text or focus treatment. The visual divider does not create a dead activation region between the two links. Use an inset or shape-following focus treatment so clipping does not hide the focused panel boundary.

## Buttons

Buttons and button-styled links use the `action` type role, `control-height`, `radius-control` or `radius-pill`, `space-5` inline padding, and a 1px transparent or strong border. Use a pill only for a short primary action; longer and multiline actions use `radius-control`.

### Variants

| Variant | Light field | Inverse field | Use |
| --- | --- | --- | --- |
| Primary | `brand-strong` background; `surface` text | `surface` background; `text` text | One main action in a content group |
| Secondary | Transparent; `border-strong`; `text` text | Transparent; `border-inverse-strong`; `text-inverse` text | Alternative or lower-priority action |
| Quiet | Transparent; `text` text | Transparent; `text-inverse` text | Compact utility action; not a substitute for inline links |

### States

| State | Primary | Secondary and quiet |
| --- | --- | --- |
| Hover | Light: `text` background. Inverse: `surface-brand` background. | Light: `surface-subtle` background. Inverse: `surface-inverse-raised` background. |
| Focus | Preserve the current fill and add the shared focus outline. | Preserve the current fill and add the shared focus outline. |
| Active | Light: `brand-accent` background with `text`. Inverse: `brand-accent` background with `text`. Apply a 1px downward press. | Use the hover background and a 1px downward press. |
| Disabled | `surface-disabled` with `text-disabled` on light; inverse disabled tokens on dark. Remove press and motion. | Same disabled pairing; retain a visible boundary. |
| Loading | Preserve the button width, replace the label with a specific present-participle label such as “Sending…,” and add a progress glyph. | Same treatment. |

Use native `disabled` for unavailable buttons. Loading buttons also expose `aria-busy="true"`; a nearby polite status region announces progress and outcome. Prevent duplicate activation while loading. The cursor alone does not communicate state.

## Text links

- Inline links are underlined in their default state with an offset of approximately `0.18em`; they use the surrounding text color.
- Hover changes light-field links to `brand-strong` and inverse links to `text-inverse`; the underline remains.
- Focus uses the shared outline and keeps the underline.
- Active links retain contrast and may shift down 1px; visited links do not introduce a new palette color.
- Standalone directional links use the `action` role and may include one trailing arrow marked decorative. Their accessible name is complete without the arrow.
- Email and telephone links use visible, literal contact details. Do not hide the destination behind “click here.”
- Disabled navigation is omitted rather than rendered as an inactive link. Do not put `disabled` on anchors.

## Form structure

The contact form uses one column by default. At the medium layout state, only closely related short controls may share a two-column row; the layout stacks before either control becomes narrower than 20rem.

Use this order for each field:

1. Visible label or fieldset legend
2. Optional help text
3. Control or choice group
4. Validation message

Mark optional fields with the visible suffix “(optional).” Introduce the form with “All fields are required unless marked optional.” Do not rely on an asterisk legend. Every input has a persistent label; placeholder text is reserved for a concise example when it adds information beyond the label.

Group related checkboxes in a `fieldset` with a `legend`. Keep native inputs in the accessibility tree and make the full visible option label clickable. Associate help and error text through `aria-describedby`.

## Form controls

Text inputs, email inputs, telephone inputs, ZIP inputs, selects, and textareas use:

- `form-control` typography and the inherited text color.
- At least `field-height` for a single line.
- `space-2` block and `space-4` inline padding.
- `radius-control` and a 1px strong border.
- `surface` on light fields or `surface-inverse-raised` on dark fields.
- `text-muted` or `text-inverse-muted` for optional placeholder examples.
- Full available width, with no fixed text-entry width below the containing grid span.

Textareas start at a minimum block size of 8rem and resize vertically. Selects retain an obvious arrow with at least 3:1 contrast. Browser autofill must preserve readable text, boundary, and focus colors; do not suppress password-manager or autofill behavior.

### Field states

| State | Light field | Inverse field |
| --- | --- | --- |
| Default | `surface`, `text`, `border-strong` | `surface-inverse-raised`, `text-inverse`, `border-inverse-strong` |
| Hover | Border changes to `brand-strong` | Border changes to `focus-inverse` |
| Focus | Default or hover colors plus `focus` outline | Default or hover colors plus `focus-inverse` outline |
| Filled | Same as default; value remains `text` | Same as default; value remains `text-inverse` |
| Invalid | 2px `error` border and `error` message | 2px `error-inverse` border and `error-inverse` message |
| Disabled | `surface-disabled`, `text-disabled`, `border`; no opacity change | Inverse disabled tokens and `border-inverse`; no opacity change |
| Read-only | `surface-subtle`, `text`, `border` | `surface-inverse`, `text-inverse-muted`, `border-inverse` |

Do not show a valid state merely because a user has typed. Reserve success treatment for a meaningful completed step or confirmed submission.

Labels use `form-label`; help, error, and status copy use `form-help`. Keep `space-2` between a label and its control, `space-2` around help text, and `space-2` before a visible validation message. Reserve the message position only when doing so does not create unexplained blank space; layout may expand when a message appears.

## Checkbox options

Checkboxes remain native inputs with an accent or custom visual that preserves their semantics. The checkbox itself is 1.125rem square, and its label creates a target at least 44px high.

Use a single option row with `space-2` padding, `space-3` gap, `radius-control`, and the same surface and border pair as text controls. On checked options, use `surface-brand` with `brand-strong` boundary and `text` on light fields; use `surface-inverse-raised`, `focus-inverse` boundary, and `text-inverse` on dark fields. Include the visible checkmark so color is not the only selected indicator.

Focus appears around the full option row via `:focus-within`. Invalid choice groups use the appropriate error boundary around the group and a text message after the options. “Not sure yet” remains mutually exclusive with specific service selections, matching the existing contact behavior.

## Validation and submission feedback

- Validate after the first submit attempt, or after a field already marked invalid changes. Do not show errors on untouched fields when the page loads.
- On failed submit validation, focus the first invalid control. Keep all entered values intact.
- Set `aria-invalid="true"` on each invalid control or choice group and connect the specific message with `aria-describedby`.
- State what happened and how to fix it: “Enter a valid email address,” not “Invalid value.”
- Use `role="status"` with `aria-live="polite"` for sending and success messages. Use `role="alert"` or an assertive region for a submission failure that requires immediate action.
- Loading reads “Sending…” and prevents duplicate submissions without clearing the form.
- Success reads “Thanks — we’ll be in touch soon,” uses the success token for the active surface, and appears adjacent to the submit action. Clear fields only after confirmed acceptance.
- Submission failure keeps all values and provides both a retry action and the visible contact email address. Use the error token for the active surface.
- When focus moves to a field or feedback message, account for the sticky header so the target remains visible.

## Existing contact-flow coverage

| Existing element or behavior | Required component treatment |
| --- | --- |
| Name, email, telephone, and project ZIP | Labeled single-line fields with autocomplete retained |
| Property type and approximate project size | Labeled selects with a visible arrow and disabled prompt option |
| Areas of need | Fieldset, help text, full-row checkbox targets, mutually exclusive “Not sure yet,” and group error |
| Project description | Labeled, vertically resizable textarea with the existing length limit |
| Honeypot | Remains programmatically unavailable to people and excluded from keyboard order; no visible style |
| Send inquiry | Primary submit button with idle, loading, disabled, and focus states |
| Field validation | Inline specific messages, programmatic descriptions, and focus on first invalid control |
| Sending, success, and failure | Live status adjacent to submit; confirmed success clears; failure preserves values and offers email fallback |
| Direct email and telephone | Literal, underlined links following the form |

## State matrix

Every interactive component included in the living guide must demonstrate the applicable states below on both `background` or `surface` and `surface-inverse`.

| Component | Default | Hover | Focus | Active / selected | Disabled | Loading | Invalid | Success |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Header link | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| Menu button | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| Primary button | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| Secondary button | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| Text link | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| Input / textarea | ✓ | ✓ | ✓ | — | ✓ | — | ✓ | — |
| Select | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — |
| Checkbox option | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — |
| Form submission | ✓ | — | ✓ | — | ✓ | ✓ | ✓ | ✓ |

## Accessibility and acceptance checks

- Navigate the header, mobile menu, every form control, submit action, and status links using only the keyboard in logical DOM order.
- Confirm that every focused element has the shared visible outline and is not covered by the sticky header or open panel.
- Verify standalone controls are at least 44px in each relevant dimension; never rely on the WCAG spacing exception for primary navigation, form controls, or actions.
- Test header and form states on both light and inverse surfaces, including hover, focus, active, disabled, loading, invalid, and success.
- Test the navigation and complete contact flow at 320px width and 200% text zoom without clipping, horizontal scrolling, or fixed-height overflow.
- Confirm labels, help text, errors, and status messages remain associated and announced with CSS and icons unavailable.
- Verify reduced-motion mode removes nonessential menu and loading animation while preserving state changes.
- Submit empty, malformed, corrected, successful, timed-out, and retried forms; confirm focus, values, and messages follow this specification.

Validate implementations against [WCAG 2.2 focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible), [target size minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), and [error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).
