'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, Check } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LOOKBOOK_IMAGES = [
  '/images/ladiya-gallery/interior-08.jpg',
  '/images/ladiya-gallery/interior-10.jpg',
  '/images/ladiya-gallery/interior-16.jpg',
  '/images/ladiya-gallery/interior-17.jpg',
  '/images/ladiya-gallery/interior-18.jpg',
  '/images/ladiya-gallery/interior-24.jpg'
];

export const InstagramGrid: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-white">
      {/* Newsletter Banner */}
      <div className="py-16 sm:py-20 bg-[#F4E8D8]/50 border-b border-[#E8E4DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
            The Architectural Circle
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#22201D] font-normal">
            Join Our Newsletter &amp; Enjoy 20% Privilege
          </h2>
          <p className="text-stone-600 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Receive curated previews of limited-run spatial suites, private exhibition invitations, and architectural essays from our principal designers.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="flex-1 px-5 py-3.5 sm:py-4 bg-white border border-[#E8E4DF] focus:border-[#D8AD6E] text-sm text-[#22201D] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 sm:py-4 bg-[#22201D] hover:bg-[#D8AD6E] text-white hover:text-[#22201D] text-xs font-semibold tracking-widest uppercase transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {subscribed ? (
                <>
                  <Check size={16} />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-[#108474] font-medium animate-fadeIn">
              ✓ Welcome to the Ladiya Architectural Circle. Your consultation voucher code is <strong>LADIYA20</strong>.
            </p>
          )}
        </div>
      </div>

      {/* Instagram Lookbook Row */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-1">
          <span className="text-xs tracking-[0.25em] uppercase text-stone-400 font-semibold flex items-center justify-center gap-2">
            <InstagramIcon size={15} className="text-[#D8AD6E]" />
            @LADIYA.INTERIOR ON INSTAGRAM
          </span>
          <h3 className="font-serif-luxury text-2xl text-[#22201D] font-normal">
            Follow Our Spatial Journey
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-2 max-w-[1600px] mx-auto">
          {LOOKBOOK_IMAGES.map((img, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-stone-100 block"
            >
              <Image
                src={img}
                alt={`Ladiya Interior Instagram Portfolio ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <InstagramIcon size={28} className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-[#D8AD6E]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
