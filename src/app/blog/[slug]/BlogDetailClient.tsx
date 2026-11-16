'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ChevronRight, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />

      <main className="py-12 sm:py-20 bg-[#fcfaf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
            <Link href="/" className="hover:text-[#b8955a]">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#b8955a]">Journal</Link>
            <ChevronRight size={12} />
            <span className="text-stone-800 font-medium">Article Details</span>
          </div>

          {/* Article Header */}
          <div className="space-y-4 text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b8955a] font-semibold">
              Spatial Philosophy &amp; Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1f1f1f] leading-tight">
              The Philosophy of Spatial Minimalism: Modern Architecture for Living Well
            </h1>
            <div className="flex items-center justify-center gap-6 text-xs text-stone-500 font-light pt-2">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> November 12, 2026</span>
              <span className="flex items-center gap-1.5"><User size={14} /> David Sterling, Principal Architect</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden shadow-lg border border-stone-200">
            <Image
              src="/images/ladiya-gallery/interior-24.jpg"
              alt="Ladiya Interior Architectural Living Space"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body Content */}
          <div className="bg-white border border-[#e8e4df] p-8 sm:p-14 rounded-sm shadow-sm space-y-6 text-stone-700 font-light leading-relaxed text-base sm:text-lg">
            <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#b8955a] first-letter:mr-3 first-letter:float-left">
              When entering an architectural space designed with deliberate spatial restraint, the mind undergoes an immediate deceleration. In contemporary interior architecture, luxury is no longer defined by decorative excess or ostentatious ornamentation; rather, it is measured by volume, proportional serenity, and the honest expression of tectonic materials.
            </p>

            <h2 className="text-2xl font-bold text-[#1f1f1f] pt-4">
              1. Spatial Proportions: The Architecture of Breathing Room
            </h2>
            <p>
              True spatial minimalism demands higher discipline than decoration. Without layered embellishments to mask errors, every shadow gap, baseboard reveal, and ceiling datum line must align to absolute millimeter precision. By harmonizing window sightlines with monolithic stone plinths and low-profile furnishings, the architecture creates uninterrupted sight paths that invite natural daylight deep into the interior core.
            </p>

            <blockquote className="p-6 bg-[#fcfaf7] border-l-4 border-[#b8955a] italic text-stone-800 text-lg">
              &ldquo;Architecture is not the filling of a void, but the intentional curation of empty space so that light, air, and human thought may circulate unhindered.&rdquo;
            </blockquote>

            <h2 className="text-2xl font-bold text-[#1f1f1f] pt-4">
              2. Tectonic Materiality &amp; Acoustic Serenity
            </h2>
            <p>
              At Ladiya Interior, our material palette is deliberately anchored in raw permanence: hand-quarried Roman travertine, rift-sawn European white oak, and patinated architectural bronze. Complementing these mass elements are integrated micro-perforated acoustic panels and concealed circadian lighting fixtures. The result is an environment that feels profoundly grounded, acoustically calm, and enduringly timeless across generations.
            </p>

            <div className="pt-8 border-t border-[#e8e4df] flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1f1f1f] hover:text-[#b8955a] transition-colors"
              >
                <ArrowLeft size={16} /> Back to Journal
              </Link>
              <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold">
                <Share2 size={16} /> Share Article
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
