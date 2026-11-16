import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Heart, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#22201D] text-[#F8F6F4] border-t border-[#3A3835]">
      {/* Top Value Assurance Ribbon */}
      <div className="border-b border-[#353330] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 text-stone-300">
            <Award className="text-[#D8AD6E] shrink-0" size={24} />
            <div className="text-xs">
              <span className="font-semibold block text-stone-100">FSC &amp; IAB Certified</span>
              <span className="text-stone-400">Sustainably Sourced European Timber</span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-stone-300">
            <ShieldCheck className="text-[#D8AD6E] shrink-0" size={24} />
            <div className="text-xs">
              <span className="font-semibold block text-stone-100">Lifetime Warranty</span>
              <span className="text-stone-400">Complimentary Atelier Care</span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-stone-300">
            <Lock className="text-[#D8AD6E] shrink-0" size={24} />
            <div className="text-xs">
              <span className="font-semibold block text-stone-100">256-Bit SSL Checkout</span>
              <span className="text-stone-400">Encrypted Private Banking</span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-stone-300">
            <Heart className="text-[#D8AD6E] shrink-0" size={24} />
            <div className="text-xs">
              <span className="font-semibold block text-stone-100">Complimentary Returns</span>
              <span className="text-stone-400">30 Days Insured Exchange</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-serif-luxury text-3xl tracking-[0.25em] font-medium text-white">
              LADIYA
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D8AD6E] block -mt-1 font-sans">
              Interior Architecture &bull; Studio
            </span>
          </Link>
          <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
            Architecting bespoke living environments, luxury penthouses, and commercial spaces. Grounded in tectonic materiality, European timber millwork, and refined spatial minimalism.
          </p>
          <div className="pt-2 text-xs text-stone-400 space-y-1.5">
            <p className="text-stone-300 font-medium">Gulshan &amp; Banani Studios &bull; Dhaka</p>
            <p>Hotline &amp; WhatsApp: <a href="https://wa.me/8801580506445" className="text-[#D8AD6E] font-medium">+880 1580-506445</a></p>
            <p>Direct Inquiries: <a href="mailto:contact@ladiya-interior.com" className="text-stone-300 underline">contact@ladiya-interior.com</a></p>
          </div>
        </div>

        {/* Shop Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-[#D8AD6E] tracking-[0.2em] uppercase">
            Collections
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400 font-light">
            <li><Link href="/collections/all" className="hover:text-white transition-colors">All Spatial Architecture</Link></li>
            <li><Link href="/collections/all?category=Living Architecture" className="hover:text-white transition-colors">Living &amp; Lounge</Link></li>
            <li><Link href="/collections/all?category=Spatial Lighting" className="hover:text-white transition-colors">Architectural Lighting</Link></li>
            <li><Link href="/collections/all?category=Dining & Millwork" className="hover:text-white transition-colors">Dining &amp; Millwork</Link></li>
            <li><Link href="/collections/all?category=Acoustic & Surfaces" className="hover:text-white transition-colors">Acoustic Wall Systems</Link></li>
            <li><Link href="/collections/all?filter=new" className="hover:text-white transition-colors">New Projects 2026</Link></li>
          </ul>
        </div>

        {/* Client Concierge */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-[#D8AD6E] tracking-[0.2em] uppercase">
            Studio Concierge
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400 font-light">
            <li><Link href="/about" className="hover:text-white transition-colors">The Studio Story</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Bespoke Design Consultations</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Spatial Planning &amp; Scale Guide</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Tectonic Stone Provenance</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">White-Glove Installation</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Turnkey Project Inquiries</Link></li>
          </ul>
        </div>

        {/* Maison Ethics */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-[#D8AD6E] tracking-[0.2em] uppercase">
            The Studio
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400 font-light">
            <li><Link href="/about" className="hover:text-white transition-colors">Sustainability &amp; Tectonics</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">FSC Timber &amp; Stone Ethics</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Architectural Journal &amp; Press</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Studio Locations</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Terms of Architectural Service</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Privacy Governance</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Sub-Footer */}
      <div className="border-t border-[#353330] py-6 text-center text-xs text-stone-500 font-light">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} LADIYA INTERIOR Studio Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-stone-400">
            <span>Verified Architectural Engineering</span>
            <span>&bull;</span>
            <span>Bespoke Spatial Craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
