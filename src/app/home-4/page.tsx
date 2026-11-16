'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import { ServiceBadges } from '@/components/ServiceBadges';

export default function HomeFourPage() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      {/* Hero Banner: Modern Grid Slider */}
      <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden bg-stone-900 flex items-center">
        <Image
          src="/images/ladiya-gallery/interior-16.jpg"
          alt="Home 4 Slider"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <div className="relative z-10 max-w-[1710px] mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-lg space-y-6 text-white bg-black/40 backdrop-blur-md p-8 sm:p-12 border border-white/20 rounded-sm">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold block">
              Interior Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Bold Geometry &amp; Spatial Serenity
            </h1>
            <p className="text-stone-300 text-sm font-light">
              Designed for discerning clients. Monolithic stone plinths, acoustic timber walls, and circadian lighting.
            </p>
            <div className="pt-2">
              <Link
                href="/collections/all"
                className="px-8 py-3.5 bg-[#b8955a] hover:bg-[#9e7a42] text-white text-xs font-bold tracking-widest uppercase transition-colors inline-block"
              >
                Explore Spatial Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Promo Grid */}
      <section className="py-16 max-w-[1710px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
            <Image src="/images/ladiya-gallery/interior-08.jpg" alt="Promo 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
            <Image src="/images/ladiya-gallery/interior-10.jpg" alt="Promo 2" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
            <Image src="/images/ladiya-gallery/interior-17.jpg" alt="Promo 3" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#fcfaf7] border-y border-[#e8e4df]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#b8955a] font-semibold">Seasonal Showcase</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f]">Trending Spatial Architecture</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Dual Highlights Banners */}
      <section className="py-16 max-w-[1710px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-md">
            <Image src="/images/ladiya-gallery/interior-09.jpg" alt="Highlight 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-md">
            <Image src="/images/ladiya-gallery/interior-11.jpg" alt="Highlight 2" fill className="object-cover" />
          </div>
        </div>
      </section>

      <ServiceBadges />
      <Footer />
    </div>
  );
}
