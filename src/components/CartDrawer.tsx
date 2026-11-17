'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    currencySymbol,
    currencyRate
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 250 * currencyRate;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#F8F6F4] shadow-2xl flex flex-col justify-between border-l border-[#E8E4DF] animate-slideLeft">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E8E4DF] flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#22201D]">
              <ShoppingBag size={20} className="text-[#D8AD6E]" />
              <h2 className="font-serif-luxury text-xl font-medium tracking-wide">
                Your Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-stone-400 hover:text-[#22201D] transition-colors rounded-full"
              aria-label="Close Cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#F4E8D8]/60 p-4 border-b border-[#E8E4DF] text-xs space-y-2">
            <div className="flex items-center justify-between text-stone-700">
              <span className="font-medium">
                {remainingForFreeShipping > 0
                  ? `Add ${currencySymbol}${remainingForFreeShipping.toFixed(2)} more for Free Insured Courier`
                  : '🎉 You have unlocked Complimentary Worldwide Insured Delivery!'}
              </span>
              <span className="font-semibold text-[#D8AD6E]">{progressPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D8AD6E] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-stone-500">
                <div className="w-20 h-20 rounded-full bg-stone-200/60 flex items-center justify-center text-stone-400">
                  <ShoppingBag size={36} />
                </div>
                <h3 className="font-serif-luxury text-xl text-[#22201D]">Your Bag is Empty</h3>
                <p className="text-xs text-stone-500 max-w-xs font-light">
                  Explore our curated interior architecture portfolio and discover your next defining spatial piece.
                </p>
                <Link
                  href="/collections/all"
                  onClick={closeCart}
                  className="px-6 py-3 bg-[#22201D] text-white hover:bg-[#D8AD6E] hover:text-[#22201D] text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  Shop Best Sellers
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedMetal}`}
                  className="flex gap-4 p-4 bg-white border border-[#E8E4DF] rounded-sm shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 bg-stone-100 rounded-sm overflow-hidden shrink-0 border border-stone-200">
                    <Image
                      src={item.product.primaryImage}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif-luxury text-sm font-medium text-[#22201D] line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#B8955A] font-medium block">
                        {item.selectedMetal}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-stone-200 bg-stone-50 rounded-none">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-stone-500 hover:text-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-semibold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-500 hover:text-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#22201D]">
                        {currencySymbol}{(item.product.price * item.quantity * currencyRate).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E4DF] space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between text-base font-semibold text-[#22201D] pt-1 border-t border-stone-100">
                  <span>Estimated Total</span>
                  <span>{currencySymbol}{cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[11px] text-stone-400 text-right">Taxes & shipping calculated at checkout</p>
              </div>

              <button
                onClick={() => alert(`Proceeding to 256-bit Secure Checkout for ${currencySymbol}${cartTotal.toFixed(2)}`)}
                className="w-full py-4 bg-[#22201D] hover:bg-[#D8AD6E] text-white hover:text-[#22201D] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed To Checkout</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
                <ShieldCheck size={14} className="text-[#D8AD6E]" />
                <span>Guaranteed 256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
