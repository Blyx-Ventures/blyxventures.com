# Blyx image composition and edge-fade system

_Issue #29 · Visual design system · September 2026_

This specification defines how contextual equipment imagery supports copy without becoming a background spectacle or product catalog. Every image contributes one clear piece of residential or light-commercial context, installation evidence, or customer outcome.

## Core rules

- Copy carries the complete message and action. Removing the image must not change what the section means.
- Use one primary image idea per composition. A proof gallery may contain multiple views only when each adds distinct evidence.
- Show the installed device, workmanship detail, cable path, mounting relationship, or usable outcome—not an isolated product glamour shot.
- Preserve only enough architecture to explain where the technology lives and how it integrates with the home.
- Keep the focal subject fully sharp and opaque. Recede only low-information edges that contain wall, siding, ceiling, floor, sky, or soft background detail.
- Essential text stays on a solid field from the color system. Do not place it over detailed photography or rely on a dark overlay for legibility.
- Authentic Blyx project imagery is proof. Marketing photography and renders provide context but never represent completed Blyx work.

## Composition anatomy

Each image composition identifies four regions before cropping or treatment:

1. **Focal subject:** the device, installed result, or workmanship detail that proves the adjacent idea.
2. **Context anchor:** one architectural edge or material that explains placement, such as an eave, door trim, wall plane, joist, or rack frame.
3. **Transition band:** low-information image area that may fade into the page field.
4. **Expendable edge:** material that may leave the frame without changing the subject or context.

If an image does not contain all but the optional transition band, use a framed crop rather than manufacturing empty space or fading through meaningful detail.

## Crop and subject scale

### General crop rules

- Identify the focal subject before choosing an aspect ratio. Crop around the subject and one context anchor, not around the source image's center.
- Keep the complete device silhouette when its shape explains function. Cropping a cable run, wall plane, door, or rack edge is allowed when the remaining structure still explains placement.
- Preserve at least 8% of the frame between the focal subject and a crop or fade boundary on wide screens; target 12% on compact screens.
- Place the subject center away from the copy-facing edge. In a copy-left composition, the subject normally sits in the rightmost 45% of the media region; reverse this for copy-right compositions.
- Reserve 20–35% of the copy-facing side as low-information transition area when a seam fade is planned.
- The transition band never crosses a lens, reader face, door operator, termination point, fastener, status light, cable-management detail, hand, tool contact point, or other proof-bearing feature.
- Use `object-position` per asset rather than accepting `center` as a default. Record both wide and compact focal positions with the asset.

### Scale by role

| Role | Subject scale | Context | Default treatment |
| --- | --- | --- | --- |
| Hero support | Subject occupies roughly 35–60% of the media region's width or height | One architectural anchor | Hard crop or single-edge seam fade |
| Section support | Subject occupies roughly 25–50% of the media region | Enough environment to explain the adjacent service detail | Hard crop, seam fade, or limited corner recession |
| Authentic proof | Workmanship remains readable at the rendered size; the installed assembly may occupy 45–80% of the frame | Preserve context needed to verify the work | Framed crop without fade by default |
| Architectural context | Technology remains identifiable and occupies at least 12–25% of the frame | One room plane, doorway, eave, or sight line | Framed crop or limited corner recession |
| Transparent marketing subject | Subject occupies 45–70% of its transparent canvas | No simulated room or false installation context | Alpha subject on a solid field |

These ranges are review guides, not reasons to enlarge a low-resolution source. Reject an image when the subject cannot remain legible within its intended layout.

## Negative space and copy framing

- The copy field owns roughly half of a wide hero and remains visually calmer than the media field.
- Use walls, ceilings, trim, eaves, joists, or cable paths to lead toward the copy field or contain the subject. Do not rotate an image solely to manufacture a diagonal.
- Keep the transition band adjacent to the solid copy field. Do not place an unrelated gap between copy and the image fade.
- Match the image's faded edge to the exact underlying surface token. A fade into `background` cannot be reused on `surface` or an inverse field without changing the surface color.
- Keep actions and body copy outside the media element, mask, gradient, and pseudo-element stacking context.
- A section may use open negative space inside a photograph only as visual breathing room. It is not a license to place essential text over the photograph.
- When architecture supplies no useful copy-facing space, use a clear grid gap and framed image rather than forcing a fade.

## Approved image treatments

Use one treatment per image. A two-edge corner recession is the only approved combination.

### 1. Hard or off-canvas crop

Use when a subject or architectural line creates a clean edge without blending. Let an expendable image edge meet the container or viewport boundary. This is the default fallback and the preferred treatment for authentic proof.

- Keep the subject fully inside the safe area.
- Allow wall planes, siding, sky, or a continuation of a structural line to leave the frame.
- Use no shadow and no default radius. A framed architectural crop may use `radius-surface`.

### 2. Copy-facing seam fade

Use one horizontal fade where a low-information edge meets the copy field. The fade begins fully transparent at the image's copy-facing boundary and reaches full image opacity before the focal subject.

```css
:root {
  --image-fade-narrow: clamp(3rem, 6vw, 6rem);
  --image-fade-wide: clamp(5rem, 11vw, 11rem);
}

.image-fade-start {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 var(--image-fade-wide),
    #000 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 var(--image-fade-wide),
    #000 100%
  );
}

.image-fade-end {
  -webkit-mask-image: linear-gradient(
    to left,
    transparent 0,
    #000 var(--image-fade-wide),
    #000 100%
  );
  mask-image: linear-gradient(
    to left,
    transparent 0,
    #000 var(--image-fade-wide),
    #000 100%
  );
}
```

Use `image-fade-narrow` for compact supporting media and `image-fade-wide` for hero media. When CSS masks are unavailable, the acceptable fallback is the unmasked hard crop. Do not add a broad opacity reduction as a fallback.

For a vertically stacked service panel, the copy-facing seam is the image's bottom edge. Apply one `image-fade-narrow` surface-colored gradient at that edge and allow the solid copy field to overlap the transition by `service-panel-copy-overlap`. The copy field reaches full `surface` opacity before the eyebrow begins. Keep the image element, text, and controls in separate stacking contexts; no letter or focus indicator sits directly on image detail.

### 3. Limited corner recession

Use when two adjacent low-information edges meet, such as empty wall at the copy-facing side and floor at the bottom. Apply two surface-colored pseudo-element gradients, each confined to its own edge, rather than a radial gradient.

```css
.image-corner-recede {
  --image-surface: var(--color-background);
  position: relative;
}

.image-corner-recede::before,
.image-corner-recede::after {
  position: absolute;
  z-index: 1;
  content: "";
  pointer-events: none;
}

.image-corner-recede::before {
  inset: 0 auto 0 0;
  width: var(--image-fade-wide);
  background: linear-gradient(to right, var(--image-surface), transparent);
}

.image-corner-recede::after {
  inset: auto 0 0 0;
  height: var(--image-fade-narrow);
  background: linear-gradient(to top, var(--image-surface), transparent);
}
```

Reverse the inline edge for copy-right layouts. Do not add the remaining two edges. The result must read as the image receding toward one corner, not as a vignette around the frame.

### 4. Transparent marketing subject

Use a transparent PNG, WebP, or AVIF only for a simplified realistic render or licensed marketing cutout whose provenance is recorded. Place it directly on `background`, `surface`, or `surface-subtle`.

- Preserve a natural grounding cue when the object would otherwise appear to float, but do not add a dramatic product shadow.
- Keep related parts together only when they explain one system. Do not build a floating product array.
- Never extract a device from authentic project photography and present it as a freestanding marketing object.
- Treat the transparent boundary as the crop; do not add a second all-edge fade.

## Surface-colored overlay fallback

When a single-edge mask is unsuitable because the image element must remain fully opaque, use one pseudo-element gradient colored with `--image-surface`. Match that variable to the actual field below it. The overlay occupies only the documented transition band and stays behind all captions and controls.

Do not use surface overlays on authentic proof when they hide installation evidence. A framed crop is the proof fallback.

## Category-specific direction

| Category | Focal subject and context | Wide crop | Compact crop | Reject when |
| --- | --- | --- | --- | --- |
| Security camera | Camera body, mount, and eave or wall corner; show the viewing direction when useful | Place the camera in the outer half and use siding, soffit, or sky as the copy-facing transition band | Tighten around the camera, mount, and one construction edge; remove unrelated facade | The property or lifestyle setting is more prominent than the camera, or the lens/mount enters a fade |
| Network rack | Organized termination, patching, mounted equipment, and enough rack frame to show order | Let the rack occupy 45–70% of the media width; crop loose wall and peripheral clutter | Center the organized termination area and retain one rack edge; use no fade when detail fills the frame | Labels, cable paths, or termination quality become unreadable; the result resembles a product catalog |
| Cable installation | Deliberate cable path plus joist, wall, or conduit that explains routing | Use structural lines to carry the eye through the work; frame rather than fade dense construction | Isolate the cleanest meaningful segment and remove unrelated ductwork or empty attic volume | The image primarily communicates an unfinished or cluttered space rather than planned routing |
| Access reader | Reader face, mounting trim, and adjacent door or wall material | Place the reader near the outer third; use plain siding or wall as transition space | Use a portrait or near-square crop that retains the reader and one material change | The credential reader is too small to identify or the door context is absent |
| Door operator | Operator, door header, and enough of the door to explain automatic movement | Use a framed architectural crop when the doorway relationship matters | Crop to the operator and top half of the door unless the complete doorway proves the outcome | The room becomes the subject, or the crop removes the operator-to-door relationship |
| Interior outcome | Installed technology or purposeful interaction plus one room plane or sight line | Keep the outcome readable and architecture subordinate; use a framed crop or corner recession | Tighten to the technology and the surface it affects | The image is an aspirational room with no legible service detail or usable outcome |

The available Blyx network-rack, attic-cabling, entry-reader, and door-operator photographs remain authentic proof from one integrated residential project. Present them as one project, not as evidence of multiple customers. A future camera image must meet the camera rules before it enters the production asset set.

## Photography, renders, and proof

### Authentic Blyx photography

- Use for completed-work proof and label it “Completed residential project” when context is not already explicit.
- Allow crop, exposure, white balance, perspective correction, noise reduction, and restrained global tonal adjustment.
- Do not add, remove, relocate, or materially repair equipment, cabling, construction, people, surfaces, or site conditions.
- Preserve metadata and an internal record tying the asset to the approved project and usage rights.
- Prefer framed crops without fades when the image's evidentiary detail extends to the edges.

### Commissioned or licensed photography

- Use for a believable residential or light-commercial situation, installation context, or customer outcome that the existing proof cannot provide.
- Avoid generic smiling-customer scenes, conspicuous luxury cues, retail packaging, and large-enterprise or industrial-building context.
- Confirm model, property, and usage releases before production use.
- Do not caption or position the image as completed Blyx work.

### Realistic renders and generated imagery

- Use only for simplified marketing context, an unavailable crop, or a service concept that cannot be photographed responsibly.
- Keep materials, scale, mounting, cable paths, and device behavior physically credible.
- Record source, generation or rendering method, edit history, and intended marketing role.
- Never combine a synthetic scene with project-proof language, a customer testimonial, or “our work” labeling.

### Technical service visualizations

Use separate coordinated technical-render sets for the Residential and Business rows in the homepage service directory. These are conceptual marketing illustrations and follow the disclosure and provenance rules for rendered or generated imagery. The residential set is represented in the browser guide. Business image production is deferred until its service scope and image brief are approved.

The shared treatment combines:

- a three-dimensional residential or light-commercial cutaway or architectural detail;
- partially solid and partially translucent surfaces;
- visible construction or system linework with a restrained blueprint character;
- monochromatic warm graphite and off-white values, with an optional small Blyx green technical highlight;
- soft depth, controlled shadows, and atmospheric recession; and
- one consistent viewing angle, crop density, line weight, lighting direction, and level of realism across the set.

Do not use pure wireframe line art, people, fake user interfaces, decorative data labels, dense annotations, or a different rendering style for each service. Keep the subject legible at the panel's compact rendered size; remove technical detail that becomes visual noise. Residential renders exclude office interiors. Business renders use credible small-workplace context without implying enterprise scale.

The residential subjects are:

| Service | Required visual focus | Exclude |
| --- | --- | --- |
| Networking | Architecturally plausible residential cutaway with the network rack in a believable central utility or low-voltage room, concealed structured-cabling paths, and clearly legible ceiling access points; translucent architecture reveals system relationships without compromising rooms or circulation | Rack in a foyer, hallway, living area, or other exposed circulation space; stairs or equipment that obstruct an entry path; implausible room layouts; generic cloud symbols, floating consumer routers, server-room or office context |
| Surveillance | Residential exterior or entry cutaway with purposeful camera placement and approximately 110-degree coverage fields; the entry camera covers the approach and steps without implausible landscaping or circulation barriers | Narrow spotlight cones, intrusive facial targeting, dramatic threat imagery, excessive scanning graphics, walls or planting that interrupt the entry path |
| Automated entry & access control | Residential entrance showing a compatible automatic swing-door operator working with a credential reader or activation control, secure locking, and concealed coordination between the systems; the entry outcome remains visually primary | Access-reader-only scenes, exposed surface-mounted cable, implausible door geometry, unsafe egress, generic smart-lock product arrays, or imagery that omits automatic operation |
| Home automation | Scope-approved home setting that makes the supported systems and their relationship to a daily routine legible without becoming a product array; concealed infrastructure and physical context remain credible | Unapproved device categories, floating app screens, generic smart-home symbols, luxury lifestyle staging, universal-compatibility claims, or scenes that imply completed Blyx work |

The technical render occupies its own media region and fades into the copy-facing bottom seam. The solid copy field may overlap that transition, but it reaches full opacity before the eyebrow and all essential text. All outputs in an audience set use the same aspect ratio and safe-area placement so their panels remain equal and visually balanced. Do not produce the residential home-automation render until its service scope and image brief are approved.

Business card variants require distinct subjects for small-workplace networking, surveillance, and access control. Document the intended operational outcome, space type, installed equipment, and exclusions for each card before production. Do not generate these images, reuse residential renders, or present residential proof as business proof until the business image set is separately approved.

Record the source references, generation method, prompts, output files, intended role, and approval state in the [service-render provenance notes](./assets/service-renders.md).

## Image-quality review and upscaling approval

Evaluate each proposed website image at its intended rendered dimensions, responsive crop, and highest-density display requirement. Do not judge suitability from source pixel dimensions alone; inspect the visible result for softness, pixelation, compression artifacts, noise, and loss of proof-bearing detail.

When an image looks below high-resolution presentation quality, any AI assistant or implementation agent working on the website must:

1. Flag the quality limitation before the asset is placed in production.
2. Check whether a higher-resolution original or alternate approved source exists.
3. Recommend upscaling when it is the best available way to preserve the intended image.
4. Explain the proposed method, output dimensions, intended placement, and any risk of altered detail.
5. Obtain explicit approval before performing the upscale, generating a derivative, or replacing the selected website asset.

Approval to use an image does not imply approval to upscale it. Do not silently enhance an asset or treat interpolation as recovered source detail.

After approval:

- Preserve the original file and create a clearly named derivative.
- Prefer conservative, non-generative enlargement, sharpening, noise reduction, and artifact cleanup for authentic project photography.
- Do not invent, reconstruct, add, remove, or materially change equipment, cable paths, labels, fasteners, construction conditions, people, or other proof-bearing details.
- Compare the derivative with the original at the intended display size and at 100% pixel view. Reject results with halos, plastic texture, false edges, distorted text, or fabricated detail.
- Record the source, method, output dimensions, approval, and intended use with the asset provenance notes.
- Generate responsive sizes from the approved high-resolution derivative while retaining the original as the archival source.

If a safe upscale cannot meet the intended presentation quality, recommend a smaller rendered size, a tighter art-directed crop, or a replacement image and request approval for that alternative.

## Desktop and mobile art direction

Create separate crops when one source cannot preserve the subject and context in both layouts. Use `<picture>` so art direction—not only resolution—changes by layout state.

```html
<picture>
  <source
    media="(min-width: 64rem)"
    srcset="/images/example-wide-1280.webp 1280w, /images/example-wide-1920.webp 1920w"
    sizes="50vw"
  >
  <img
    src="/images/example-compact-768.webp"
    srcset="/images/example-compact-480.webp 480w, /images/example-compact-768.webp 768w"
    sizes="(min-width: 48rem) 90vw, calc(100vw - 2.5rem)"
    width="768"
    height="614"
    alt=""
    loading="lazy"
    decoding="async"
  >
</picture>
```

- Wide hero crops may use 4:5 through 1:1 inside the media half; supporting images normally use 4:3, 3:2, or 4:5 according to the subject.
- Compact stacked images normally use 5:4, 4:3, or a subject-led portrait crop. Do not preserve a panoramic ratio that makes the device illegible.
- Remove horizontal seam fades on compact layouts by default because copy and media stack. A shallow top fade may join the image to the same solid field only when the upper edge is low-information.
- Recalculate `object-position`, safe area, and alt text for each art-directed crop. Do not assume the desktop focal point survives.
- Supply intrinsic width and height to prevent layout shift. Use accurate `sizes`, responsive sources, and the smallest format that preserves installation detail.
- Load the primary above-the-fold image eagerly with high fetch priority when measurement confirms it is the page's largest contentful element. Lazy-load below-the-fold imagery.

## Captions and alternative text

- Use concise alt text when the image communicates device placement, workmanship, or outcome not already conveyed by adjacent copy.
- Use `alt=""` when an image only reinforces adjacent text and adds no distinct information.
- Captions identify authentic proof, clarify what detail matters, or distinguish a render from completed work. Do not repeat the alt text verbatim.
- Keep captions outside masked or overlaid image layers so fades never reduce their contrast.
- Do not put provenance or disclosure only in alt text; visible project context remains visible to everyone.

## Treatments to avoid

| Avoid | Why it fails | Use instead |
| --- | --- | --- |
| Radial or all-edge vignette | Produces a cloudy halo and makes the whole image feel processed | One copy-facing fade or hard crop |
| Fade crossing the focal device | Weakens the evidence and subject clarity | Re-crop to create a low-information transition band |
| Uniformly reduced image opacity | Makes the subject and workmanship look washed out | Keep full opacity and fade one expendable edge |
| Dark overlay behind essential copy | Uses the image as a background and repairs legibility after the fact | Separate copy onto a solid field |
| Blur, glow, or bloom around equipment | Suggests a product advertisement or hides material detail | Sharp subject with restrained global grading |
| Mismatched fade color | Leaves a visible muddy strip between the image and page field | Bind the overlay to the actual surface token |
| Repeated portrait frame on every section | Makes pages feel template-driven and editorial | Alternate approved compositions according to content |
| Floating device arrays | Presents Blyx like a manufacturer or retailer | One installed subject or coherent transparent system group |
| Aspirational whole-room image with tiny technology | Turns architecture or luxury into the message | Crop to the device, placement, and smallest useful context |
| Synthetic image beside project-proof language | Misrepresents the work and weakens trust | Separate marketing context from labeled authentic proof |
| Desktop crop merely squeezed on mobile | Shrinks the subject and preserves irrelevant space | Deliver a compact art-directed crop |
| Animated reveal required to see the image | Makes motion carry meaning and delays comprehension | Show the final composition immediately |

## Acceptance checks

- Review one camera, network rack, cable path, access reader, door operator, and interior composition at wide and compact layout states.
- Draw the focal-subject, context-anchor, transition-band, and expendable-edge regions on every proposed production crop.
- Confirm the subject remains fully sharp and opaque at 320px, 768px, 1024px, 1280px, and 1440px viewport widths.
- Flag any image that appears below high-resolution presentation quality at its intended size; confirm that proposed upscaling or replacement received explicit approval before production use.
- Disable CSS masks and pseudo-elements; every image must fall back to a coherent hard or framed crop.
- Remove each image and verify that its section still communicates the promise, scope, and action.
- Compare every fade edge against its surface token at multiple display brightness levels; reject visible bands, haze, and vignette effects.
- Verify authentic, commissioned, licensed, rendered, and generated assets have correct provenance and are never presented as one another.
- Review the approved residential technical service renders together; confirm matching perspective, crop density, tonal range, line weight, lighting, and subject scale, and verify that the automated-entry card depicts both automatic operation and compatible access control.
- Confirm responsive sources have intrinsic dimensions, accurate `sizes`, appropriate loading priority, and no material layout shift.
- Check alt text, captions, and visible proof labels with images unavailable and with a screen reader.
