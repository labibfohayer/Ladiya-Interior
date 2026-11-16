'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PRODUCT_LAYOUTS = [
  { id: 1, title: 'Product Classic', image: '/images/ladiya-pro-class.png', layout: 'classic', slug: 'monolithic-fluted-brass-chandelier' },
  { id: 2, title: 'Product Full Scroll Fixed', image: '/images/ladiya-pro-scroll.png', layout: 'scroll', slug: 'monolithic-roman-travertine-coffee-table' },
  { id: 3, title: 'Product Left', image: '/images/ladiya-pro-left.png', layout: 'left', slug: 'minimalist-matte-black-linear-luminaire' },
  { id: 4, title: 'Product Right', image: '/images/ladiya-pro-right.png', layout: 'classic', slug: 'solid-white-oak-dining-table' },
  { id: 5, title: 'Product Without', image: '/images/ladiya-pro-without.png', layout: 'classic', slug: 'boucle-occasional-armchair' },
  { id: 6, title: 'Product Grid', image: '/images/ladiya-pro-grid.png', layout: 'grid', slug: 'architectural-acoustic-oak-wall-paneling' },
  { id: 7, title: 'Product detail Video', image: '/images/ladiya-pro-video.png', layout: 'video', slug: 'monolithic-fluted-brass-chandelier' },
  { id: 8, title: 'Product detail Upsell', image: '/images/ladiya-pro-upsell.png', layout: 'upsell', slug: 'sculptural-fluted-glass-droplet-pendant' },
  { id: 9, title: 'Product Countdown', image: '/images/ladiya-pro-countdown.png', layout: 'countdown', slug: 'monolithic-travertine-floor-luminaire' },
  { id: 10, title: 'Product coming', image: '/images/ladiya-coming-card.png', layout: 'classic', slug: 'fluted-limestone-pedestal-plinth' }
];

export const ProductLayoutsGrid: React.FC = () => {
  return (
    <section
      id="detail-product"
      className="py-24 sm:py-28 bg-[url('/images/land-pro.jpg')] bg-fixed bg-cover bg-center overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Top */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-[32px] sm:text-[42px] font-medium text-white leading-[1.1]">
            9+ Bespoke Spatial Layouts
          </h2>
          <p className="text-white/95 text-sm sm:text-[15px] font-light">
            <span className="text-infinity" data-text="Ladiya Interior">Ladiya Interior</span> Studio curates dedicated spatial presentation layouts engineered to highlight the distinct architectural character of your bespoke residential and commercial spaces.
          </p>
        </motion.div>

        {/* 3-Column Grid Matching Original ApolloTheme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 items-start">
          {PRODUCT_LAYOUTS.map((item, index) => {
            const delay = ((index % 3) + 1) * 0.1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group flex flex-col items-center text-center w-full"
              >
                {/* Original .img_detail card container with rounded-[10px] & shadow */}
                <div className="relative w-full rounded-[10px] overflow-hidden bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={960}
                    height={832}
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                    unoptimized
                  />
                  {/* Hover dark overlay & View Layout CTA */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Link
                      href={`/products/${item.slug}?layout=${item.layout}`}
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
                    href={`/products/${item.slug}?layout=${item.layout}`}
                    className="text-[18px] font-normal text-white hover:text-[#b8955a] transition-colors capitalize inline-block"
                  >
                    {item.title}
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
