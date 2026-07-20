Update the Google Maps embed in the Location section to use the requested short link: `https://maps.app.goo.gl/V4ktWph1vVdhR7Bw7`.

## Change
- File: `src/components/home/Location.tsx`
- Replace the `iframe` `src` from `https://www.google.com/maps?q=Spintex+Road+Accra+Ghana&output=embed` to `https://maps.app.goo.gl/V4ktWph1vVdhR7Bw7`.

## Verification
- Run `bun run build` to confirm no errors.
- Visually confirm the map iframe loads the new location in the preview.