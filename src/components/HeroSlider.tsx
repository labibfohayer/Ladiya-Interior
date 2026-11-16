'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: 'ARCHITECTURAL RESIDENCES 2026',
    title: 'Bespoke Spatial Interior Architecture',
    subtitle: 'Designed with monolithic Roman stone, precision European timber millwork, and refined circadian lighting.',
    image: '/images/ladiya-gallery/interior-05.jpg',
    primaryCta: { label: 'Explore Living Spaces', href: '/collections/all?category=Living Architecture' },
    secondaryCta: { label: 'Our Design Studio', href: '/about' }
  },
  {
    id: 2,
    tag: 'THE TECTONIC SUITE',
    title: 'Enduring Spatial Harmony for Modern Living',
    subtitle: 'Seamlessly integrating natural travertine plinths, fluted oak paneling, and acoustic serenity into modern homes.',
    image: '/images/ladiya-gallery/interior-10.jpg',
    primaryCta: { label: 'View Spatial Portfolio', href: '/collections/all?filter=new' },
    secondaryCta: { label: 'Spatial Lighting', href: '/collections/all?category=Spatial Lighting' }
  },
  {
    id: 3,
    tag: 'PENTHOUSE ARCHIVE',
    title: 'Curated Residential & Penthouse Commissions',
    subtitle: 'Turnkey architectural transformations that balance spatial discipline, organic textures, and peaceful everyday elegance.',
    image: '/images/ladiya-gallery/interior-13.jpg',
    primaryCta: { label: 'Explore Penthouse Suites', href: '/collections/all?category=Penthouse Suites' },
    secondaryCta: { label: 'Studio Philosophy', href: '/about' }
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[620px] sm:h-[720px] lg:h-[800px] bg-[#22201D] overflow-hidden">
      {/* Background Images with Crossfade */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
          {/* Subtle Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <div className="max-w-2xl text-white space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D8AD6E] text-xs tracking-[0.25em] uppercase font-semibold">
            <Sparkles size={13} className="text-[#D8AD6E]" />
            <span>{slide.tag}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-stone-100">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed">
            {slide.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={slide.primaryCta.href}
              className="px-8 py-4 bg-[#D8AD6E] hover:bg-[#b8955a] text-[#22201D] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm"
            >
              {slide.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full border border-white/30 bg-black/30 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full border border-white/30 bg-black/30 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Jump to slide ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-[#D8AD6E]' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
