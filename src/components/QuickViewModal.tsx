'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Star, ShoppingBag, Check, Shield, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, currencySymbol, currencyRate } = useCart();
  const [selectedMetal, setSelectedMetal] = useState<string>('');
  const [activeImage, setActiveImage] = useState<string>('');
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const currentMetal = selectedMetal || quickViewProduct.metals[0];
  const currentImg = activeImage || quickViewProduct.primaryImage;
  const formattedPrice = (quickViewProduct.price * currencyRate).toFixed(2);
  const formattedCompare = quickViewProduct.compareAtPrice
    ? (quickViewProduct.compareAtPrice * currencyRate).toFixed(2)
    : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={closeQuickView}
        />

        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-sm bg-white p-6 sm:p-10 text-left shadow-2xl transition-all border border-[#E8E4DF] z-10">
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Visual Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-stone-50 border border-stone-200">
                <Image
                  src={currentImg}
                  alt={quickViewProduct.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {[quickViewProduct.primaryImage, quickViewProduct.secondaryImage].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded border-2 overflow-hidden cursor-pointer ${
                      currentImg === img ? 'border-[#D8AD6E]' : 'border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
                    {quickViewProduct.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#108474]">
                    <Check size={13} /> In Stock &bull; Ready To Ship
                  </span>
                </div>

                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#22201D]">
                  {quickViewProduct.title}
                </h2>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#D8AD6E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D8AD6E]" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-light">
                    {quickViewProduct.rating} ({quickViewProduct.reviewsCount} verified reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 text-2xl font-semibold text-[#22201D] border-b border-stone-100 pb-4">
                <span>{currencySymbol}{formattedPrice}</span>
                {formattedCompare && (
                  <span className="text-base text-stone-400 line-through">
                    {currencySymbol}{formattedCompare}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Metal Finish Picker */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                  Material Finish: <span className="text-[#D8AD6E]">{currentMetal}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.metals.map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setSelectedMetal(metal)}
                      className={`px-3 py-2 text-xs font-medium border transition-all cursor-pointer ${
                        currentMetal === metal
                          ? 'border-[#22201D] bg-[#22201D] text-white shadow-sm'
                          : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA */}
              <div className="pt-2 flex items-center gap-4">
                <div className="flex items-center border border-stone-300">
                  <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="px-3 py-3 text-stone-600 hover:text-black cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-semibold text-stone-900">{qty}</span>
                  <button
                    onClick={() => setQty(q => q + 1)}
                    className="px-3 py-3 text-stone-600 hover:text-black cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(quickViewProduct, qty, currentMetal);
                    closeQuickView();
                  }}
                  className="flex-1 py-3.5 bg-[#D8AD6E] hover:bg-[#b8955a] text-[#22201D] font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag size={16} />
                  <span>Add To Bag</span>
                </button>
              </div>

              {/* View Full Page Link */}
              <div className="pt-2 text-center">
                <Link
                  href={`/products/${quickViewProduct.slug}`}
                  onClick={closeQuickView}
                  className="text-xs text-stone-500 hover:text-[#D8AD6E] underline inline-flex items-center gap-1"
                >
                  <span>View Full Product Specifications & Sizing Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
