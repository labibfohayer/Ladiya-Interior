'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Key, Sparkles, Eye, ShieldCheck, Award } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: 'Bespoke Millwork & Custom Joinery',
    desc: 'Master artisans craft made-to-measure cabinetry, fluted wall paneling, and sculptural furnishings tailored precisely to your spatial dimensions.',
    icon: PenTool
  },
  {
    id: 2,
    title: 'Turnkey Architectural Execution',
    desc: 'Seamless end-to-end management from concept sketching and MEP engineering to precision fabrication and white-glove site delivery.',
    icon: Key
  },
  {
    id: 3,
    title: 'Noble Materials Curation',
    desc: 'Directly sourced Italian travertine, Calacatta marble, quartersawn European white oak, and patinated architectural brass.',
    icon: Sparkles
  },
  {
    id: 4,
    title: '3D Visualization & VR Walkthrough',
    desc: 'Ultra-high-definition photorealistic renderings and immersive virtual simulations before breaking ground, guaranteeing aesthetic certainty.',
    icon: Eye
  },
  {
    id: 5,
    title: 'Dedicated On-Site Supervision',
    desc: 'Rigorous project governance led by certified senior architects and structural engineers ensuring zero compromise on tolerances.',
    icon: ShieldCheck
  },
  {
    id: 6,
    title: 'Comprehensive Structural Warranty & Care',
    desc: 'Long-term structural warranties, bi-annual material maintenance checks, and dedicated client advisory for enduring spatial luxury.',
    icon: Award
  }
];

export const FeaturesIconGrid: React.FC = () => {
  return (
    <section id="page-featured" className="py-20 sm:py-28 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-2"
        >
          <h2 className="text-[32px] sm:text-[42px] font-medium text-[#2d2d2d] leading-[1.1]">
            Why Discerning Clients Choose <span className="text-infinity" data-text="Ladiya Interior">Ladiya Interior</span>
          </h2>
          <p className="text-[#777777] text-sm sm:text-[15px] font-light">
            Elevating private residences, penthouses, and executive suites across Dhaka with uncompromised architectural rigor and timeless aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                className="p-8 bg-[#fbf9f5] border border-[#e8e8e8] rounded-xl flex items-start gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#b8955a] group"
              >
                <div className="relative w-14 h-14 shrink-0 bg-[#b8955a]/10 text-[#b8955a] rounded-xl border border-[#b8955a]/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-[#b8955a] group-hover:text-white transition-all duration-300">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1f1f1f] group-hover:text-[#b8955a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
