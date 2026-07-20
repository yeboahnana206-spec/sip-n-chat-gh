## Goal
Make the top-left nav logo more visible, and increase/recolor the tagline text under both logos (nav "bobaman" and hero "just sip and chop.") so they read as clear cream-white labels.

## Changes

**1. `src/components/home/Nav.tsx` — enlarge top-left logo + tagline**
- Bump logo size from `h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24` to `h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28`.
- Increase the "bobaman" wordmark next to it from `text-2xl sm:text-3xl` to `text-3xl sm:text-4xl md:text-5xl`, keep color `#F8F6F0` (cream white), add `font-bold` weight for legibility.

**2. `src/components/home/Hero.tsx` — enlarge tagline under hero logo**
- Increase the "just sip and chop." script tagline from `text-2xl sm:text-3xl md:text-4xl` to `text-4xl sm:text-5xl md:text-6xl`.
- Confirm color stays `#F8F6F0` (cream white); add a subtle `drop-shadow` for contrast on caramel background.

## Out of scope
- No changes to hero logo image size (already large per prior request).
- No layout/spacing overhaul beyond what the size bumps require.
