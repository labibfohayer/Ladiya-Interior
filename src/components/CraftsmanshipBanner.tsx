import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CraftsmanshipBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#E8E4DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column with Overlapping Cards */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-sm overflow-hidden bg-stone-100 shadow-xl">
              <Image
                src="/images/ladiya-gallery/interior-19.jpg"
                alt="Ladiya Interior Architectural Design Studio"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Luxury Quality Seal Card */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 bg-[#22201D] text-white p-6 rounded-sm shadow-2xl max-w-xs border border-[#3A3835] space-y-3">
              <div className="flex items-center gap-2 text-[#D8AD6E]">
                <Sparkles size={18} />
                <span className="text-[11px] font-bold tracking-widest uppercase">The Ladiya Seal</span>
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Every timber joint, stone edge chamfer, and luminaire assembly undergoes rigorous engineering audits before commissioning.
              </p>
              <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-stone-400">
                <span>Architectural Craft</span>
                <span className="text-[#D8AD6E] font-semibold">FSC Oak &amp; Travertine</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy Column */}
          <div className="space-y-8 lg:pl-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
                Architectural Craft &amp; Spatial Heritage
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#22201D] font-normal leading-[1.15]">
                Bespoke Interior Architecture Designed for Generational Living
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              At Ladiya Interior, spatial architecture transcends surface decoration—it is the deliberate harmony of volume, material tectonics, and natural light designed to elevate everyday life. Our studio pairs master European woodworking and stonemasonry with forward-thinking architectural engineering.
            </p>

            {/* Checklist of Principles */}
            <div className="space-y-3 pt-2">
              {[
                'Sustainably Quarried Natural Stone & FSC-Certified European White Oak',
                'Sub-millimeter Architectural Tolerances & Concealed Precision Joinery',
                'Integrated Circadian Luminaire Systems & Calibrated Spatial Acoustics',
                'Each Project Includes Complete Technical CAD Blueprints & Material Provenance Documentation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#D8AD6E] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D8AD6E] hover:bg-[#b8955a] text-[#22201D] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>Explore Our Design Studio</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
