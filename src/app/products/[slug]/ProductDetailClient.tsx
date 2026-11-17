'use client';

import React, { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Play,
  Layers,
  Percent
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ProductDetailPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = (propSlug || params?.slug) as string;
  const initialLayout = searchParams.get('layout') || 'classic';

  const [activeLayout, setActiveLayout] = useState<string>(initialLayout);
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const { addToCart, toggleWishlist, isInWishlist, currencySymbol, currencyRate } = useCart();

  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [selectedMetal, setSelectedMetal] = useState(product.metals[0]);
  const [selectedSize, setSelectedSize] = useState('7');
  const [quantity, setQuantity] = useState(1);
  const [openTab, setOpenTab] = useState<'materials' | 'sizing' | 'shipping' | null>('materials');

  const wishlisted = isInWishlist(product.id);
  const formattedPrice = (product.price * currencyRate).toFixed(2);
  const formattedComparePrice = product.compareAtPrice
    ? (product.compareAtPrice * currencyRate).toFixed(2)
    : null;

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const toggleTab = (tab: 'materials' | 'sizing' | 'shipping') => {
    setOpenTab(current => current === tab ? null : tab);
  };

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
              { id: 'classic', label: '1. Classic Gallery' },
              { id: 'scroll', label: '2. Full Scroll Fixed' },
              { id: 'left', label: '3. Left Gallery' },
              { id: 'grid', label: '4. Image Grid' },
              { id: 'video', label: '5. Detail Video' },
              { id: 'upsell', label: '6. Upsell Bundle' },
              { id: 'countdown', label: '7. Flash Countdown' }
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

      <div className="py-10 sm:py-16 bg-[#fcfaf7]">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 space-y-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
            <Link href="/" className="hover:text-[#b8955a]">Home</Link>
            <ChevronRight size={12} />
            <Link href="/collections/all" className="hover:text-[#b8955a]">Collections</Link>
            <ChevronRight size={12} />
            <span className="text-stone-800 font-medium">{product.title}</span>
          </div>

          {/* Countdown Flash Sale Banner if 'countdown' layout */}
          {activeLayout === 'countdown' && (
            <div className="bg-[#b8955a] text-white p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3">
                <Clock size={20} className="animate-pulse" />
                <span className="font-bold text-sm tracking-wider uppercase">
                  Special Studio Event: Bespoke Commission Reservation
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono font-bold bg-black/20 px-4 py-2 rounded">
                <span>02 DAYS</span> : <span>14 HOURS</span> : <span>48 MINS</span> : <span>12 SECS</span>
              </div>
            </div>
          )}

          {/* Main Product Showcase Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-white p-6 sm:p-12 border border-[#e8e4df] rounded-sm shadow-sm">
            {/* Gallery Column: Layout Variants */}
            <div className="space-y-4">
              {/* Full Scroll Layout */}
              {activeLayout === 'scroll' ? (
                <div className="space-y-4 max-h-[850px] overflow-y-auto pr-2">
                  {[product.primaryImage, product.secondaryImage, '/images/ladiya-gallery/interior-08.jpg', '/images/ladiya-gallery/interior-10.jpg'].map((img, idx) => (
                    <div key={idx} className="relative aspect-square w-full rounded-sm overflow-hidden bg-stone-100 border border-stone-200">
                      <Image src={img} alt={`Angle ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : activeLayout === 'grid' ? (
                /* 2x2 Grid Layout */
                <div className="grid grid-cols-2 gap-3">
                  {[product.primaryImage, product.secondaryImage, '/images/ladiya-gallery/interior-08.jpg', '/images/ladiya-gallery/interior-10.jpg'].map((img, idx) => (
                    <div key={idx} className="relative aspect-square w-full rounded-sm overflow-hidden bg-stone-100 border border-stone-200">
                      <Image src={img} alt={`Grid ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                /* Classic / Left / Video Layout */
                <div className="space-y-4">
                  <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-[#fdfcfb] border border-stone-200 shadow-sm">
                    <Image
                      src={activeImage}
                      alt={product.title}
                      fill
                      priority
                      className="object-cover transition-all duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase bg-[#1f1f1f] text-[#b8955a] shadow-sm">
                          {product.badge}
                        </span>
                      </div>
                    )}
                    {activeLayout === 'video' && (
                      <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#b8955a] transition-all duration-300 shadow-xl cursor-pointer">
                        <Play size={24} className="ml-1" />
                      </button>
                    )}
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-1 max-w-full select-none">
                    {[product.primaryImage, product.secondaryImage, '/images/ladiya-gallery/interior-08.jpg'].map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-24 h-24 rounded border-2 overflow-hidden cursor-pointer transition-all ${
                          activeImage === img ? 'border-[#b8955a] shadow-md' : 'border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <Image src={img} alt="Thumbnail" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Purchasing Configuration Column */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold">
                    {product.category} &bull; {product.sku}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#108474]">
                    <Check size={14} /> In Stock &bull; Ships in 24 Hours
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f] leading-tight">
                  {product.title}
                </h1>

                <div className="flex items-center gap-3">
                  <div className="flex text-[#b8955a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#b8955a]" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-light">
                    {product.rating} ({product.reviewsCount} Patron Reviews)
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-4 text-3xl font-bold text-[#1f1f1f] border-y border-[#e8e4df] py-4">
                <span>{currencySymbol}{formattedPrice}</span>
                {formattedComparePrice && (
                  <span className="text-lg text-stone-400 line-through font-normal">
                    {currencySymbol}{formattedComparePrice}
                  </span>
                )}
                <span className="text-xs text-[#108474] font-medium ml-auto">
                  Complimentary Insured Shipping Included
                </span>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                {product.description}
              </p>

              {/* Metal Finishing */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-800 flex justify-between">
                  <span>Material: <span className="text-[#b8955a]">{selectedMetal}</span></span>
                  <span className="text-stone-400 font-normal">RJSC Certified Recycled</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.metals.map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setSelectedMetal(metal)}
                      className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase border transition-all cursor-pointer ${
                        selectedMetal === metal
                          ? 'border-[#1f1f1f] bg-[#1f1f1f] text-white shadow-sm'
                          : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spatial Dimension / Sizing */}
              {product.category === 'Living Architecture' && (
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-800 flex justify-between">
                    <span>Spatial Scale: <span className="text-[#b8955a]">{selectedSize}</span></span>
                    <button className="text-[11px] text-[#b8955a] hover:underline cursor-pointer">
                      Architectural Sizing &amp; Spatial Guide
                    </button>
                  </label>
                  <div className="flex gap-2">
                    {['180cm', '220cm', '260cm', '300cm', 'Custom'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 h-11 text-xs font-semibold border flex items-center justify-center transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'border-[#1f1f1f] bg-[#1f1f1f] text-white'
                            : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Upsell Bundle Box if 'upsell' layout */}
              {activeLayout === 'upsell' && (
                <div className="p-4 bg-[#fcfaf7] border border-[#b8955a]/40 rounded space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#b8955a] uppercase tracking-wider">
                    <Percent size={14} />
                    <span>Frequently Bought Together (Save 15%)</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-stone-700">
                    <div className="relative w-14 h-14 rounded border border-stone-300 overflow-hidden shrink-0">
                      <Image src={product.primaryImage} alt={product.title} fill className="object-cover" />
                    </div>
                    <span>+</span>
                    <div className="relative w-14 h-14 rounded border border-stone-300 overflow-hidden shrink-0">
                      <Image src="/images/ladiya-gallery/interior-02.jpg" alt="Matching Luminaire" fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="block font-bold text-sm text-[#1f1f1f]">$1,850.00</span>
                      <button className="mt-1 px-3 py-1 bg-[#b8955a] text-white text-[11px] font-bold rounded uppercase">
                        Add Bundle
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center border border-stone-300 bg-stone-50">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-3.5 text-stone-600 hover:text-black cursor-pointer font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-bold text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-3.5 text-stone-600 hover:text-black cursor-pointer font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product, quantity, selectedMetal)}
                  className="flex-1 py-4 bg-[#1f1f1f] hover:bg-[#b8955a] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={18} />
                  <span>Add To Shopping Bag</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3.5 border border-stone-300 rounded-none transition-colors ${
                    wishlisted ? 'text-[#b8955a] border-[#b8955a]' : 'text-stone-500 hover:text-[#b8955a]'
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <Heart size={20} className={wishlisted ? 'fill-[#b8955a]' : ''} />
                </button>
              </div>

              {/* Guarantee */}
              <div className="p-4 bg-[#fcfaf7] border border-[#e8e4df] grid grid-cols-3 gap-2 text-center text-[11px] text-stone-600">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck size={18} className="text-[#b8955a]" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-stone-300">
                  <Truck size={18} className="text-[#b8955a]" />
                  <span>Insured Door Courier</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw size={18} className="text-[#b8955a]" />
                  <span>30-Day Returns</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t border-[#e8e4df] divide-y divide-[#e8e4df] text-xs">
                <div className="py-3">
                  <button
                    onClick={() => toggleTab('materials')}
                    className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#1f1f1f] py-1 cursor-pointer"
                  >
                    <span>Tectonic Materials &amp; Architectural Specifications</span>
                    {openTab === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openTab === 'materials' && (
                    <div className="pt-3 pb-2 space-y-2 text-stone-600 font-light leading-relaxed">
                      <ul className="list-disc pl-4 space-y-1">
                        {product.materials.map((m, idx) => (
                          <li key={idx}>{m}</li>
                        ))}
                        <li>Sustainably quarried natural stone &amp; FSC-certified European hardwoods.</li>
                        <li>Engineered to sub-millimeter architectural tolerances with concealed structural fasteners.</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="py-3">
                  <button
                    onClick={() => toggleTab('shipping')}
                    className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#1f1f1f] py-1 cursor-pointer"
                  >
                    <span>White-Glove Architectural Delivery &amp; Installation</span>
                    {openTab === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openTab === 'shipping' && (
                    <div className="pt-3 pb-2 space-y-2 text-stone-600 font-light leading-relaxed">
                      <p>
                        Custom-crated with full architectural CAD elevation blueprints and an official Ladiya Interior Certificate of Provenance. Delivered with white-glove inside placement and debris removal.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Creations */}
          {relatedProducts.length > 0 && (
            <div className="space-y-8 pt-8">
              <div className="border-b border-[#e8e4df] pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold">
                  Complete Your Suite
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
                  Complementary Spatial Works
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
