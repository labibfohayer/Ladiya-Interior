'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import { ServiceBadges } from '@/components/ServiceBadges';

export default function HomeTwoPage() {
  const livingSuites = PRODUCTS.filter(p => p.category === 'Living Architecture').slice(0, 4);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      {/* Hero Section: Split Editorial Showcase */}
      <section className="relative bg-[#fcfaf7] py-12 lg:py-20 border-b border-[#e8e4df]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold flex items-center gap-2">
                <Sparkles size={14} /> Spatial Architecture Edition
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1f1f1f] leading-[1.15]">
                Our Architecture <br />
                <span className="text-[#b8955a]">Your Sanctuary</span>
              </h1>
              <p className="text-stone-600 text-base font-light leading-relaxed max-w-lg">
                If you value uncompromising architectural proportion, organic European textures, and serene spatial tranquility, welcome to Ladiya Interior.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/collections/all?category=Living Architecture"
                  className="px-8 py-4 bg-[#1f1f1f] hover:bg-[#b8955a] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md"
                >
                  Explore Living Suites
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-transparent border-2 border-[#1f1f1f] hover:border-[#b8955a] text-[#1f1f1f] hover:text-[#b8955a] text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  Studio Philosophy
                </Link>
              </div>
            </div>

            {/* Right Dual Hero Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg border border-stone-200">
                <Image
                  src="/images/ladiya-gallery/interior-10.jpg"
                  alt="Spatial Lighting &amp; Millwork"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg border border-stone-200 mt-8">
                <Image
                  src="/images/ladiya-gallery/interior-05.jpg"
                  alt="Living Architecture Suite"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Promo Banners Grid */}
      <section className="py-16 sm:py-24 max-w-[1710px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Living Architecture', img: '/images/ladiya-gallery/interior-01.jpg', link: '/collections/all?category=Living Architecture' },
            { title: 'Spatial Lighting', img: '/images/ladiya-gallery/interior-02.jpg', link: '/collections/all?category=Spatial Lighting' },
            { title: 'Dining & Millwork', img: '/images/ladiya-gallery/interior-04.jpg', link: '/collections/all?category=Dining & Millwork' }
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden shadow-md block bg-stone-100"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white space-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-[#b8955a] font-semibold">Portfolio</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="text-xs underline flex items-center gap-1 group-hover:text-[#b8955a] transition-colors pt-2">
                    Explore Suite <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Curated Products */}
      <section className="py-16 bg-[#fcfaf7] border-y border-[#e8e4df]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#b8955a] font-semibold">Exquisite Selection</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f]">Curated Living Creations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {livingSuites.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <section className="relative w-full h-[450px] sm:h-[550px] overflow-hidden bg-black flex items-center justify-center text-center text-white">
        <Image
          src="/images/ladiya-gallery/interior-13.jpg"
          alt="Video Background Banner"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 max-w-2xl px-4 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold">Inside The Design Studio</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Mastery in Every Spatial Dimension</h2>
          <p className="text-stone-300 text-sm font-light">Discover how Ladiya Interior crafts monolithic stone, concealed timber joinery, and circadian lighting systems.</p>
          <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-[#b8955a] backdrop-blur-md border border-white/40 flex items-center justify-center text-white mx-auto transition-transform hover:scale-110 shadow-2xl cursor-pointer">
            <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </section>

      <ServiceBadges />
      <Footer />
    </div>
  );
}
