## Goal
Replace both existing logo instances (nav top-left + hero) with the newly uploaded Bobaman logo, sized larger and preserving aspect ratio and transparency. Since the new logo already contains the "bobaman" wordmark and "Just Sip and Chop" tagline baked in, remove the redundant sibling text next to each logo.

## Changes

**1. Upload new asset**
- Run `lovable-assets create --file /mnt/user-uploads/ChatGPT_Image_Jul_20_2026_08_37_03_AM.png --filename bobaman-logo.png` → write pointer to `src/assets/logo.png.asset.json` (overwriting existing pointer so all current imports pick it up automatically).
- Delete the old CDN asset via `lovable-assets delete` on the prior pointer before overwriting.

**2. `src/components/home/Nav.tsx`**
- Use natural width sizing (not square h/w) to preserve aspect ratio: `w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px] h-auto`.
- Remove the sibling `<span>bobaman</span>` (text is in the logo itself).
- Keep left alignment, vertical centering, and padding for breathing room. Keep spacing to nav links intact.

**3. `src/components/home/Hero.tsx`**
- Replace the logo `<img>` + adjacent `<span>just sip and chop.</span>` block with just the logo image (both are in the artwork).
- Size: `w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto` (hero gets a larger treatment consistent with prior emphasis, still proportional).
- Preserve drop-shadow.

**4. `src/components/home/Footer.tsx`**
- Update logo rendering to use natural aspect ratio (`w-24 h-auto`, remove `rounded-full`/`ring` since the new logo is a full illustration, not a circular mark). Remove the redundant "bobaman" + "just sip and chop." text lines beneath it.

## Out of scope
- No changes to nav link styles, colors, routes, or any other section.
- No hero copy (h1 "bobaman", description paragraph) changes.
