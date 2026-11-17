'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import { ServiceBadges } from '@/components/ServiceBadges';

export default function HomeThreePage() {
  const spatialLighting = PRODUCTS.filter(p => p.category === 'Spatial Lighting' || p.category === 'Dining & Millwork').slice(0, 4);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      {/* Hero Banner: Full-Bleed Luxury Slider */}
      <section className="relative w-full h-[540px] sm:h-[650px] lg:h-[820px] overflow-hidden bg-stone-900 flex items-center">
        <Image
          src="/images/ladiya-gallery/interior-10.jpg"
          alt="Luxury Spatial Architecture"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        <div className="relative z-10 max-w-[1710px] mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-xl space-y-4 sm:space-y-6 text-white">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold block">
              Winter 2026 Architectural Spatial Collection
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Timeless Tectonics &amp; Spatial Harmony
            </h1>
            <p className="text-stone-300 text-sm sm:text-base font-light">
              Engineered with sustainable European timber, natural Roman travertine, and bespoke architectural millwork for generational spaces.
            </p>
            <div className="pt-2 flex gap-4">
              <Link
                href="/collections/all"
                className="px-8 py-4 bg-[#b8955a] hover:bg-[#9e7a42] text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-lg"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Banner & Showcase */}
      <section className="py-20 max-w-[1710px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-stone-200">
            <Image
              src="/images/ladiya-gallery/interior-13.jpg"
              alt="Architectural Design Studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 lg:pl-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#b8955a] font-semibold">
              The Architectural Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f]">
              Engineered with Precision &amp; Soul
            </h2>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Every spatial volume begins with detailed architectural elevations and light path modeling before master craftsmen sculpt custom fluted wall paneling, hand-honed travertine surfaces, and integrated lighting channels.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 bg-[#1f1f1f] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#b8955a] transition-colors"
            >
              Discover The Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Architectural Lighting & Millwork */}
      <section className="py-16 bg-[#fcfaf7] border-t border-[#e8e4df]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#b8955a] font-semibold">Iconic Illumination &amp; Millwork</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f]">Spatial Lighting &amp; Dining Elements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spatialLighting.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <ServiceBadges />
      <Footer />
    </div>
  );
}
