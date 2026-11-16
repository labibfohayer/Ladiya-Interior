'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, Product } from '@/data/products';

export const FeaturedCollection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Living Architecture', 'Spatial Lighting', 'Dining & Millwork', 'Acoustic & Surfaces'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter(p => p.category === activeCategory).slice(0, 8);

  return (
    <section className="py-20 sm:py-28 bg-[#F8F6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8E4DF] pb-6 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
              Curated Architectural Suites
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#22201D] font-normal">
              Featured Spatial Works
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold tracking-widest uppercase">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 px-3 transition-all relative cursor-pointer ${
                  activeCategory === cat
                    ? 'text-[#22201D] border-b-2 border-[#D8AD6E]'
                    : 'text-stone-400 hover:text-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/collections/all"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#22201D] hover:bg-[#D8AD6E] text-white hover:text-[#22201D] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md group"
          >
            <span>View The Entire Collection</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
