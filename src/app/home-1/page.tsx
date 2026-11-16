'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { CategoryCircles } from '@/components/CategoryCircles';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { CraftsmanshipBanner } from '@/components/CraftsmanshipBanner';
import { ServiceBadges } from '@/components/ServiceBadges';
import { MarqueeTicker } from '@/components/MarqueeTicker';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { JournalSection } from '@/components/JournalSection';
import { InstagramGrid } from '@/components/InstagramGrid';
import { Footer } from '@/components/Footer';

export default function HomeOnePage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Flagship Storefront Header */}
      <Header />

      {/* Hero Carousel */}
      <HeroSlider />

      {/* Marquee Ticker */}
      <MarqueeTicker />

      {/* Curated Categories Circles */}
      <CategoryCircles />

      {/* Tabbed Featured Products */}
      <FeaturedCollection />

      {/* Craftsmanship Brand Banner */}
      <CraftsmanshipBanner />

      {/* Customer Reviews Carousel */}
      <TestimonialCarousel />

      {/* Editorial Journal Articles */}
      <JournalSection />

      {/* Guarantee & Services */}
      <ServiceBadges />

      {/* Instagram Lookbook Grid */}
      <InstagramGrid />

      {/* Comprehensive Storefront Footer */}
      <Footer />
    </div>
  );
}
