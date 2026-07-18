# bobaman — Spintex Boba Shop Website

A vibrant, mobile-first, WhatsApp-driven boba shop site. No cart, no checkout — every "Order Now" button opens WhatsApp with a pre-filled message naming the drink + size.

## Brand

- **Name:** bobaman
- **Slogan:** "just sip and chop."
- **Location:** Spintex Road, Accra, Ghana
- **WhatsApp numbers:** 0548787608 (primary) and 0506324680 (secondary) — primary used for all order buttons, both shown in Contact section
- **Logo:** uploaded logo uploaded as a Lovable Asset and used in nav + hero + footer

## Design language

- **Scroll-zoned color story** with organic wave/drip SVG dividers between zones:
  1. Warm caramel / brown (hero, brand story)
  2. Soft peach / cream (personalization, craveworthy flavors, reviews)
  3. Punchy pink / berry (menu, toppings, location)
- **Typography:** Fredoka (bold display for headlines) + Caveat (handwritten accent for taglines) + Inter (body). Loaded via `<link>` in `__root.tsx`, registered in `@theme`.
- **Scattered decorative elements:** boba pearls, tea leaves, splash shapes as absolute-positioned SVGs throughout.
- **Motion:** framer-motion fade/slide-in on section headers and menu cards; hero best-seller carousel auto-rotates; reviews carousel auto-scrolls horizontally (pause on hover).
- **Design tokens:** all colors added to `src/styles.css` as oklch tokens (--caramel, --cream, --peach, --pink, --berry, --whatsapp-green, --gold), mapped in `@theme inline`.

## Page structure (single route `/`)

1. **Sticky nav** — logo + links (Menu, Story, Location) + WhatsApp CTA
2. **Hero** — oversized "bobaman" wordmark, handwritten slogan, subheadline ("70+ handcrafted bubble tea drinks, frappes, refreshers & more — Spintex Road, Accra"), auto-rotating best-seller carousel (3 drinks with BEST SELLER badge + price), "View Full Menu" + "Order on WhatsApp" CTAs, floating boba/leaf decorations
3. **Brand story** — "More Than Just Boba" with original emotional copy
4. **Sweetness levels** — "Sweeten Your Day, Your Way" — light / medium / full sugar cards
5. **Personalization** — "Made For You" cup mockup with a handwritten name
6. **Craveworthy Flavors** — illustrated fruit showcase (banana, pineapple, grape, orange, mango) with paint-splash accents
7. **Reviews carousel** — auto-scrolling horizontal marquee, pause on hover, gold stars, PLACEHOLDER note
8. **Full Menu** — search bar, category tabs, drink cards grouped by:
   - Signature Milk Tea Boba (11 drinks)
   - Taro Delight Boba (5 drinks)
   - Cheese Series Boba (4 drinks) — note "more coming soon"
   Each card: generated drink photo, name, Large/Medium prices, Order Now (WhatsApp green) button
9. **Toppings & Add-Ons** — chip grid, PLACEHOLDER note, 9 toppings with prices
10. **Location & Contact** — address, both WhatsApp numbers, embedded Google Map iframe of Spintex Road, big WhatsApp CTA
11. **Footer** — logo, slogan, socials placeholder
12. **Floating WhatsApp button** — fixed bottom-right, always visible

## WhatsApp ordering

Helper `buildWhatsAppUrl(drinkName, size, price)` → `https://wa.me/233548787608?text=` + encoded `Hi! I'd like to order a {Size} {Drink} (₵{price}). Any toppings I can add: ______`. Ghana country code 233, leading 0 dropped. Every Order Now button and floating button uses this.

## Menu data

Single `src/data/menu.ts` exporting typed `MenuCategory[]` — easy to extend with frappes/refreshers later. Each drink has `id`, `name`, `largePrice`, `mediumPrice`, `image` (asset pointer), `bestSeller?`.

## Drink photography

Generate 20 distinct bubble tea photos (one per listed drink) at 512×512 via `imagegen`, saved to `src/assets/drinks/*.jpg`. Each prompt tuned to that drink's color/toppings (e.g., dark brown swirl for Brown Sugar, purple for Taro, matcha green, Oreo-flecked, etc.) so no two cards look alike. Plus 1 hero personalization cup mockup + 1 craveworthy fruit spread illustration.

## Technical

- Home page replaces `src/routes/index.tsx` placeholder
- Route `head()` sets real title/description/og — "bobaman — Bubble Tea on Spintex Road, Accra"
- Components split under `src/components/home/` (Hero, BrandStory, Sweetness, Personalization, Craveworthy, Reviews, Menu, Toppings, Location, FloatingWhatsApp, WaveDivider)
- Uses existing shadcn Button/Input/Card; framer-motion already available or installed via `bun add framer-motion`
- Fully responsive, grid + min-w-0 + shrink-0 patterns on multi-item rows
- Logo uploaded via `lovable-assets create` from `/mnt/user-uploads/`

## Out of scope (noted for later)

- Remaining 50+ menu items (frappes, refreshers, extra cheese series) — menu structure is extensible
- Real reviews and real toppings list — clearly marked PLACEHOLDER
- No backend / Lovable Cloud needed (no auth, no DB, no cart)
