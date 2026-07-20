## Goal
Remove all "Spintex Road" / "Spintex" references from the site and replace with the current location (Dome, Accra — Total Energies Filling Station Dome).

## Files to update

1. **src/routes/__root.tsx** (lines 80–88) — replace "Spintex Road, Accra" with "Dome, Accra" in title, description, og:title, og:description, twitter:title, twitter:description.

2. **src/routes/index.tsx** (lines 20–21) — same swap in home route title and description.

3. **src/routes/menu.tsx** (line 12) — "Full Menu — bobaman Bubble Tea, Dome, Accra".

4. **src/routes/story.tsx** — update:
   - line 16 title → "Our Story — bobaman Bubble Tea, Dome Accra"
   - line 17 description → replace "Spintex Road, Accra" with "Dome, Accra"
   - line 19 og:description → replace "corner of Spintex Road" with "corner of Dome"
   - line 45 body copy → "We picked a spot in Dome, ..."
   - line 48 alt text → "... at golden hour in Dome"
   - line 84 body copy → "a small daily treat in Dome worth looking forward to."
   - line 158 hero headline → "A craving, a corner / of Dome, and / a whole lot of boba."

5. **src/data/menu.ts** (line 103) — testimonial: "My go-to spot in Dome now, quality never drops".

6. **src/components/home/Location.tsx** (line 40) — iframe title → "bobaman at Total Energies Filling Station Dome, Accra".

7. **src/components/home/Footer.tsx** (line 8) — footer address → "© YEAR bobaman · Total Energies Filling Station Dome, Accra, Ghana".

No other files reference Spintex. Map embed URL and displayed address strings already reflect Dome and don't need changes.