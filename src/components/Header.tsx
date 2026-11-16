'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CATEGORIES } from '@/data/products';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { cartCount, wishlist, openCart, currency, setCurrency } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Announcement Top Bar */}
      <div className="bg-[#22201D] text-[#F8F6F4] text-xs py-2 px-4 border-b border-[#353330]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-stone-300">
            <ShieldCheck size={14} className="text-[#D8AD6E]" />
            <span>White-Glove Architectural Delivery &amp; Precision Installation</span>
          </div>

          <div className="text-center flex-1 sm:flex-initial tracking-widest uppercase font-medium text-[11px]">
            Use Code <span className="text-[#D8AD6E] font-semibold">LADIYA20</span> For 20% Off Your First Architectural Consultation
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR' | 'GBP')}
              aria-label="Currency Selector"
              className="bg-transparent text-stone-200 border-none text-[11px] font-medium tracking-wider focus:outline-none cursor-pointer"
            >
              <option value="USD" className="bg-[#22201D]">USD ($)</option>
              <option value="EUR" className="bg-[#22201D]">EUR (€)</option>
              <option value="GBP" className="bg-[#22201D]">GBP (£)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#F8F6F4]/95 backdrop-blur-md border-[#E8E4DF] shadow-sm py-3'
            : 'bg-[#F8F6F4] border-[#E8E4DF] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#22201D] hover:text-[#D8AD6E] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.15em] uppercase text-[#22201D]">
            <Link href="/" className="hover:text-[#D8AD6E] transition-colors relative group py-1">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8AD6E] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div
              className="relative py-1 cursor-pointer group"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-[#D8AD6E] transition-colors">
                <span>Collections</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180 text-stone-500" />
              </div>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-20 w-[780px] bg-white border border-[#E8E4DF] shadow-xl p-8 rounded-sm grid grid-cols-4 gap-6 animate-fadeIn z-50">
                  <div className="col-span-1 space-y-3">
                    <h4 className="text-xs font-semibold text-[#B8955A] tracking-widest uppercase border-b border-stone-200 pb-2">
                      Spatial Categories
                    </h4>
                    <ul className="space-y-2 text-xs normal-case text-stone-600">
                      <li><Link href="/collections/all" className="hover:text-[#D8AD6E] transition-colors">All Spatial Architecture</Link></li>
                      <li><Link href="/collections/all?category=Living Architecture" className="hover:text-[#D8AD6E] transition-colors">Living &amp; Lounge Architecture</Link></li>
                      <li><Link href="/collections/all?category=Spatial Lighting" className="hover:text-[#D8AD6E] transition-colors">Architectural Lighting &amp; Fixtures</Link></li>
                      <li><Link href="/collections/all?category=Dining & Millwork" className="hover:text-[#D8AD6E] transition-colors">Dining &amp; Spatial Millwork</Link></li>
                      <li><Link href="/collections/all?category=Acoustic & Surfaces" className="hover:text-[#D8AD6E] transition-colors">Acoustic Paneling &amp; Wall Systems</Link></li>
                    </ul>
                  </div>

                  <div className="col-span-1 space-y-3">
                    <h4 className="text-xs font-semibold text-[#B8955A] tracking-widest uppercase border-b border-stone-200 pb-2">
                      Curated Suites
                    </h4>
                    <ul className="space-y-2 text-xs normal-case text-stone-600">
                      <li><Link href="/collections/all?filter=bestseller" className="hover:text-[#D8AD6E] transition-colors">Best Sellers</Link></li>
                      <li><Link href="/collections/all?filter=new" className="hover:text-[#D8AD6E] transition-colors">New Projects 2026</Link></li>
                      <li><Link href="/collections/all?category=Penthouse Suites" className="hover:text-[#D8AD6E] transition-colors">Penthouse Suites</Link></li>
                      <li><Link href="/about" className="hover:text-[#D8AD6E] transition-colors">Studio Craftsmanship</Link></li>
                    </ul>
                  </div>

                  <div className="col-span-2 relative h-48 rounded overflow-hidden bg-stone-100 group/img">
                    <Image
                      src="/images/ladiya-gallery/interior-08.jpg"
                      alt="Ladiya Interior Architectural Living Space"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-[#D8AD6E] font-semibold">Residential Signature</span>
                      <h5 className="font-serif-luxury text-base font-semibold">The Penthouse Spatial Suite</h5>
                      <span className="text-xs text-stone-200 underline mt-1">Explore Architectural Works &rarr;</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/collections/all?category=Living Architecture" className="hover:text-[#D8AD6E] transition-colors relative group py-1">
              Living
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8AD6E] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/collections/all?category=Spatial Lighting" className="hover:text-[#D8AD6E] transition-colors relative group py-1">
              Lighting
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8AD6E] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/about" className="hover:text-[#D8AD6E] transition-colors relative group py-1">
              Our Studio
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8AD6E] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/blog" className="hover:text-[#D8AD6E] transition-colors relative group py-1">
              Journal
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8AD6E] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/contact" className="hover:text-[#D8AD6E] transition-colors relative group py-1">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8AD6E] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Center Brand Identity Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="group flex flex-col items-center">
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.25em] font-medium text-[#22201D] group-hover:text-[#D8AD6E] transition-colors">
                LADIYA
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#707072] -mt-1 font-sans">
                Interior Architecture
              </span>
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 text-[#22201D]">
            <Link
              href="/collections/all"
              className="p-1 hover:text-[#D8AD6E] transition-colors"
              title="Search Collections"
            >
              <Search size={20} strokeWidth={1.75} />
            </Link>

            <Link
              href="/collections/all?view=wishlist"
              className="p-1 hover:text-[#D8AD6E] transition-colors relative"
              title="Saved Wishlist"
            >
              <Heart size={20} strokeWidth={1.75} className={wishlist.length > 0 ? "fill-[#D8AD6E] text-[#D8AD6E]" : ""} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#22201D] text-[#F8F6F4] text-[9px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="p-1 hover:text-[#D8AD6E] transition-colors relative flex items-center gap-2 cursor-pointer"
              title="Shopping Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#D8AD6E] text-[#22201D] text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#F8F6F4] p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DF]">
                <span className="font-serif-luxury text-xl tracking-widest font-semibold text-[#22201D]">
                  LADIYA
                </span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-stone-600">
                  <X size={22} />
                </button>
              </div>

              <div className="py-6 space-y-4 text-sm font-medium tracking-wider uppercase text-[#22201D]">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#D8AD6E]">
                  Home
                </Link>
                <Link href="/collections/all" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#D8AD6E]">
                  All Spatial Architecture
                </Link>
                <Link href="/collections/all?category=Living Architecture" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#D8AD6E]">
                  Living &amp; Lounge
                </Link>
                <Link href="/collections/all?category=Spatial Lighting" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#D8AD6E]">
                  Spatial Lighting
                </Link>
                <Link href="/collections/all?category=Dining & Millwork" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#D8AD6E]">
                  Dining &amp; Millwork
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#D8AD6E]">
                  Our Studio
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E4DF] text-xs text-stone-500 space-y-1.5">
              <p className="font-semibold text-stone-800">Gulshan &amp; Banani Studios &bull; Dhaka</p>
              <p>Hotline &amp; WhatsApp: <a href="https://wa.me/8801580506445" className="text-[#D8AD6E] font-medium">+880 1580-506445</a></p>
              <p>Inquiries: <a href="mailto:contact@ladiya-interior.com" className="text-stone-700 underline">contact@ladiya-interior.com</a></p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
