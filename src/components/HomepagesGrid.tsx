'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HOMEPAGES = [
  {
    id: 1,
    title: 'Home 1 – Minimalist Living Pavilion',
    image: '/images/ladiya-gallery/interior-20.png',
    route: '/home-1',
    delay: 0.1
  },
  {
    id: 2,
    title: 'Home 2 – Tectonic Penthouse Suite',
    image: '/images/ladiya-gallery/interior-21.png',
    route: '/home-2',
    delay: 0.2
  },
  {
    id: 3,
    title: 'Home 3 – Architectural Sanctuary',
    image: '/images/ladiya-gallery/interior-22.png',
    route: '/home-3',
    delay: 0.3
  },
  {
    id: 4,
    title: 'Home 4 – Master Joinery & Millwork',
    image: '/images/ladiya-gallery/interior-23.png',
    route: '/home-4',
    delay: 0.4
  },
  {
    id: 5,
    title: 'Home 5 – Biophilic Stone & Light',
    image: '/images/ladiya-gallery/interior-05.jpg',
    route: '/home-5',
    delay: 0.4
  }
];

export const HomepagesGrid: React.FC = () => {
  return (
    <section id="page-home" className="py-20 sm:py-28 bg-[#ffffff] border-t border-[#e8e8e8] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Top */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-[32px] sm:text-[42px] font-medium text-[#2d2d2d] leading-[1.1]">
            5+ Curated <span className="text-infinity" data-text="Ladiya Interior">Ladiya Interior</span> Architectural Concepts
          </h2>
          <p className="text-[#777777] text-sm sm:text-[15px] font-light">
            Masterfully designed residential concepts tailored to the exacting aesthetic and spatial standards of discerning homeowners.
          </p>
        </motion.div>

        {/* 5 Cards in Exact 2-Column Grid Matching Original ApolloTheme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14 items-start">
          {HOMEPAGES.map((home) => (
            <motion.div
              key={home.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: home.delay, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="group flex flex-col items-center text-center w-full"
            >
              {/* Original .image-bg container with exact 10px rounded corners & shadow */}
              <div className="relative w-full rounded-[10px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] group-hover:-translate-y-2 bg-[#ffffff]">
                <Image
                  src={home.image}
                  alt={home.title}
                  width={1080}
                  height={923}
                  className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                  priority={home.id <= 2}
                />

                {/* Hover Dark Overlay & CTA Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                  <Link
                    href={home.route}
                    className="px-7 py-3 bg-[#b8955a] hover:bg-[#9e7a42] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Open Live Page</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Exact Original .text-heading style */}
              <h3 className="mt-5 mb-4 text-center">
                <Link
                  href={home.route}
                  className="text-[18px] font-normal text-[#1f1f1f] hover:text-[#b8955a] transition-colors capitalize inline-block"
                >
                  {home.title}
                </Link>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
