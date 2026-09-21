# Service-render provenance notes

_Visual design guide concept assets · September 2026_

These coordinated residential technical renders demonstrate the approved service-panel direction in the browser visual guide. They are conceptual marketing illustrations, not completed Blyx work or construction documents. Production use requires a separate asset review. Business card variants require a separate image brief and approval; no business images are generated in this milestone.

## Style references

- [Isometric translucent architectural cutaway](https://www.rfm-group.com/wp-content/uploads/2023/10/therory__wireframe_of_an_office_layout_9362037b-089c-4f39-93ff-78e157e42651.png)
- [Solid-to-wireframe architectural transition](https://media.istockphoto.com/id/1249233259/photo/wireframe-3d-office-planning.jpg?s=612x612&w=0&k=20&c=VfFKEtDtG2NeRz3ciZT_OIn-wtnj3zpXaUtEzBIaM1I=)

The references supply style only. Their office subject matter, composition, and content are not reused.

## Generation method and shared prompt

Generated with the built-in image-generation tool. Each asset uses this shared direction:

> Create a lightweight website design-guide service-card visualization that combines an isometric architectural cutaway with a transition between solid rendering and exposed construction linework. Use a refined residential setting, monochromatic warm graphite and off-white values, partially translucent surfaces, restrained blueprint linework, soft depth, controlled shadows, and an optional small muted-green system highlight. Frame the subject in a landscape 4:3 composition with clean edges and enough clarity for card-size use. Include no text, labels, logos, people, or watermarks.

## Asset prompts and outputs

### Networking

- **Subject prompt:** Architecturally plausible residential cutaway with a compact network rack in a believable central utility or low-voltage room, concealed structured-cabling routes, and exactly two ceiling wireless access points emphasized with restrained green halos. The garage contains a modern midsize SUV. The front door opens into a clear hallway, and the stair sits deeper in the plan without obstructing the entry axis, kitchen, walls, or furniture.
- **Avoid:** More than two access points, orphan cable branches, furniture in the garage, stairs that obstruct the entry hallway, impossible circulation, a rack in an exposed circulation space, cloud symbols, floating consumer routers, server-room context, and office context.
- **Guide outputs:** `networking-v3-768.webp` and `networking-v3-1448.webp`.

### Surveillance

- **Subject prompt:** Residential exterior and entry cutaway with two purposefully placed security cameras and broad translucent fields of view approximating 110 degrees. The entry camera is aimed toward the full approach and steps; low planting borders an open, believable circulation path.
- **Avoid:** Narrow spotlight cones, facial targeting, threat imagery, excessive scanning graphics, walls or planting that interrupt circulation, and office context.
- **Guide outputs:** `surveillance-v2-768.webp` and `surveillance-v2-1448.webp`.

### Superseded residential access-control concept

- **Subject prompt:** Residential entry detail with a slim modern keypad or credential reader, electric strike or smart lock, door contact, controller, and disciplined concealed routes visible only through partially translucent walls, frame, and ceiling.
- **Avoid:** Bulky featureless readers, exterior surface-mounted cable, door operators, automatic-opening motion, accessibility automation, people, and office context.
- **Guide outputs:** `access-control-v2-768.webp` and `access-control-v2-1448.webp`.
- **Status:** Retained as provenance for the earlier access-control concept. It does not represent the residential service emphasis and is not the final Automated entry & access control card image.

### Residential automated entry & access control

- **Status:** A revised card image is required but is not approved for generation in this milestone.
- **Dependency:** Approve a brief showing compatible automatic door operation and access control together, with the entry outcome visually primary.
- **Guide outputs:** None.

### Residential home automation

- **Status:** Required for the four-panel Residential homepage row but not approved for generation.
- **Dependency:** Define the supported systems, exclusions, compatibility boundaries, and customer outcome before writing the subject prompt.
- **Avoid:** Unapproved device categories, floating interfaces, generic smart-home symbols, luxury lifestyle staging, universal-compatibility claims, and any completed-work implication.
- **Guide outputs:** None.

### Business service-card set

- **Status:** Image requirements may be defined, but asset generation is deferred.
- **Dependency:** Approve business service boundaries, representative small-workplace subjects, and a separate image brief.
- **Rule:** Do not reuse or lightly relabel the residential renders as business imagery.
- **Guide outputs:** None.

## Output handling

- The guide derivatives are WebP files at 768×576 and 1448×1086.
- The render set is approved for design-guide evaluation only. Do not present it as project proof or publish it as final website imagery without explicit approval.
