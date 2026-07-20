## Goal
On the homepage hero, hide the top-left nav logo while the user is at the top. Once they scroll down and the nav gains its caramel backdrop, show the logo.

## Change
Edit `src/components/home/Nav.tsx`:
- Keep the logo `<Link>` always in the DOM (preserves layout/grid).
- Gate the `<img>` visibility on the existing `scrolled` state: render it with `opacity-0 pointer-events-none` when `!scrolled`, and `opacity-100` when `scrolled`, with a smooth 250ms transition.
- No other changes to nav links, Order button, or the Hero.

## Scope
- Homepage only concern in practice, but since the same Nav renders on `/menu` and `/story`, those pages start scrolled-at-top too. On those routes the logo would also be hidden until scroll. If that's not desired, we can instead scope the hide to route `/` only — flagging for confirmation is unnecessary unless you want route-specific behavior.

## Verification
- At `/` top: nav shows only Menu / Our Story / Order, no logo.
- Scroll down: logo fades in with the caramel nav backdrop.
- Scroll back to top: logo fades out again.
