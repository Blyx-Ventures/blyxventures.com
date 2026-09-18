# Surveillance hero provenance and crop decisions

_Asset `SV-H01` · Milestone 04 flagship asset pilot · September 2026_

`SV-H01` is conceptual marketing photography for the residential surveillance page. It is not an authentic Blyx project image and must not be captioned, labeled, or positioned as completed work. Business surveillance uses a separate small-workplace asset; this residential image is not reused, cropped, or relabeled for commercial pages.

## Generation method and final prompt

Generated with the built-in image-generation tool. The approved revision uses this production edit prompt:

> Precise photorealistic architectural material edit. Preserve the existing image composition, camera position, viewpoint, daylight, sky, trees, depth of field, dark asphalt shingle pitched roof, white fascia, modest approximately 12–14 inch vented soffit/eave, and the unbranded white turret security camera exactly as shown. The security camera must remain mounted flat to the soffit and aimed directly toward the viewer. Change only the visible exterior wall material on the far right: replace the gray vinyl siding and its visible corner treatment with a believable high-quality warm tan/light brown brick veneer wall and a correctly built true masonry outside corner beneath the eave. Use regular running-bond brick courses, subtle natural color variation, realistic recessed light mortar joints, correct scale, and perspective lines consistent with the eave and house geometry. The brick should imply an upscale but ordinary suburban home, not a mansion and not rustic. Keep white roof trim where structurally appropriate, but do not put brick on the soffit, fascia, roof, camera, or sky. No branding, no logos, no text, no wires, no people, no night lighting. Avoid floating brick, fake brick panels, warped courses, impossible corners, oversized eaves, altered camera form, or changed lens direction.

## Source and derivatives

| File | Role | Intrinsic size | Treatment |
| --- | --- | ---: | --- |
| `public/images/surveillance/sv-h01-source-v5.png` | Approved archival generated source | 1643×957 | Preserve; do not serve by default |
| `public/images/surveillance/sv-h01-desktop-957-v5.jpg` | Wide-layout media field | 957×957 | Square crop from source coordinates `x=686, y=0`; JPEG quality 88 |
| `public/images/surveillance/sv-h01-compact-960-v5.jpg` | Compact stacked media | 960×768 | Source crop `x=447, y=0, width=1196, height=957`, then resized to 960×768; JPEG quality 88 |

Rejected source and derivative revisions are not retained in the repository. The approved `v5` source and its two responsive derivatives are the complete asset set.

The desktop crop keeps the camera, mount, cable entry, eave, masonry return, and low-information copy-facing edge. Apply the design-system `image-fade-start` mask in CSS only where the media meets the `background` copy field. The fade ends before the eave junction and never crosses the camera or mount. The unmasked crop is the fallback.

The compact crop uses a hard edge with no horizontal seam fade. Copy precedes the image in source order, and the camera remains centered enough to survive a 320px viewport without clipping its body or mount.

## Quality and disclosure review

- The camera remains the single focal subject at desktop and compact rendered sizes.
- The complete turret camera, circular soffit base, eave plane, and masonry wall relationship remain legible.
- The circular base sits flush against the horizontal soffit with visible clearance from the fascia and brick wall; no cable, arm, or wall adapter is exposed.
- The front fascia, soffit edge, masonry wall, and running-bond brick courses follow a coherent architectural perspective.
- The lawn-level perspective reads toward the front-left house corner, and the camera face points outward toward the viewer.
- The source and both derivatives are sharp at 100% inspection; no upscale is required or approved.
- Compression preserves the lens edge, soffit texture, brick faces, and mortar joints without visible blocking or ringing at intended sizes.
- The image includes no text, brand mark, address, person, camera view, or identifying property detail.
- Any caption or adjacent disclosure identifies the image as conceptual service context when its status could be mistaken for project proof.
- The asset is residential-only. Commercial surveillance retains separate language, imagery, proof, and qualification context.
