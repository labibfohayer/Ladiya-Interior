import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Shield, Heart, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#F8F6F4] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
            Our Architectural Heritage
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#22201D] font-normal leading-tight">
            Sculpting Enduring Spatial Harmony
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Ladiya Interior was established to redefine spatial luxury—creating residential sanctuaries, penthouses, and executive environments that harmonize tectonic discipline, organic materiality, and serene daylight.
          </p>
        </div>

        {/* Story Section 1: The Design Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-stone-100 shadow-xl border border-[#E8E4DF]">
            <Image
              src="/images/ladiya-gallery/interior-19.jpg"
              alt="Architects and Master Craftsmen at Ladiya Interior Studio"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B8955A] font-semibold">
              Spatial Tectonics & Materiality
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#22201D]">
              Preserving Master Craftsmanship in Contemporary Architecture
            </h2>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Every commission begins with rigorous volumetric modeling, sun-path studies, and acoustic planning before translating into custom architectural millwork, hand-honed European stones, and custom acoustic geometries.
            </p>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              We reject mass-produced catalog finishes in favor of solid architectural timber, monolithic Roman travertine, and patinated bronze, delivering spaces with acoustic richness, tactile authenticity, and generational permanence.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="bg-white border border-[#E8E4DF] p-8 sm:p-14 rounded-sm shadow-sm space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B8955A] font-semibold">
              Uncompromising Standards
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#22201D]">
              The Four Pillars of Ladiya Interior
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 p-4 bg-[#F8F6F4] rounded-sm">
              <Sparkles className="text-[#D8AD6E]" size={28} />
              <h4 className="font-serif-luxury text-lg font-medium text-[#22201D]">
                Tectonic Integrity
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Authentic, unadulterated materials: quarried Roman travertine, Spanish marble, and FSC-certified French white oak selected for natural grain poetry.
              </p>
            </div>

            <div className="space-y-3 p-4 bg-[#F8F6F4] rounded-sm">
              <Award className="text-[#D8AD6E]" size={28} />
              <h4 className="font-serif-luxury text-lg font-medium text-[#22201D]">
                Sustainable Materiality
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                By prioritizing zero-VOC organic finishes, locally sourced timbers, and low-embodied-carbon aggregates, we craft spaces that breathe with health.
              </p>
            </div>

            <div className="space-y-3 p-4 bg-[#F8F6F4] rounded-sm">
              <Shield className="text-[#D8AD6E]" size={28} />
              <h4 className="font-serif-luxury text-lg font-medium text-[#22201D]">
                Generational Longevity
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Every Ladiya Interior installation is engineered with millimeter-precise joinery and durable structural cores built to age gracefully across decades.
              </p>
            </div>

            <div className="space-y-3 p-4 bg-[#F8F6F4] rounded-sm">
              <Heart className="text-[#D8AD6E]" size={28} />
              <h4 className="font-serif-luxury text-lg font-medium text-[#22201D]">
                Acoustic & Biophilic Flow
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Engineered with fluted acoustic slat assemblies, integrated circadian lighting, and organic pathways that calm the nervous system.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-4">
          <h3 className="font-serif-luxury text-3xl text-[#22201D]">
            Commission Your Spatial Transformation with Ladiya Interior
          </h3>
          <p className="text-stone-500 text-sm font-light max-w-md mx-auto">
            Schedule an architectural design consultation or explore our curated portfolio of residential and commercial spaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collections/all"
              className="px-8 py-4 bg-[#22201D] hover:bg-[#D8AD6E] text-white hover:text-[#22201D] text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Explore Spatial Collections
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-[#22201D] text-[#22201D] hover:bg-stone-200 text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Book Design Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
