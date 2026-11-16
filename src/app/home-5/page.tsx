'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import { ServiceBadges } from '@/components/ServiceBadges';

export default function HomeFivePage() {
  const products = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      {/* Hero Banner: Home 5 Full Width Slider */}
      <section className="relative w-full h-[650px] lg:h-[800px] overflow-hidden bg-stone-900 flex items-center">
        <Image
          src="/images/ladiya-gallery/interior-05.jpg"
          alt="Home 5 Luxury Slider"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="relative z-10 max-w-[1710px] mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-xl space-y-6 text-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold block">
              Ladiya Interior Bespoke Edition
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Spatial Architecture &amp; Bespoke Furnishings
            </h1>
            <p className="text-stone-300 text-sm sm:text-base font-light">
              Transform every living environment with custom architectural millwork, monolithic stone plinths, and bespoke penthouse suites.
            </p>
            <div className="pt-2">
              <Link
                href="/collections/all"
                className="px-8 py-4 bg-[#b8955a] hover:bg-[#9e7a42] text-white text-xs font-bold tracking-widest uppercase transition-colors inline-block shadow-lg"
              >
                Discover Spatial Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Banner Showcase */}
      <section className="py-20 max-w-[1710px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
            <Image src="/images/ladiya-gallery/interior-02.jpg" alt="Spatial Illumination Showcase" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
            <Image src="/images/ladiya-gallery/interior-01.jpg" alt="Living Suite" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#fcfaf7] border-y border-[#e8e4df]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#b8955a] font-semibold">Interior Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f]">Signature Releases</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
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
