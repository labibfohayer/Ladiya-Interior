import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/products';

export const CategoryCircles: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F6F4] border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
            Tectonic Silhouettes
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#22201D] font-normal">
            Explore By Architectural Category
          </h2>
          <p className="text-stone-500 text-sm font-light leading-relaxed">
            From bespoke architectural millwork to hand-sculpted travertine and circadian lighting systems, discover curated spatial elements designed for enduring harmony.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/collections/all?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#E8E4DF] group-hover:border-[#D8AD6E] transition-all duration-500 p-1.5 shadow-sm group-hover:shadow-lg bg-white">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div>
                <h3 className="font-serif-luxury text-lg text-[#22201D] group-hover:text-[#D8AD6E] transition-colors font-medium">
                  {cat.name}
                </h3>
                <span className="text-xs text-stone-400 tracking-wider font-light">
                  {cat.count} Distinct Pieces
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
