'use client';

import React from 'react';
import Image from 'next/image';

export const ShowcaseHero: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden select-none bg-[#f6f2ec] bg-cover bg-top bg-no-repeat md:bg-fixed h-[560px] sm:h-[660px] md:h-[760px] lg:h-[840px] xl:h-[920px] 2xl:h-[980px] z-10"
      style={{
        backgroundImage: "url('/images/ladiya-hero-official.jpg')",
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* 2. Original Full-Size Rotating Wheel: logo-scroll.png (300px, 10s infinite rotation) */}
      <div className="hidden md:block absolute top-[14%] sm:top-[15%] right-[16%] lg:right-[23%] z-20 pointer-events-none">
        <div className="relative w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[320px] xl:h-[320px] animate-spin-slow">
          <Image
            src="/images/logo-scroll.png"
            alt="Ladiya Interior Rotating Seal"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* 3. Hero Content: Headline & Sub-text Metric Counters */}
      <div className="absolute inset-0 z-10 max-w-[1710px] mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 lg:pt-44 pointer-events-none">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 pointer-events-auto">
          <h1 className="larger-headline">
            Creative <span className="text-infinity" data-text="Ladiya">Ladiya</span> <br />
            <span className="text-infinity" data-text="Interior">Interior</span> Design Studio
          </h1>

          {/* Subtext 3 Metric Counters */}
          <div className="sub-text-container">
            <div className="sub-text-item">
              5+
              <span>Home pages</span>
            </div>

            <div className="sub-text-item">
              9+
              <span>Interior Layouts</span>
            </div>

            <div className="sub-text-item">
              9+
              <span>Project Showcase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
