'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BLOG_LAYOUTS = [
  { id: 1, title: 'Blog - Standard', image: '/images/ladiya-blog-stand.png', link: '/blog', direction: 'left' },
  { id: 2, title: 'Blog - Grid', image: '/images/ladiya-blog-grid.png', link: '/blog', direction: 'right' },
  { id: 3, title: 'Blog - List', image: '/images/ladiya-blog-list.png', link: '/blog', direction: 'left' },
  { id: 4, title: 'Single Post', image: '/images/ladiya-blog-single.png', link: '/blog/spatial-minimalism-raw-materials', direction: 'right' }
];

export const BlogLayoutsSection: React.FC = () => {
  return (
    <section id="detail-blog" className="py-20 sm:py-28 bg-[#ffffff] border-t border-[#e8e8e8] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-[32px] sm:text-[42px] font-medium text-[#2d2d2d] leading-[1.1]">
            Architectural Journal &amp; Editorial Insights
          </h2>
          <p className="text-[#777777] text-sm sm:text-[15px] font-light">
            <span className="text-infinity" data-text="Ladiya Interior">Ladiya Interior</span> provides an editorial journal space to publish architectural essays, project case studies, and spatial design trends.
          </p>
        </motion.div>

        {/* 2-Column Grid Matching Original ApolloTheme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 items-start">
          {BLOG_LAYOUTS.map((blog) => {
            const isLeft = blog.direction === 'left';
            return (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: isLeft ? 0.1 : 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group flex flex-col items-center text-center w-full"
              >
                <div className="relative w-full rounded-[10px] overflow-hidden bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] group-hover:-translate-y-2">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={960}
                    height={832}
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                    unoptimized
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Link
                      href={blog.link}
                      className="px-6 py-2.5 bg-[#b8955a] hover:bg-[#9e7a42] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-lg transition-colors"
                    >
                      View Blog
                    </Link>
                  </div>
                </div>

                <h3 className="mt-5 mb-4 text-center">
                  <Link
                    href={blog.link}
                    className="text-[18px] font-normal text-[#1f1f1f] hover:text-[#b8955a] transition-colors capitalize inline-block"
                  >
                    {blog.title}
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
