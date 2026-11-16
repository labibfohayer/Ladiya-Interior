'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export const TestimonialCarousel: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx(i => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIdx(i => (i + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIdx];

  return (
    <section className="py-20 sm:py-28 bg-[#22201D] text-white relative overflow-hidden">
      {/* Decorative Luxury Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none font-serif-luxury text-[140px] sm:text-[260px] font-bold tracking-widest text-[#D8AD6E] select-none">
        LADIYA
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D8AD6E] font-semibold">
            Testimonials &amp; Commissions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-100 font-normal">
            Voices of Our Patrons &amp; Collaborators
          </h2>
        </div>

        {/* Quote Icon */}
        <div className="flex justify-center text-[#D8AD6E]">
          <Quote size={40} className="rotate-180 opacity-80" />
        </div>

        {/* Testimonial Quote */}
        <div className="min-h-[140px] flex items-center justify-center">
          <p className="font-serif-luxury text-lg sm:text-2xl text-stone-200 font-light italic leading-relaxed max-w-2xl">
            {item.text}
          </p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 text-[#D8AD6E]">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#D8AD6E]" />
          ))}
        </div>

        {/* Author Details */}
        <div className="space-y-1">
          <h4 className="text-base font-semibold tracking-wider text-stone-100">
            {item.author}
          </h4>
          <p className="text-xs text-stone-400">
            {item.location} &bull; <span className="text-[#D8AD6E]">Verified Buyer ({item.product})</span>
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            onClick={prev}
            aria-label="Previous Review"
            className="w-10 h-10 rounded-full border border-stone-700 bg-white/5 hover:bg-[#D8AD6E] hover:text-[#22201D] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all rounded-full cursor-pointer ${
                  i === currentIdx ? 'w-6 bg-[#D8AD6E]' : 'w-2 bg-stone-700'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next Review"
            className="w-10 h-10 rounded-full border border-stone-700 bg-white/5 hover:bg-[#D8AD6E] hover:text-[#22201D] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
