# Page image matrix and production backlog

_Milestone 03 source of truth for image purpose, placement, art direction, reuse, and production order_

---

## 🎯 Planning rules

Every image must communicate audience context, service scope, placement, workmanship, or a verified customer outcome. Decorative filler, generic lifestyle scenes, product arrays, and images without a stated communication purpose do not enter production.

- Use one service-specific image per homepage service card and audience-specific imagery within service pages where the contexts differ.
- Use authentic Blyx photography and video only as proof of the integrated residential project.
- Use renders, generated imagery, or commissioned photography only as marketing context and never as completed-work evidence.
- Keep copy complete without imagery. Place essential text on a solid field.
- Create a compact crop when the wide composition cannot preserve subject scale, context, and safe areas.
- Omit an image slot when an approved asset is unavailable. Do not substitute another audience, service, or proof category.

The [image composition specification](./imagery.md) controls crop safety, fade treatments, alternative text, captions, responsive sources, provenance, and quality review. The [page templates](./page-templates.md) control when hero, supporting, and proof media appear.

## 📚 Asset register

The asset ID remains stable across the page matrix, production backlog, filenames, and provenance notes.

| Asset ID | Subject | Asset class | Availability | Production state |
| --- | --- | --- | --- | --- |
| `HR-N01` | Audience-neutral compact network rack in a restrained technical-render treatment | Generated hero-support render | Production transparent PNG exists | Approved for root hero trial; validate final responsive composition |
| `RS-N01` | Residential network cutaway with central rack, concealed cabling, and ceiling access points | Technical service render | Existing design-guide sources | Validate for production use |
| `RS-S01` | Residential exterior and entry with purposeful camera placement and broad coverage fields | Technical service render | Existing design-guide sources | Validate for production use |
| `RS-E01` | Keypad, card, and fingerprint access reader beside a closed swinging door | Technical service render | Responsive WebP sources exist | Approved for the homepage service panel |
| `RS-H01` | Supported home-automation outcome in a credible daily-use setting | Technical service render | Not produced | Blocked by service-scope approval |
| `BS-N01` | Small-office network foundation with organized equipment, wired work areas, and credible wireless coverage | Technical service render | Not produced | Deferred pending business image-brief approval |
| `BS-S01` | Small-office entrance or shared area with purposeful camera placement and credible viewing context | Technical service render | Not produced | Deferred pending business image-brief approval |
| `BS-A01` | Small-office staff entrance with credential reader, secure locking, and safe egress context | Technical service render | Not produced | Deferred pending business image-brief approval |
| `SV-H01` | Exterior residential camera mounted at an eave or wall corner with construction context and clear viewing direction | Marketing hero image | Not produced | First production batch |
| `PR-N01` | Organized network rack from the integrated residential project | Authentic project photograph | Source JPEG and responsive derivatives exist | First production batch requires final supporting crop and quality validation |
| `PR-N02` | Deliberate attic cabling from the integrated residential project | Authentic project photograph | Source JPEG and responsive derivatives exist | Validate existing derivatives |
| `PR-E01` | Installed automatic door operator from the integrated residential project | Authentic project photograph | Source JPEG and responsive derivatives exist | Validate existing derivatives |
| `PR-E02` | Installed fingerprint entry reader from the integrated residential project | Authentic project photograph | Source JPEG and responsive derivatives exist | Validate existing derivatives |
| `PR-E03` | Independent residential ingress | Authentic project video and poster | Existing MP4 and poster | Validate controls, poster, caption, and descriptive text |
| `PR-E04` | Independent residential egress | Authentic project video and poster | Existing MP4 and poster | Validate controls, poster, caption, and descriptive text |

## 🗺️ Page and communication matrix

This matrix assigns each asset to a page section and one communication purpose. Repeated asset IDs indicate deliberate reuse of the same source, not a separate project or customer.

| Page | Section | Asset ID | Subject | Communication purpose |
| --- | --- | --- | --- | --- |
| `/` | Brand hero | `HR-N01` | Organized compact network rack | Reinforce carefully planned infrastructure without assigning the root promise to one audience or presenting project proof |
| `/` | Networking panel | `RS-N01` | Residential network system relationships | Preview planned wired and wireless infrastructure without presenting project proof |
| `/` | Video surveillance panel | `RS-S01` | Residential camera placement and coverage | Preview purposeful surveillance planning without presenting project proof |
| `/` | Access control panel | `RS-E01` | Credentialed access and secure entry | Present Access control as the service; reserve automated-entry distinctions for the service page |
| `/` | Home automation panel | `RS-H01` | Scope-approved automated home outcome | Preview the approved service without inventing device categories or proof |
| `/networking/` | Residential proof | `PR-N01` | Organized network rack | Show the quality and order of a completed network foundation |
| `/networking/` | Residential planning and proof | `PR-N02` | Attic cable routing | Show deliberate routing within real residential construction |
| `/networking/` | Business planning support | `BS-N01` | Small-office network foundation | Establish business context and illustrate the planned system relationships |
| `/surveillance/` | Residential hero | `SV-H01` | Installed camera in residential context | Explain placement and viewing direction without exposing a customer's property or camera view |
| `/surveillance/` | Residential proof | `PR-N01` | Organized network rack | Support the verified recording and network-foundation story without implying the rack is a camera image |
| `/surveillance/` | Residential proof | `PR-N02` | Attic cabling | Support the verified camera-cabling scope without publishing coverage details |
| `/surveillance/` | Business planning support | `BS-S01` | Small-office camera context | Establish business context and illustrate useful coverage planning |
| `/access-control/` | Residential hero or primary supporting media | `PR-E02` | Fingerprint entry reader and mounting context | Make credentialed access visually primary and establish the access-control context |
| `/access-control/` | Residential proof detail | `PR-E01` | Installed door operator and doorway relationship | Show compatible automatic operation as part of the coordinated entry system |
| `/access-control/` | Residential result proof | `PR-E03` | Independent ingress | Demonstrate the verified entry outcome |
| `/access-control/` | Residential result proof | `PR-E04` | Independent egress | Demonstrate the verified exit outcome |
| `/access-control/` | Business planning support | `BS-A01` | Small-office staff entrance | Establish business context and illustrate controlled entry with safe egress |
| `/home-automation/` | Residential service context | `RS-H01` | Scope-approved automated home outcome | Explain the supported service only after its scope is approved |
| Integrated residential project story | Primary evidence | `PR-N01` | Organized network rack | Establish the shared foundation for networking and surveillance work |
| Integrated residential project story | Supporting evidence | `PR-N02` | Attic cable routing | Substantiate the installed infrastructure |
| Integrated residential project story | Supporting evidence | `PR-E01` | Installed door operator | Introduce the automated-entry chapter of the same project |
| Integrated residential project story | Supporting evidence | `PR-E02` | Fingerprint reader | Substantiate credentialed entry |
| Integrated residential project story | Result evidence | `PR-E03` | Independent ingress | Demonstrate the verified entry outcome |
| Integrated residential project story | Result evidence | `PR-E04` | Independent egress | Demonstrate the verified exit outcome |

## 📐 Composition and responsive matrix

`Copy position` describes the relationship between text and media, not text embedded in the source file. Every source remains free of words, labels, logos, fake interfaces, and watermarks.

| Asset ID | Crop | Copy position | Background and context | Compact requirement |
| --- | --- | --- | --- | --- |
| `HR-N01` | Tight portrait source with the complete rack isolated on transparency | Solid copy field on the left; media fills the hero vertically on the right and never contains essential text | Transparent generated warm-graphite technical render, audience-neutral and never labeled as project proof | Preserve the complete rack at a legible height; stack below copy when the two-column relationship cannot remain clear |
| `RS-N01` | Landscape `4:3`; rack and access points remain legible | Solid copy field below the media with a shallow bottom seam | `surface`; residential cutaway with restrained technical detail | Use an art-directed `4:3` crop that keeps the rack and at least one access point readable |
| `RS-S01` | Landscape `4:3`; cameras and broad coverage fields remain intact | Solid copy field below the media with a shallow bottom seam | `surface`; residential exterior or entry cutaway | Use an art-directed `4:3` crop that preserves the entry approach and camera placement |
| `RS-E01` | Landscape `4:3`; reader, handle, and closed doorway share one coherent view | Solid copy field below the media with a shallow bottom seam | `surface`; audience-neutral modern entrance | Keep the reader, aligned handle, closed swinging-door relationship, and internal green fingerprint glow legible |
| `RS-H01` | Landscape `4:3`; supported outcome remains legible at card size | Solid copy field below the media with a shallow bottom seam | `surface`; attainable residential setting defined by the approved brief | Define the compact focal point only after service scope and subject are approved |
| `BS-N01` | Landscape `4:3` base with card and hero-safe variants | Card copy below; hero copy on a separate solid field | `surface`; modest office equipment or back-of-house space | Supply a tighter card crop and a compact hero crop; keep staff-scale context without enterprise cues |
| `BS-S01` | Landscape `4:3` base with card and hero-safe variants | Card copy below; hero copy on a separate solid field | `surface`; modest office entrance or shared area | Supply a tighter card crop and a compact hero crop; retain the camera and one operational sight line |
| `BS-A01` | Landscape `4:3` base with card and hero-safe variants | Card copy below; hero copy on a separate solid field | `surface`; staff entrance with ordinary commercial finishes | Supply a tighter card crop and a compact hero crop; retain reader, doorway, and egress relationship |
| `SV-H01` | Wide `4:5` through `1:1`; complete camera and mount with one construction edge | Copy on a separate solid field facing the low-information edge | `background`; believable residential eave or wall corner with restrained architecture | Supply a `5:4` or `4:3` crop centered on the camera, mount, and one construction edge; remove the wide seam fade |
| `PR-N01` | Framed `4:3` or subject-led portrait; organized termination remains readable | Adjacent proof copy; caption below the image | Authentic project context; no fade over cables, labels, or equipment | Supply a tighter framed crop that retains one rack edge and readable organization |
| `PR-N02` | Framed `3:2` or `4:3`; isolate the cleanest meaningful cable route | Adjacent proof copy; caption below the image | Authentic attic construction; dense details remain fully opaque | Use a tighter `4:3` crop that removes unrelated attic volume without hiding routing context |
| `PR-E01` | Framed `4:3` or `4:5`; operator, header, and door relationship remain intact | Adjacent hero or proof copy; visible project label and caption | Authentic residential doorway; no synthetic cleanup or fade over equipment | Use a portrait or `5:4` crop retaining the operator and upper door relationship |
| `PR-E02` | Framed portrait or near-square; reader and one material change remain visible | Adjacent proof copy; caption below the image | Authentic residential entry trim and wall context | Use the tighter existing derivative only if the reader remains identifiable at rendered size |
| `PR-E03` | Native video ratio with an accurate poster from the same event | Descriptive text and controls outside the video | Authentic residential entry; privacy-safe framing | Preserve controls and full action; poster must identify the doorway and activation outcome without playback |
| `PR-E04` | Native video ratio with an accurate poster from the same event | Descriptive text and controls outside the video | Authentic residential exit; privacy-safe framing | Preserve controls and full action; poster must identify the doorway and activation outcome without playback |

## 🔄 Reuse and page specificity

Reuse means one approved source may receive role-specific crops. It never permits an image to represent a different audience, service, project, or asset class.

| Reuse class | Assets | Allowed use | Boundary |
| --- | --- | --- | --- |
| Reusable authentic proof | `PR-N01`, `PR-N02`, `PR-E01`, `PR-E02`, `PR-E03`, `PR-E04` | Relevant Residential service proof and the integrated project story | Every use identifies the same private residential project; Business and home-automation use is prohibited |
| Reusable service illustration | `RS-N01`, `RS-S01`, `RS-E01`, `RS-H01`, `BS-N01`, `BS-S01`, `BS-A01` | The designated homepage panel or matching audience-specific service-page context when the base composition supports the crop | Do not relabel one service as another or present an audience-specific service-page image as evidence for the other audience |
| Page-specific hero | `SV-H01` | Residential video-surveillance hero and approved social derivative | Do not present as authentic Blyx work or business imagery |

## 📦 Prioritized production backlog

### Batch 1 — System validation

Produce only these two assets before scaling the system:

| Priority | Asset ID | Work | Validation purpose | Exit condition |
| ---: | --- | --- | --- | --- |
| 1 | `SV-H01` | Produce the residential video-surveillance hero with wide and compact art direction | Test a purpose-built marketing image, subject scale, architectural context, copy-facing transition, and disclosure | Camera, mount, and context remain clear across target widths; no crop or fade crosses the focal subject |
| 2 | `PR-N01` | Select the highest-quality original and produce the final wide and compact supporting derivatives | Test authentic-proof cropping, detail preservation, captioning, performance, and non-generative quality treatment | Rack organization remains readable; no detail is invented; derivatives pass intended-size and 100% review |

Do not begin the next batch until both assets are tested in their intended responsive compositions and reviewed together against the image-system acceptance checks.

### Batch 2 — Residential completion

| Priority | Asset ID | Work | Dependency |
| ---: | --- | --- | --- |
| 3 | `RS-N01`, `RS-S01` | Validate the existing guide renders for production and export approved responsive derivatives | Batch 1 establishes crop, detail, tonal, and performance thresholds |
| 4 | `PR-N02`, `PR-E01`, `PR-E02`, `PR-E03`, `PR-E04` | Validate existing proof derivatives, posters, captions, controls, and privacy-safe use | Verified source, permission, and project attribution remain available |

### Batch 3 — Business set

| Priority | Asset ID | Work | Dependency |
| ---: | --- | --- | --- |
| 5 | `BS-N01` | Produce the small-office networking base and responsive crops | Business networking scope and separate image brief approved |
| 6 | `BS-S01` | Produce the small-office video-surveillance base and responsive crops | Business video-surveillance scope and separate image brief approved |
| 7 | `BS-A01` | Produce the staff-entry access-control base and responsive crops | Business access-control scope and separate image brief approved |

Review all three business assets as one set for consistent perspective, crop density, line weight, tonal range, lighting, and small-workplace scale. Do not substitute residential renders while this batch is deferred.

### Blocked production

| Asset ID | Blocker | Release condition |
| --- | --- | --- |
| `RS-H01` | Supported home-automation systems, compatibility boundaries, exclusions, handoff, and customer outcome are not defined | Approve the service scope and a subject brief that depicts only supported capabilities |

## 🚫 Sections without planned imagery

The following sections remain typographic or form-led. They do not receive decorative images:

- Root brand hero and contact section
- Service-page fit and inquiry sections
- Service need states, fit and boundaries, process, FAQ, inquiry, and related-service text
- Contact and privacy pages
- Case-study customer need, agreed scope, verified result, testimonial, and next action outside the evidence group

## ✅ Acceptance checklist

- [ ] Every produced image maps to one asset ID, page section, and communication purpose.
- [ ] Every asset records audience, service, proof status, source, rights, and approval state.
- [ ] Wide and compact crops preserve the focal subject, context anchor, copy relationship, and intrinsic dimensions.
- [ ] Authentic proof remains attached to one integrated private residential project.
- [ ] Marketing imagery is never labeled, captioned, or positioned as completed Blyx work.
- [ ] Residential and business assets are visually and semantically distinct without separate brand systems.
- [ ] The first production batch contains only `SV-H01` and `PR-N01`.
- [ ] Business production remains deferred until the separate image brief is approved.
- [ ] Home-automation production remains blocked until the service scope and subject brief are approved.
- [ ] Every final asset passes responsive, quality, privacy, accessibility, provenance, and performance review.
