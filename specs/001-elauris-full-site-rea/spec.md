# Feature Specification: Full-Site 100% Reverse Engineering (Ap Elauris)

**Feature Branch / Name:** `001-elauris-full-site-rea`  
**Status:** In-Progress / Spec Ready  
**Scope:** Complete End-to-End Reverse Engineering of Ap Elauris Jewelry & Accessories Shopify Theme Ecosystem  
**Target References:**
1. ApolloTheme Theme Showcase Landing Page (`https://apollotheme.com/shopify/ap-elauris/#page-demo`)
2. Ap Elauris Live Shopify Storefront (`https://ap-elauris.myshopify.com/` with Demo Password `1`)
   - Home 1, Home 2, Home 3, Home 4, Home 5
   - 9+ Product Detail Layouts
   - 9+ Collection Layouts
   - Smart Theme Blocks (Lookbook, About Us, Mega Menu, Advanced Filter)
   - Blog Layouts (Standard, Grid, List, Single Article)
   - Core Pages (About, Contact, FAQ)

---

## 1. Problem Statement & User Value

The user requires a 100% faithful, pixel-perfect, asset-complete, and content-complete reverse engineering of the entire **Ap Elauris** ecosystem. Every single page, section, text string, image, typography scale, responsive layout, interaction state, and animation must be authentically replicated with zero regression and zero placeholder shortcuts.

---

## 2. User Scenarios & Flow Matrix

### Scenario 1: Theme Showcase Landing Page Navigation
- **Actor:** Prospective buyer / Luxury theme evaluator
- **Flow:**
  1. User visits `/` or `#page-demo`.
  2. User views the ThemeForest / Envato preview bar with brand badge and green CTA button.
  3. User views the high-resolution silk drapery background (`landing.jpg`), spinning circular seal (`logo-scroll.png`), and hero text with dual-tone gold highlights.
  4. User views the demo password helper card (`1`) with instant one-click clipboard copy.
  5. User scrolls through the 5 Homepages showcase, 9+ Product layouts, 9+ Collection layouts, smart theme feature blocks, and blog spaces.
  6. User clicks on any demo card to preview or navigate directly to that specific live page template.

### Scenario 2: Exploring Live Storefronts (Home 1 through Home 5)
- **Actor:** E-commerce customer / Shopper
- **Flow:**
  1. User navigates to `/home-1` (or switches between Home 1, Home 2, Home 3, Home 4, Home 5).
  2. User experiences distinct hero styles (slider, split banner, video background, luxury editorial, grid carousel).
  3. User browses category circles, curated collections with tabs ("New Arrivals", "Best Sellers", "Special Sale").
  4. User views countdown promotional banners, craftsmanship story, customer reviews carousel, and Instagram lookbook.

### Scenario 3: Product Detail Exploration (All 9 Layouts)
- **Actor:** Shopper inspecting fine jewelry
- **Flow:**
  1. User opens any jewelry item (e.g. `/products/diamond-eternity-band`).
  2. User can toggle between different product layout presentations:
     - Classic layout with gallery
     - Full scroll fixed layout
     - Left sidebar layout
     - Right sidebar layout
     - Grid image layout
     - Video detail layout
     - Upsell / bundle layout
     - Countdown sale layout
  3. User can select metal finishes (18k Gold, Rose Gold, Platinum), diamond clarity, ring sizes, add to cart, trigger quick view, or view trust badges.

### Scenario 4: Collection Browsing (All 9 Collection Layouts)
- **Actor:** Shopper filtering luxury collections
- **Flow:**
  1. User navigates to `/collections/[slug]`.
  2. User can toggle between 9 distinct collection configurations: Left Sidebar, Right Sidebar, Top Filter, 2-Column, 3-Column, 4-Column, Full-Width, Coupon Bar, and All Collection.
  3. User can filter by price, gemstone type, metal, availability, and sort by price/popularity.

### Scenario 5: Content & Editorial Pages
- **Actor:** Brand enthusiast
- **Flow:**
  1. User visits `/about` to read the jewelry atelier heritage, craftsmanship story, and meet artisans.
  2. User visits `/contact` to submit inquiries or book a showroom appointment.
  3. User visits `/blog` and reads articles formatted in Standard, Grid, List, or Single Post views.

---

## 3. Functional Requirements

### FR-1: Showcase Landing Page (`/`)
- Must retain 100% pixel fidelity with `https://apollotheme.com/shopify/ap-elauris/#page-demo`.
- Must include the exact Envato Market top bar, transparent header, rotating circular seal badge, 3 metric counters, and password clipboard box.
- All 5 Homepages, 9+ Product Layouts, 9+ Collection Layouts, 4 Highlight blocks, 4 Blog formats, and 6 Feature icons must be interactively browsable.

### FR-2: Homepages (Home 1 - Home 5)
- **Home 1 (`/home-1`):** Luxury flagship storefront with announcement bar, multi-level mega menu, smooth hero carousel, category pills, tabbed product grid, craftsmanship banner, customer testimonials, and luxury newsletter footer.
- **Home 2 (`/home-2`):** Modern high-jewelry editorial with split-screen hero and curated diamond showcases.
- **Home 3 (`/home-3`):** Centered luxury minimalist layout with video backdrop and gold accents.
- **Home 4 (`/home-4`):** Dynamic grid collection showcase with animated badge tickers.
- **Home 5 (`/home-5`):** Full-width slider with brand timeline and heritage spotlight.

### FR-3: Product Templates (`/products/[slug]`)
- Support 9 specific layout styles accessible via switcher or query param:
  1. `classic`: Standard gallery with sticky cart box.
  2. `scroll`: Full-bleed vertical image scroll with fixed purchase card.
  3. `left-sidebar`: Specs and shipping details in left column.
  4. `right-sidebar`: Related items and customer reviews in right column.
  5. `grid`: 2x2 high-res image grid.
  6. `video`: Embedded luxury atelier craft video modal.
  7. `upsell`: Cross-sell jewelry sets and matching earrings/necklaces.
  8. `countdown`: Flash sale timer with stock scarcity bar.
  9. `coming-soon`: Pre-order reservation form.

### FR-4: Collection Templates (`/collections/[slug]`)
- Support 9 collection layout modes:
  1. Left sidebar filters (Facet filters for Price, Material, Stone, Rating)
  2. Right sidebar filters
  3. Horizontal top filter bar
  4. 2-column large cards
  5. 3-column medium cards
  6. 4-column compact cards
  7. Full-width infinite lookbook
  8. Coupon discount promo banner integration
  9. All-collections directory

### FR-5: Content & Blog Templates
- `/about`: Atelier heritage, artisan craftsmanship, mission, timeline, team.
- `/contact`: Showroom address, interactive inquiry form, opening hours, Google Maps location mock.
- `/blog`: Blog listing supporting Standard, Grid, and List views.
- `/blog/[slug]`: Single luxury editorial article with social share, author bio, and related posts.

### FR-6: Interactive E-Commerce Features
- Cart Drawer slide-out with subtotal calculation, quantity modifier, and free shipping progress bar.
- Quick View modal for previewing any product without leaving the catalog.
- Currency selector (USD, EUR, GBP, JPY, BDT) and search overlay.

---

## 4. Success Criteria

1. **Visual Accuracy:** 100% visual match to official Elauris demo assets and screenshots.
2. **Completeness:** All 5 Homepages, 9 Product Layouts, 9 Collection Layouts, and Content pages fully functional with zero dummy placeholders or broken links.
3. **Performance & Responsiveness:** 100% responsive across Mobile (375px), Tablet (768px), Laptop (1024px), and Desktop (1440px+).
4. **Code Quality:** Zero TypeScript compilation errors (`tsc --noEmit`), clean webpack build, zero layout regressions.

---

## 5. Non-Goals
- Real Stripe/PayPal live card payment processing (mock checkout workflow only).
- Live Shopify Admin CMS sync (all data statically authored in structured TypeScript models).
