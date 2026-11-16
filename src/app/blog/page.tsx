'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, User, ArrowRight, LayoutGrid, List, Columns } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const ARTICLES = [
  {
    id: 1,
    slug: 'philosophy-of-spatial-minimalism',
    title: 'The Philosophy of Spatial Minimalism: Modern Architecture for Living Well',
    excerpt: 'Exploring how restrained proportions, natural illumination, and raw tectonic materiality create residential spaces of profound psychological restoration.',
    category: 'Spatial Philosophy & Architecture',
    date: 'November 12, 2026',
    author: 'David Sterling, Principal Architect',
    image: '/images/ladiya-gallery/interior-24.jpg'
  },
  {
    id: 2,
    slug: 'sustainable-tectonic-materials-stone-oak',
    title: 'Sustainable Tectonic Materials: Natural Stone, Oak, and Cast Bronze in Modern Interiors',
    excerpt: 'Why natural Roman travertine, rift-sawn European white oak, and patinated architectural bronze define the longevity of modern spatial commissions.',
    category: 'Tectonic Materiality',
    date: 'November 05, 2026',
    author: 'Elena Vance, Materials & Spatial Director',
    image: '/images/ladiya-gallery/interior-25.jpg'
  },
  {
    id: 3,
    slug: 'circadian-lighting-spatial-acoustics',
    title: 'Circadian Lighting & Spatial Acoustics: Designing Quiet Residential Sanctuaries',
    excerpt: 'Mastering acoustic dampening through fluted timber millwork and indirect circadian luminaire systems for modern urban living.',
    category: 'Environmental Engineering',
    date: 'October 28, 2026',
    author: 'Marcus Thorne, Spatial Acoustics Lead',
    image: '/images/ladiya-gallery/interior-19.jpg'
  },
  {
    id: 4,
    slug: 'art-of-custom-millwork-concealed-joinery',
    title: 'The Art of Custom Millwork: Concealed Joinery & Architectural Detailing',
    excerpt: 'How Ladiya Interior executes zero-tolerance concealed joinery to unify architecture and interior cabinetry into seamless monolithic envelopes.',
    category: 'Bespoke Craftsmanship',
    date: 'October 20, 2026',
    author: 'Julian Moreau, Master Cabinetmaker & Partner',
    image: '/images/ladiya-gallery/interior-03.jpg'
  }
];

export default function BlogListingPage() {
  const [layout, setLayout] = useState<'standard' | 'grid' | 'list'>('grid');

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      <main className="py-12 sm:py-20 bg-[#fcfaf7]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
            <Link href="/" className="hover:text-[#b8955a]">Home</Link>
            <ChevronRight size={12} />
            <span className="text-stone-800 font-medium">Ladiya Interior Journal &amp; Editorial</span>
          </div>

          {/* Header & Layout Switcher Toolbar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e8e4df] pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold">
                Studio Chronicles &amp; Spatial Insights
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1f1f1f]">
                The Architecture Journal
              </h1>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Critical essays on interior architecture, spatial minimalism, tectonic materials, and circadian residential engineering from Ladiya Interior.
              </p>
            </div>

            {/* Layout Toggle Buttons */}
            <div className="flex items-center gap-2 bg-white p-1.5 border border-[#e8e4df] rounded shadow-sm self-start md:self-auto">
              <button
                onClick={() => setLayout('grid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  layout === 'grid' ? 'bg-[#1f1f1f] text-[#b8955a]' : 'text-stone-600 hover:text-black'
                }`}
                title="Grid Layout"
              >
                <LayoutGrid size={15} /> <span>Grid</span>
              </button>

              <button
                onClick={() => setLayout('standard')}
                className={`px-3 py-1.5 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  layout === 'standard' ? 'bg-[#1f1f1f] text-[#b8955a]' : 'text-stone-600 hover:text-black'
                }`}
                title="Standard Layout"
              >
                <Columns size={15} /> <span>Standard</span>
              </button>

              <button
                onClick={() => setLayout('list')}
                className={`px-3 py-1.5 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  layout === 'list' ? 'bg-[#1f1f1f] text-[#b8955a]' : 'text-stone-600 hover:text-black'
                }`}
                title="List Layout"
              >
                <List size={15} /> <span>List</span>
              </button>
            </div>
          </div>

          {/* Blog Articles Rendered according to selected Layout */}
          {layout === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {ARTICLES.map((post) => (
                <article key={post.id} className="bg-white border border-[#e8e4df] rounded-sm overflow-hidden shadow-sm group">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#b8955a]">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-stone-500 font-light">
                      <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors pt-2"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {layout === 'standard' && (
            <div className="max-w-4xl mx-auto space-y-12">
              {ARTICLES.map((post) => (
                <article key={post.id} className="bg-white border border-[#e8e4df] rounded-sm overflow-hidden shadow-sm group">
                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#b8955a]">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 sm:p-12 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-stone-500 font-light">
                      <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-stone-600 text-base font-light leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors pt-2"
                    >
                      <span>Continue Reading</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {layout === 'list' && (
            <div className="space-y-6">
              {ARTICLES.map((post) => (
                <article key={post.id} className="bg-white border border-[#e8e4df] rounded-sm p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center group shadow-sm">
                  <div className="relative w-full md:w-80 aspect-[16/10] shrink-0 overflow-hidden rounded-sm bg-stone-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b8955a]">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-stone-500 font-light">{post.date} &bull; {post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors"
                      >
                        <span>Read</span> <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
