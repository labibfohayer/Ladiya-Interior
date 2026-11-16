'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  {
    id: 1,
    title: 'Curated Architectural Lookbook',
    desc: 'Immerse your senses in our portfolio of minimalist residential sanctuaries, penthouses, and bespoke living concepts.',
    image: '/images/ladiya-gallery/interior-18.jpg',
    link: '/home-1#lookbook',
    bgColor: '#30251F',
    direction: 'fade-right'
  },
  {
    id: 2,
    title: 'About Ladiya Interior Studio',
    desc: 'Discover our studio heritage, master artisans, and uncompromising commitment to timeless spatial elegance.',
    image: '/images/ladiya-gallery/interior-19.jpg',
    link: '/about',
    bgColor: '#3E4035',
    direction: 'fade-left'
  },
  {
    id: 3,
    title: 'Seamless Spatial Navigation',
    desc: 'Explore refined architectural suites spanning bespoke millwork, sculptural lighting, and tailored environments.',
    image: '/images/ladiya-gallery/interior-10.jpg',
    link: '/home-1',
    bgColor: '#592E32',
    direction: 'fade-top'
  },
  {
    id: 4,
    title: 'Noble Material Provenance & Finishes',
    desc: 'Curated selections categorized by Italian travertine, fluted glass, European white oak, and patinated architectural brass.',
    image: '/images/ladiya-gallery/interior-08.jpg',
    link: '/collections/all?layout=left-sidebar',
    bgColor: '#252D3A',
    direction: 'fade-bottom'
  }
];

export const HighlightsSection: React.FC = () => {
  return (
    <section id="detail-featured" className="py-20 sm:py-28 bg-white border-t border-[#e8e8e8] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {HIGHLIGHTS.map((item, index) => {
            let initialMotion = { opacity: 0, x: 0, y: 0 };
            if (item.direction === 'fade-right') initialMotion = { opacity: 0, x: -70, y: 0 };
            else if (item.direction === 'fade-left') initialMotion = { opacity: 0, x: 70, y: 0 };
            else if (item.direction === 'fade-top') initialMotion = { opacity: 0, x: 0, y: -50 };
            else if (item.direction === 'fade-bottom') initialMotion = { opacity: 0, x: 0, y: 50 };

            const delay = (index % 2 + 1) * 0.1;

            return (
              <motion.div
                key={item.id}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <Link
                  href={item.link}
                  style={{ backgroundColor: item.bgColor }}
                  className="group rounded-[10px] p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 block h-full shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
                >
                  <div className="space-y-2 text-center max-w-md mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-300 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-black/20 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
