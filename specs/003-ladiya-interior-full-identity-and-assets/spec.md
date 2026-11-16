# Feature Specification: Full Ladiya Interior Brand Identity & Asset Integration

**Feature Branch / Name:** `003-ladiya-interior-full-identity-and-assets`  
**Status:** In-Progress / Implementing  
**Author:** Antigravity Architect  
**Scope:** Complete integration of official Ladiya Interior branding, 25 custom client interior photography assets, multi-branch studio contact information, and end-to-end site-wide asset replacement across all 11 routes.

---

## 1. Problem Statement & User Value

The client (Ladiya Interior / লাদিয়া ইন্টেরিয়র) has approved the official brand identity, tagline (*"Crafting Timeless Living Spaces"*), official rotating seal, and provided a gallery of 25 bespoke interior design photography assets. 

The website must now be fully transformed from end-to-end:
1. Replace all legacy jewelry image references with the 25 high-resolution architectural interior photography assets.
2. Standardize business and contact information across the site:
   - **Showrooms & Studios:** Gulshan Showroom & Studio & Banani Showroom & Studio (Dhaka, Bangladesh).
   - **Official Email:** `contact@ladiya-interior.com`.
   - **Direct Hotline & WhatsApp:** `01580506445` (`+880 1580-506445`).
   - **Social Links:** Curated luxury studio links (Facebook, Instagram, LinkedIn, Behance).
3. Ensure 100% architectural fidelity, zero regressions, and zero broken image links across all 11 routes.

---

## 2. Asset Mapping Matrix (25 Photography Assets)

| Asset File | Target Placement | Architectural Role |
|---|---|---|
| `interior-01.jpg` | Product `LAD-LIV-002` (Travertine Table) | Travertine living room center table |
| `interior-02.jpg` | Product `LAD-LGT-001` (Brass Chandelier) | Sculptural dining lighting fixture |
| `interior-03.jpg` | Product `LAD-ACS-009` (Acoustic Oak) | Fluted timber wall cladding |
| `interior-04.jpg` | Product `LAD-DIN-007` (Dining Table) | Solid white oak dining ensemble |
| `interior-05.jpg` | Home 1 Hero Slider 1 | Modern luxury open-plan residence |
| `interior-06.jpg` | Product `LAD-LIV-012` (Bouclé Chair) | Minimalist spatial lounge chair |
| `interior-07.jpg` | Product `LAD-LGT-008` (Floor Luminaire) | Biophilic marble & brass luminaire |
| `interior-08.jpg` | Home 1 Feature Banner (Living Space) | Monolithic spatial living room |
| `interior-09.jpg` | Product `LAD-LIV-006` (Ceramic Plinth) | Handcrafted spatial plinth & pedestal |
| `interior-10.jpg` | Home 2 Hero Split Screen | Minimalist penthouse living room |
| `interior-11.jpg` | Product `LAD-DIN-005` (Linear Luminaire) | Modern kitchen island suspension |
| `interior-12.jpg` | Product `LAD-LGT-004` (Wall Sconce) | Warm indirect architectural wall sconce |
| `interior-13.jpg` | Home 3 Centered Hero Video/Backdrop | Turnkey penthouse interior view |
| `interior-14.jpg` | Product `LAD-LGT-003` (Glass Droplet) | Hand-blown cascading glass pendant |
| `interior-15.jpg` | Product `LAD-LIV-010` (Marble Cube) | Spanish marble side table |
| `interior-16.jpg` | Home 4 Grid Feature 1 | Master suite bedroom interior |
| `interior-17.jpg` | Home 5 Heritage Gallery | Tectonic wood and stone architectural joinery |
| `interior-18.jpg` | Lookbook Modal / Showcase Highlight | Minimalist walk-in dressing atelier |
| `interior-19.jpg` | About Us Atelier Heritage Story | Architectural design studio & millwork |
| `interior-20.png` | Main Showcase Homepage Card 1 | Luxury modern living suite showcase |
| `interior-21.png` | Main Showcase Homepage Card 2 | Penthouse dining & lighting showcase |
| `interior-22.png` | Main Showcase Homepage Card 3 | Minimalist bedroom & acoustic showcase |
| `interior-23.png` | Main Showcase Homepage Card 4 | Bespoke architectural kitchen showcase |
| `interior-24.jpg` | Blog Post 1 Cover Article | Travertine & spatial minimalism |
| `interior-25.jpg` | Blog Post 2 Cover Article | Sustainable tectonic materials & oak |

---

## 3. Contact & Studio Data Specifications

- **Brand:** Ladiya Interior (লাদিয়া ইন্টেরিয়র)
- **Tagline:** Crafting Timeless Living Spaces
- **Offices / Showrooms:**
  1. *Gulshan Studio & Experience Center:* House 14, Road 11, Gulshan-1, Dhaka 1212, Bangladesh
  2. *Banani Flagship Atelier:* House 42, Block D, Road 11, Banani, Dhaka 1213, Bangladesh
- **Phone / WhatsApp:** `+880 1580-506445` (`01580506445`)
- **Email:** `contact@ladiya-interior.com`
- **Social Media:**
  - Facebook: `https://facebook.com/ladiyainterior`
  - Instagram: `https://instagram.com/ladiyainterior`
  - LinkedIn: `https://linkedin.com/company/ladiya-interior`
  - Behance: `https://behance.net/ladiyainterior`

---

## 4. Verification Checklist & Success Criteria

1. **Zero Broken Image Links:** Every single image rendered across all 11 routes must return HTTP 200.
2. **Product Catalog Completeness:** `src/data/products.ts` points 100% to `/images/ladiya-gallery/interior-*.{jpg,png}`.
3. **Contact & Footer Accuracy:** `/contact`, showcase footer, and all page footers display Gulshan & Banani addresses, `01580506445`, and `contact@ladiya-interior.com`.
4. **Build Gate:** `npx tsc --noEmit` exits with 0 errors; `./node_modules/.bin/next build --webpack` succeeds cleanly.
5. **Puppeteer Visual Verification:** Headless browser captures and audits `/`, `/contact`, `/about`, `/products/[slug]`, and `/home-1`.
