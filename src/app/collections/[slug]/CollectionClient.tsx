'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, ChevronRight, X, Layers, Grid2X2, Grid3X3, LayoutGrid, Tag } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CollectionClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialFilter = searchParams.get('filter') || 'all';
  const initialLayout = searchParams.get('layout') || 'left-sidebar';

  const [activeLayout, setActiveLayout] = useState<string>(initialLayout);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedBadge, setSelectedBadge] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(5000);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchBadge = selectedBadge === 'all' || p.badge === selectedBadge;
      const matchPrice = p.price <= priceRange;
      const matchInitialFilter = initialFilter === 'bestseller'
        ? p.badge === 'BEST SELLER'
        : initialFilter === 'new'
        ? p.badge === 'NEW'
        : initialFilter === 'sale'
        ? (p.badge === 'SALE' || !!p.compareAtPrice)
        : true;

      return matchCat && matchBadge && matchPrice && matchInitialFilter;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedBadge, priceRange, sortBy, initialFilter]);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      {/* 9-Layout Interactive Switcher Bar */}
      <div className="sticky top-[73px] z-30 w-full bg-[#1f1f1f] text-white py-2.5 px-4 shadow-md overflow-x-auto select-none">
        <div className="max-w-[1710px] mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#b8955a] shrink-0">
            <Layers size={14} />
            <span>Select Layout:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'left-sidebar', label: '1. Left Sidebar' },
              { id: 'right-sidebar', label: '2. Right Sidebar' },
              { id: 'top-filter', label: '3. Top Filter' },
              { id: '2-col', label: '4. 2 Columns' },
              { id: '3-col', label: '5. 3 Columns' },
              { id: '4-col', label: '6. 4 Columns' },
              { id: 'coupon', label: '7. Coupon Bar' }
            ].map(l => (
              <button
                key={l.id}
                onClick={() => setActiveLayout(l.id)}
                className={`px-3 py-1 rounded text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeLayout === l.id
                    ? 'bg-[#b8955a] text-white shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-[#fcfaf7] min-h-screen">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
            <Link href="/" className="hover:text-[#b8955a] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-stone-800 font-medium">Collections</span>
            {selectedCategory !== 'All' && (
              <>
                <ChevronRight size={12} />
                <span className="text-[#b8955a] font-semibold">{selectedCategory}</span>
              </>
            )}
          </div>

          {/* Coupon Discount Banner if activeLayout === 'coupon' */}
          {activeLayout === 'coupon' && (
            <div className="bg-[#b8955a] text-white p-4 rounded-sm flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <Tag size={20} />
                <span className="font-bold text-sm">
                  Exclusive Studio Privilege: Use code <span className="bg-black/20 px-2 py-0.5 rounded font-mono">LADIYA15</span> for 15% off bespoke spatial suites
                </span>
              </div>
              <button className="px-4 py-1.5 bg-white text-[#1f1f1f] text-xs font-bold rounded uppercase hover:bg-stone-100">
                Apply Code
              </button>
            </div>
          )}

          {/* Page Header */}
          <div className="border-b border-[#e8e4df] pb-8 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold">
              Spatial Architecture Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1f1f1f]">
              {selectedCategory === 'All' ? 'All Architectural Creations' : `${selectedCategory} Collection`}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 max-w-2xl font-light leading-relaxed">
              Explore Ladiya Interior's signature spatial portfolio featuring monolithic Roman travertine, fluted oak millwork, and museum-grade architectural lighting.
            </p>
          </div>

          {/* Layout Container: Left/Right Sidebar or Top Filter */}
          <div className={`flex flex-col ${activeLayout === 'right-sidebar' ? 'lg:flex-row-reverse' : activeLayout === 'left-sidebar' ? 'lg:flex-row' : ''} gap-8 items-start`}>
            {/* Sidebar Filters if Left or Right Sidebar Layout */}
            {(activeLayout === 'left-sidebar' || activeLayout === 'right-sidebar') && (
              <aside className="w-full lg:w-72 bg-white p-6 border border-[#e8e4df] rounded-sm shadow-sm space-y-8 shrink-0">
                <div className="flex items-center justify-between border-b border-[#e8e4df] pb-3">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-[#1f1f1f]">Categories</h3>
                </div>
                <div className="space-y-2">
                  {['All', 'Living Architecture', 'Spatial Lighting', 'Dining & Millwork', 'Acoustic & Surfaces'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left py-1.5 text-xs font-medium flex justify-between items-center transition-colors cursor-pointer ${
                        selectedCategory === cat ? 'text-[#b8955a] font-bold' : 'text-stone-600 hover:text-black'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-[11px] text-stone-400">
                        ({cat === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length})
                      </span>
                    </button>
                  ))}
                </div>

                <div className="border-t border-[#e8e4df] pt-6 space-y-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-[#1f1f1f]">Max Price</h3>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-[#b8955a]"
                  />
                  <div className="flex justify-between text-xs text-stone-500">
                    <span>$100</span>
                    <span className="font-bold text-[#1f1f1f]">${priceRange}</span>
                    <span>$5,000</span>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Products Area */}
            <div className="flex-1 w-full space-y-6">
              {/* Top Filter Bar */}
              <div className="bg-white p-4 sm:p-5 border border-[#e8e4df] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                {activeLayout === 'top-filter' && (
                  <div className="flex flex-wrap items-center gap-2">
                    {['All', 'Living Architecture', 'Spatial Lighting', 'Dining & Millwork', 'Acoustic & Surfaces'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-[#1f1f1f] text-[#b8955a]'
                            : 'bg-[#fcfaf7] text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between w-full sm:w-auto gap-4 ml-auto">
                  <span className="text-xs text-stone-500 font-light">
                    Showing {filteredProducts.length} pieces
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-500 font-medium">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-[#fcfaf7] border border-[#e8e4df] px-3 py-1.5 text-xs text-[#1f1f1f] font-medium focus:outline-none cursor-pointer"
                    >
                      <option value="featured">Featured / Atelier Pick</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid Rendered based on columns */}
              <div className={`grid ${
                activeLayout === '2-col'
                  ? 'grid-cols-1 sm:grid-cols-2 gap-8'
                  : activeLayout === '3-col'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              }`}>
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
