# Feature Specification: 100% Animations Reverse Engineering (Ap Elauris)

**Feature Branch / Name:** `002-animations-reverse-engineering`  
**Status:** In-Progress / Spec Ready  
**Scope:** Replicate 100% of the original CSS keyframes, interactive motion, micro-interactions, custom cursor physics, and scroll reveal animations across the entire Ap Elauris ecosystem.

---

## 1. Problem Statement & User Value

The user requires every single animation across the entire website—every section, card, button, text, seal, and cursor—to be reverse engineered and applied 100% faithfully. The motions give the luxury jewelry aesthetic its distinctive elegance, polished feel, and premium tactile feedback.

---

## 2. Animation Inventory & Catalog

### A1: Shimmering Gold Text Sweep (`arvelle-shimmer`)
- **Selector:** `.text-infinity::after`
- **Behavior:** Sweeping diagonal white/gold reflection across text words like "Elauris" and "eCommerce" every 3 seconds.
- **Keyframes:** `0% { background-position: 150% 0; } 90% { background-position: -150% 0; } 100% { background-position: -150% 0; }`

### A2: 360° Continuous Seal Rotation (`spinnerRotate`)
- **Selector:** `.slideshow .logo-cir` / `.animate-spin-slow`
- **Behavior:** Smooth, non-stopping 360° circular rotation of the Elauris diamond seal ring (10s linear loop).

### A3: Custom Luxury Gold Cursor Physics (`cursor-dot`)
- **Selector:** `.cursor-dot`
- **Behavior:**
  - Outer 32px gold ring with thin border (`rgba(216, 173, 110, 0.8)`)
  - Inner 6px solid gold core dot (`#d8ad6e`)
  - Smooth lagging physics following mouse position via `will-change: transform`
  - Expands to 50px circle (`is-hover`) with magnetic transition when hovering over buttons, cards, links, or inputs.

### A4: Scroll-Triggered Reveal Animations (AOS / Framer Motion / IntersectionObserver)
- **Behaviors:**
  - `fade-up`: Smooth upward fade with 20px translation and ease-out timing.
  - `fade-left` & `fade-right`: Elements slide inward from horizontal edges.
  - Staggered card reveals in product and collection grids.

### A5: Card & Image Micro-Interactions
- **Behaviors:**
  - Hover zoom: `scale(1.05)` with `duration-700 ease-out`
  - Elevation lift: `translate-y-[-6px]` with soft ambient shadow expansion
  - Overlay action buttons: Slide up from `translate-y-3` with opacity fade-in
  - Wishlist heart bounce: Spring scale pulse `scale(1.25)` on click

### A6: Infinite Marquee Ticker (`marquee`)
- **Behavior:** Continuous horizontal scrolling of luxury jewelry value props ("Conflict-Free Diamonds • Recycled 18K Gold • Paris Atelier • Free Worldwide Shipping").

### A7: Interactive Drawer & Modal Physics
- **Cart Drawer:** Smooth slide-in from right edge (`translateX(0)` from `translateX(100%)`) with backdrop blur fade.
- **Quick View Modal:** Smooth center scale-in `scale(0.95) -> scale(1)` with opacity fade.

### A8: Countdown Timer Pulse
- **Behavior:** Pulsing clock icon and glowing countdown digit transitions on flash sale layouts.

---

## 3. Success Criteria

1. **Exact Timing & Easing:** All animations match the original durations, bezier curves, and loops.
2. **Performance:** 60fps / 120fps smooth hardware-accelerated animations using `transform` and `opacity` (no layout thrashing).
3. **Accessibility:** Respect `prefers-reduced-motion` media queries.
4. **Empirical Verification:** Verify in browser via Playwright with screenshots and computed styles.
