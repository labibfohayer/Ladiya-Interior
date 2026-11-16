import { ShowcaseHeader } from '@/components/ShowcaseHeader';
import { ShowcaseHero } from '@/components/ShowcaseHero';
import { PasswordBox } from '@/components/PasswordBox';
import { HomepagesGrid } from '@/components/HomepagesGrid';
import { ProductLayoutsGrid } from '@/components/ProductLayoutsGrid';
import { CollectionLayoutsGrid } from '@/components/CollectionLayoutsGrid';
import { HighlightsSection } from '@/components/HighlightsSection';
import { BlogLayoutsSection } from '@/components/BlogLayoutsSection';
import { FeaturesIconGrid } from '@/components/FeaturesIconGrid';
import { ShowcaseFooter } from '@/components/ShowcaseFooter';

export default function HomePage() {
  return (
    <>
      {/* 1. Ladiya Studio Showcase Transparent Header */}
      <ShowcaseHeader />

      {/* 2. Exact Hero Showcase with Shimmering Text & Rotating Seal */}
      <ShowcaseHero />

      {/* 3. Private Studio Portfolio Access Key Box */}
      <PasswordBox />

      {/* 4. 5+ Curated Ladiya Interior Architectural Concepts */}
      <HomepagesGrid />

      {/* 5. 9+ Bespoke Spatial Layouts */}
      <ProductLayoutsGrid />

      {/* 6. 09+ Curated Design Collections */}
      <CollectionLayoutsGrid />

      {/* 7. Architectural Highlights (Lookbook, About Studio, Spatial Navigation, Provenance) */}
      <HighlightsSection />

      {/* 8. Architectural Journal & Editorial Insights (Standard, Grid, List, Single) */}
      <BlogLayoutsSection />

      {/* 9. Why Discerning Clients Choose Ladiya Interior (Millwork, Turnkey, Materials, Supervision) */}
      <FeaturesIconGrid />

      {/* 10. Showcase Footer Consultation CTA Banner */}
      <ShowcaseFooter />
    </>
  );
}
