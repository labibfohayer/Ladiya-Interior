'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist, openQuickView, currencySymbol, currencyRate } = useCart();
  const wishlisted = isInWishlist(product.id);

  const formattedPrice = (product.price * currencyRate).toFixed(2);
  const formattedComparePrice = product.compareAtPrice
    ? (product.compareAtPrice * currencyRate).toFixed(2)
    : null;

  return (
    <div
      className="group relative flex flex-col bg-white border border-[#E8E4DF] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#D8AD6E]/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.badge && (
          <span
            className={`px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] uppercase rounded-none shadow-sm ${
              product.badge === 'BEST SELLER'
                ? 'bg-[#22201D] text-[#D8AD6E]'
                : product.badge === 'HOT'
                ? 'bg-[#C25E34] text-white'
                : product.badge === 'SALE'
                ? 'bg-[#108474] text-white'
                : 'bg-[#B8955A] text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        aria-label="Toggle Wishlist"
        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200 flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 shadow-sm ${
          wishlisted ? 'text-[#D8AD6E]' : 'text-stone-500 hover:text-[#D8AD6E]'
        }`}
      >
        <Heart size={16} className={wishlisted ? 'fill-[#D8AD6E]' : ''} />
      </button>

      {/* Image Container with Hover Flip */}
      <Link href={`/products/${product.slug}`} className="relative aspect-square w-full bg-[#FDFCFB] overflow-hidden">
        {/* Primary Image */}
        <Image
          src={product.primaryImage}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Secondary Flip Image */}
        <Image
          src={product.secondaryImage}
          alt={`${product.title} alternate view`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Quick View Button on Hover */}
        <div
          className={`absolute bottom-3 inset-x-3 transition-all duration-300 hidden sm:flex items-center justify-center gap-2 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              openQuickView(product);
            }}
            className="w-full py-2.5 bg-white/95 hover:bg-white text-[#22201D] text-xs font-semibold tracking-widest uppercase border border-stone-300 shadow-md backdrop-blur-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Eye size={15} />
            <span>Quick View</span>
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-widest text-[#B8955A] font-semibold">
            {product.category}
          </span>

          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif-luxury text-base text-[#22201D] hover:text-[#D8AD6E] transition-colors font-medium line-clamp-1">
              {product.title}
            </h3>
          </Link>

          <p className="text-xs text-stone-500 line-clamp-1 font-light">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 pt-1">
            <div className="flex text-[#D8AD6E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#D8AD6E]" />
              ))}
            </div>
            <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-semibold text-[#22201D]">
              {currencySymbol}{formattedPrice}
            </span>
            {formattedComparePrice && (
              <span className="text-xs text-stone-400 line-through">
                {currencySymbol}{formattedComparePrice}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.title} to Cart`}
            className="p-2 sm:px-3 sm:py-2 bg-[#22201D] hover:bg-[#D8AD6E] text-white hover:text-[#22201D] rounded-none text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <ShoppingBag size={14} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
