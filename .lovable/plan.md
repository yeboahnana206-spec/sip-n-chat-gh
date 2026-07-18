## Scope

Four changes to the bobaman site:

1. **Logo refresh** — transparent, glossy 3D button-style logo mark with clean flat slogan
2. **Craveworthy section redesign** — match the reference upload (fruit-scattered, dynamic layout, no white backgrounds on fruit)
3. **Dedicated `/menu` page** — full menu on its own route
4. **Dedicated `/story` page** — immersive, image-led narrative with 4 beats

---

## 1. Logo (glossy 3D button)

- Use `imagegen--edit_image` on `user-uploads://ChatGPT_Image_Jul_18_2026_07_05_10_AM.png` with a prompt for: transparent background, glossy 3D embossed depth on the cup mark, top-arc highlight, subtle drop shadow, punchier saturation, slogan kept flat/crisp/legible below.
- Save as `src/assets/logo.png` and upload via `lovable-assets` → `src/assets/logo.png.asset.json`.
- Replace references in `Nav.tsx`, `Hero.tsx`, `Footer.tsx` (whichever import the current `logo.jpeg.asset.json`).
- Remove the old `logo.jpeg.asset.json` pointer via `lovable-assets delete`.

## 2. Craveworthy section

Match reference: pink background, hand-painted scattered fruit illustrations with paint-splash accents, floating boba pearls, "Craveworthy Flavors" headline centered, no rigid single hero image.

- Generate 5–6 individual transparent-PNG fruit illustrations (mango, banana bunch, pineapple, grapes, strawberry, apple slice) in a hand-painted watercolor style, plus 2–3 paint-splash accents.
- Upload each via `lovable-assets`.
- Rewrite `src/components/home/Craveworthy.tsx`: absolute-positioned fruit scattered around a centered headline + copy, framer-motion staggered fade/float-in, floating boba pearls (reuse `BobaPearl` decor), keep flavor pill list at bottom.
- Delete the old `craveworthy-fruits.jpg` asset.

## 3. Dedicated `/menu` page

- New route file `src/routes/menu.tsx` with its own `head()` (title, description, og).
- Reuses existing `Menu` component (search + all 3 categories + Order buttons). Wrap with `Nav`, `Footer`, `FloatingWhatsApp`, and a short page-intro header.
- Update `Nav.tsx` to add a "Menu" link pointing to `/menu` (TanStack `<Link to="/menu">`), keep the homepage "Menu" section anchor working via the existing `#menu` id or convert nav to route link.
- Homepage `Menu` section stays as a preview but add a "See full menu →" `<Link to="/menu">` CTA at the bottom of the section.

## 4. Dedicated `/story` page

- New route file `src/routes/story.tsx` with `head()` metadata (title: "Our Story — bobaman", description, og:title, og:description, og:image from a hero lifestyle image).
- Structure — 4 scroll-animated beats, each a full-viewport-ish section with generous whitespace, framer-motion fade/slide-in on view:
  1. **The Spark** — opening story about why bobaman started on Spintex Road. Image: hands holding a cup / warm street shot.
  2. **The Craft** — care in every cup. Image: close-up boba pearls falling / tea pour / condensation.
  3. **The Community** — regulars, first-timers, personalized name-on-cup moments. Image: candid friends sharing drinks.
  4. **The Promise** — closing beat, present-tense invitation, CTA button back to `/menu` and a WhatsApp order CTA.
- Copy written first-person plural ("we"), warm and sincere, no corporate phrasing.
- Generate 4 lifestyle images via `imagegen--generate_image` (standard quality, uploaded to Lovable Assets).
- Replace homepage `BrandStory` section CTA to also link to `/story` ("Read our story →"), keep the section as a teaser.
- Update `Nav.tsx`: replace the `#story` anchor with `<Link to="/story">Our Story</Link>`, keep `#menu` link on homepage or point to `/menu`.

## Technical notes

- All new routes use TanStack `createFileRoute` with correct paths (`/menu`, `/story`).
- Nav links to routes use `<Link to="...">` from `@tanstack/react-router`, not `<a href>`.
- Each new route's `head()` sets a unique title + description + og tags. `og:image` only on leaf routes.
- Framer-motion animations reuse the existing `initial/whileInView/viewport` pattern for scroll-triggered fade/slide.
- All new images externalized via `lovable-assets` CLI, not committed as binaries.
- No business logic / data changes — `menu.ts` untouched.

## Out of scope

- Payments, cart, backend, auth — none needed (WhatsApp remains the entire order flow).
- Homepage layout/theme/color changes beyond the Craveworthy rework and the two new CTAs.
