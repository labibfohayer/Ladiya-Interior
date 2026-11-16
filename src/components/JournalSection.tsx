import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/products';

export const JournalSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F6F4] border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8E4DF] pb-6 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
              The Architecture Journal
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#22201D] font-normal">
              Essays &amp; Spatial Insights
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
            Spatial Architecture &bull; Tectonic Materiality &bull; Living Well
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white border border-[#E8E4DF] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#D8AD6E]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-stone-400 font-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#D8AD6E]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#D8AD6E]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl text-[#22201D] group-hover:text-[#D8AD6E] transition-colors font-medium leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#B8955A] group-hover:text-[#22201D] transition-colors flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
