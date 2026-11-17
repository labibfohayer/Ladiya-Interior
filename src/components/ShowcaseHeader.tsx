'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export const ShowcaseHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Transparent Showcase Header (Overlays the silk background) */}
      <header className="absolute top-0 inset-x-0 z-40 w-full transition-all">
        <div className="max-w-[1710px] mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
          {/* Logo: LADIYA INTERIOR */}
          <div className="flex items-center">
            <Link href="/" className="relative w-44 sm:w-56 h-14 block">
              <Image
                src="/images/ladiya-logo.svg"
                alt="Ladiya Interior"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-[16px] font-medium text-[#000000]">
            <Link href="#page-demo" className="hover:text-[#b8955a] transition-colors py-1">
              Home
            </Link>
            <Link href="#detail-product" className="hover:text-[#b8955a] transition-colors py-1">
              Product
            </Link>
            <Link href="#detail-collection" className="hover:text-[#b8955a] transition-colors py-1">
              Collection
            </Link>
            <Link href="#detail-featured" className="hover:text-[#b8955a] transition-colors py-1">
              Features
            </Link>
            <Link href="#detail-menu" className="hover:text-[#b8955a] transition-colors py-1">
              Other++
            </Link>
          </nav>

          {/* Subtle Circular Accent Dot */}
          <div className="hidden lg:flex items-center">
            <div className="w-7 h-7 rounded-full border border-[#d6c4a5] flex items-center justify-center opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b8955a]"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-stone-200 px-6 py-5 space-y-3 font-semibold text-sm shadow-xl animate-fadeIn">
            <Link href="#page-demo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-800 hover:text-[#b8955a] border-b border-stone-100">
              Home
            </Link>
            <Link href="#detail-product" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-800 hover:text-[#b8955a] border-b border-stone-100">
              Product
            </Link>
            <Link href="#detail-collection" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-800 hover:text-[#b8955a] border-b border-stone-100">
              Collection
            </Link>
            <Link href="#detail-featured" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-800 hover:text-[#b8955a] border-b border-stone-100">
              Features
            </Link>
            <Link href="#detail-menu" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-800 hover:text-[#b8955a]">
              Other++
            </Link>
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center bg-[#b8955a] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow"
              >
                Book Studio Consultation
              </Link>
              <a
                href="tel:+8801580506445"
                className="w-full py-2 text-center text-xs text-stone-600 hover:text-[#b8955a] font-medium"
              >
                Hotline: 01580506445
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
