'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const COLLECTION_LAYOUTS = [
  { id: 1, title: '1. Collection Left Sidebar', image: '/images/ladiya-collec-left.png', layout: 'left-sidebar' },
  { id: 2, title: '2. Collection Right Sidebar', image: '/images/ladiya-collec-right.png', layout: 'right-sidebar' },
  { id: 3, title: '3. Collection Top', image: '/images/ladiya-collec-top.png', layout: 'top-filter' },
  { id: 4, title: '4. All Collection', image: '/images/ladiya-collec-list.png', layout: 'left-sidebar' },
  { id: 5, title: '5. Collection Coupon', image: '/images/ladiya-collec-coupon.png', layout: 'coupon' },
  { id: 6, title: '6. Full width', image: '/images/ladiya-collec-full.png', layout: 'top-filter' },
  { id: 7, title: '7. Collection - 2 columns', image: '/images/ladiya-collec-2col.png', layout: '2-col' },
  { id: 8, title: '8. Collection - 3 columns', image: '/images/ladiya-collec-3col.png', layout: '3-col' },
  { id: 9, title: '9. Collection - 4 columns', image: '/images/ladiya-collec-4col.png', layout: '4-col' },
  { id: 10, title: 'Coming soon...', image: '/images/ladiya-coming-card.png', layout: 'left-sidebar' }
];

export const CollectionLayoutsGrid: React.FC = () => {
  return (
    <section id="detail-collection" className="py-24 sm:py-28 bg-[#efefef] border-t border-[#e0e0e0] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Top */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-[32px] sm:text-[42px] font-medium text-[#2d2d2d] leading-[1.1]">
            09+ Curated Design Collections
          </h2>
          <p className="text-[#777777] text-sm sm:text-[15px] font-light">
            <span className="text-infinity" data-text="Ladiya Interior">Ladiya Interior</span> spatial collections are showcased effectively across multiple architectural layouts, allowing clients and designers to effortlessly explore portfolio suites and bespoke interior options.
          </p>
        </motion.div>

        {/* 3-Column Grid with 10 Cards Matching Original ApolloTheme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 items-start">
          {COLLECTION_LAYOUTS.map((col, index) => {
            const delay = ((index % 3) + 1) * 0.1;
            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group flex flex-col items-center text-center w-full"
              >
                {/* Original .img_detail card container with rounded-[10px] & shadow */}
                <div className="relative w-full rounded-[10px] overflow-hidden bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] group-hover:-translate-y-2">
                  <Image
                    src={col.image}
                    alt={col.title}
                    width={960}
                    height={832}
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                    unoptimized
                  />
                  {/* Hover dark overlay & View Layout CTA */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Link
                      href={`/collections/all?layout=${col.layout}`}
                      className="px-5 py-2.5 bg-[#b8955a] hover:bg-[#9e7a42] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-lg flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Layout</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Original .text-heading style */}
                <h3 className="mt-5 mb-6 text-center">
                  <Link
                    href={`/collections/all?layout=${col.layout}`}
                    className="text-[18px] font-normal text-[#1f1f1f] hover:text-[#b8955a] transition-colors capitalize inline-block"
                  >
                    {col.title}
                  </Link>
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
