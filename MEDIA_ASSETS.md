# Frontenac Roofing — Media Asset Manifest

Everything you need to generate or source, image by image: **exact filename**,
**aspect ratio**, **pixel dimensions**, **format**, and a **ready-to-paste
generation prompt**.

---

## How this works (turnkey)

1. Generate/shoot each image below.
2. Name it **exactly** as listed (lowercase, hyphens, `.webp`).
3. Drop it into **`frontenacsite/public/images/`**.
4. Commit + push (GitHub Desktop). The site rebuilds and the image **replaces its
   gray placeholder automatically** — no code changes. Until then, the placeholder
   shows the expected filename so you always know what's missing.

If you export **`.jpg`** instead of `.webp`, that's fine — just tell me and I'll
update the filename references (or rename the files to `.webp` after converting).

---

## Global specifications

| Setting | Value |
|---|---|
| Format | **WebP** (preferred) or JPEG, sRGB color |
| Quality | ~80% (visually lossless, small files) |
| Target file size | < 400 KB (heroes < 500 KB) |
| Color grade | Natural. **No** teal-and-orange, **no** heavy filters, **no** lens flare |
| Text/logos | None baked into the image |

### Pixel dimensions by aspect ratio

Export at these sizes (sized for sharpness on high-resolution "retina" screens):

| Ratio | Pixel size | Used for |
|---|---|---|
| **21:9** | 2520 × 1080 | Full-bleed hero / CTA backgrounds |
| **16:9** | 1920 × 1080 | Featured service, wide bands |
| **3:2** | 1800 × 1200 | Page heroes, feature images |
| **4:3** | 1600 × 1200 | Cards, detail shots |
| **4:5** | 1200 × 1500 | Portraits, tall residential |

---

## The base style prompt (prepend to every prompt below)

Paste this first, then add the specific subject line for each image:

> *Professional architectural and construction photography in the greater St. Louis,
> Missouri area. [SUBJECT]. Natural overcast or golden-hour daylight with soft,
> recoverable highlights; honest material color and texture; low-angle, disciplined
> architectural composition; clean negative space; photorealistic, sharp, high
> detail. No text, no logos, no watermarks, no people posing for the camera, no
> teal-and-orange color grade, no lens flare. Aspect ratio [RATIO].*

---

## ⚠️ Two categories — read before generating

**Category A — Generatable (atmosphere & capability).** Heroes, service/detail, and
editorial images. AI-generated images are fine here for testing and are acceptable
at launch **as long as they are not presented as a specific, named, completed
Frontenac project.** These are marked **A** below.

**Category B — Must be REAL (do not AI-generate).** Actual project case studies,
team/leadership portraits, and anything tied to a testimonial. Per the project
brief, AI-generated buildings must **never** be shown as real completed work, and
people must be real team members. These are marked **B** below — use approved
photography. (You *may* drop a temporary AI placeholder in during testing, but it
must be replaced with a real photo before launch.)

---

## Homepage — `/`

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `home-hero.webp` | 21:9 | 2520×1080 | A | A striking commercial or high-end residential roof at golden hour, strong roofline geometry, wide establishing view, generous open sky at left for headline text |
| `home-gateway-commercial.webp` | 3:2 | 1800×1200 | A | A large flat-roof commercial building viewed from a low angle, clean membrane surface and rooftop units |
| `home-gateway-residential.webp` | 4:5 | 1200×1500 | A | An architecturally distinctive two-story home with a complex, well-executed roofline, tall vertical framing |
| `home-commercial.webp` | 4:3 | 1600×1200 | A | A restored/coated flat commercial roof, crisp seams and details, wide scope-revealing view |
| `home-residential.webp` | 3:2 | 1800×1200 | A | A complex residential roof with dormers and valleys, architectural context, premium shingle or specialty material |
| `home-services-featured.webp` | 16:9 | 1920×1080 | A | Commercial roofing system close-up transitioning to full building, technical yet cinematic |
| `home-services-residential.webp` | 4:3 | 1600×1200 | A | Residential roof replacement in progress, clean staging, new shingles |
| `home-services-coating.webp` | 4:3 | 1600×1200 | A | Silicone/reflective roof coating being applied to a flat roof, bright reflective surface |
| `home-services-specialty.webp` | 4:3 | 1600×1200 | A | Close detail of tile, slate, or standing-seam metal roofing, rich material texture |
| `home-services-siding.webp` | 4:3 | 1600×1200 | A | Fresh fiber-cement or lap siding on a quality home exterior, crisp lines |
| `home-featured-project.webp` | 3:2 | 1800×1200 | **B** | **Real** featured project photo (approved) |
| `home-project-01.webp` | 3:2 | 1800×1200 | **B** | **Real** commercial project photo |
| `home-project-02.webp` | 4:5 | 1200×1500 | **B** | **Real** residential project photo |
| `home-project-03.webp` | 4:3 | 1600×1200 | **B** | **Real** specialty project photo |
| `home-project-04.webp` | 3:2 | 1800×1200 | **B** | **Real** commercial project photo |
| `home-service-area.webp` | 16:9 | 1920×1080 | A | Aerial/elevated view of a St. Louis-area neighborhood or skyline context (no Arch clichés), roofs visible |
| `home-cta.webp` | 21:9 | 2520×1080 | A | Moody dusk shot of a finished roof/building, dark enough for white text overlay |

---

## Commercial Roofing — `/commercial-roofing`

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `commercial-hero.webp` | 3:2 | 1800×1200 | A | Large commercial flat-roof building, low-angle, professional and substantial |
| `commercial-assessment.webp` | 4:3 | 1600×1200 | A | A roofer inspecting and documenting a commercial roof (clipboard/tablet/camera), focused on the work |
| `commercial-occupied.webp` | 4:3 | 1600×1200 | A | A crew working safely on an occupied commercial building (hotel/multi-unit), safety setup visible, tenants' building intact |
| `commercial-project-1.webp` | 4:3 | 1600×1200 | **B** | **Real** commercial project |
| `commercial-project-2.webp` | 4:3 | 1600×1200 | **B** | **Real** commercial project |
| `commercial-project-3.webp` | 4:3 | 1600×1200 | **B** | **Real** commercial project |

### Sub-pages

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `commercial-repair-hero.webp` | 3:2 | 1800×1200 | A | Low-slope commercial roof mid-repair, torn-back section revealing layers |
| `commercial-repair-detail.webp` | 4:3 | 1600×1200 | A | Close-up of flashing/seam repair on a flat roof, hands and tools |
| `coating-hero.webp` | 3:2 | 1800×1200 | A | Bright white silicone-coated commercial roof under clear sky, reflective surface |
| `coating-detail.webp` | 4:3 | 1600×1200 | A | Roller/spray applying reflective coating, crisp wet edge |
| `tpo-hero.webp` | 3:2 | 1800×1200 | A | Newly installed white TPO single-ply roof, clean welded seams, rooftop units |
| `tpo-detail.webp` | 4:3 | 1600×1200 | A | Close-up of a hot-air-welded TPO seam, precise detailing |

---

## Residential Roofing — `/residential-roofing`

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `residential-hero.webp` | 3:2 | 1800×1200 | A | Distinctive home with a complex, beautifully executed roof, architectural context |
| `residential-protection.webp` | 4:3 | 1600×1200 | A | Home exterior with landscaping and grounds carefully protected/tarped during roof work |
| `residential-storm.webp` | 4:3 | 1600×1200 | A | Roofer inspecting a shingle roof for hail/wind damage, marking findings |

### Sub-pages

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `res-repair-hero.webp` | 3:2 | 1800×1200 | A | Residential roof mid-replacement, clean staging, new architectural shingles |
| `res-repair-detail.webp` | 4:3 | 1600×1200 | A | Close-up of new shingle courses and underlayment being installed |
| `specialty-hero.webp` | 3:2 | 1800×1200 | A | Upscale home with tile, slate, or standing-seam metal roof, rich material |
| `specialty-detail.webp` | 4:3 | 1600×1200 | A | Macro detail of slate/tile/metal roofing texture and craftsmanship |
| `storm-hero.webp` | 3:2 | 1800×1200 | A | Home after a storm, roofer assessing; serious but reassuring tone |
| `storm-detail.webp` | 4:3 | 1600×1200 | A | Close-up of hail-damaged shingles with inspection chalk marks |

---

## Siding & Exteriors — `/siding-exteriors`

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `siding-hero.webp` | 3:2 | 1800×1200 | A | Home with fresh fiber-cement lap siding, crisp trim, quality exterior |
| `siding-detail.webp` | 4:3 | 1600×1200 | A | Close-up of siding installation, clean overlap and fastening |

---

## Services hub — `/services`

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `services-commercial.webp` | 4:3 | 1600×1200 | A | Commercial flat roof, clean and professional |
| `services-coating.webp` | 4:3 | 1600×1200 | A | Reflective roof coating surface |
| `services-tpo.webp` | 4:3 | 1600×1200 | A | White TPO single-ply roof |
| `services-residential.webp` | 4:3 | 1600×1200 | A | Residential shingle roof, architectural |
| `services-specialty.webp` | 4:3 | 1600×1200 | A | Tile/slate/metal specialty roof detail |
| `services-siding.webp` | 4:3 | 1600×1200 | A | Quality home siding |

---

## Projects — `/projects`  ·  About — `/about`  ·  Service Areas

| Filename | Ratio | Pixels | Cat | Subject prompt |
|---|---|---|---|---|
| `project-01.webp` … `project-06.webp` | see below | — | **B** | **Real** project photos (01: 3:2, 02: 4:5, 03: 4:3, 04: 3:2, 05: 4:3, 06: 4:5) |
| `about-hero.webp` | 3:2 | 1800×1200 | **B** | **Real** Frontenac crew or a completed project (preferred). AI atmosphere only as temporary placeholder |
| `team-01.webp` `team-02.webp` `team-03.webp` | 4:5 | 1200×1500 | **B** | **Real** leadership/team portraits — do not AI-generate people |
| `service-areas.webp` | 4:3 | 1600×1200 | A | Elevated view of a St. Louis-area residential neighborhood, roofs prominent |

---

## Optional: hero video

Video is **optional** (the design never requires it) and would need a small code
addition to enable — tell me if you want it and I'll wire the hero to accept it.
If you produce one, use these specs:

| Item | Spec |
|---|---|
| Filename | `home-hero.mp4` **and** `home-hero.webm` (both, for browser support) |
| Poster still | `home-hero-poster.webp` (21:9, 2520×1080 — shows before/while video loads) |
| Resolution | 1920×1080 (or 2520×1080 for full 21:9) |
| Length | 8–20 seconds, seamless loop |
| Encoding | MP4 = H.264, WebM = VP9; **muted**, no audio track needed |
| File size | Target < 6 MB (compress hard — it must not block mobile load) |
| Content | Slow drone push over a completed roof, or a slow tilt up a distinctive roofline. Muted, no essential spoken info, no text |

Reduced-motion users will see the poster still automatically once wired.

---

## Summary counts

- **~44 images total.** ~33 are **Category A** (generatable now). ~11 are
  **Category B** (must be real: project case studies + team portraits).
- Start with **Category A** to make the whole site feel finished for testing.
- Swap in **Category B** real photos before you point a real domain at it.
