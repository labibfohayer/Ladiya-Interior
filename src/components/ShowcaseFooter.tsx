'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ShowcaseFooter: React.FC = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer
        className="footer-link relative w-full overflow-hidden text-center text-white py-24 sm:py-32 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 9, 8, 0.72), rgba(10, 9, 8, 0.85)), url('/images/ladiya-gallery/interior-05.jpg')",
          backgroundAttachment: 'fixed',
          backgroundColor: '#111',
        }}
      >
        <div className="max-w-[1430px] w-full mx-auto px-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#d8ad6e] font-semibold block">
              Bespoke Residential &amp; Commercial Architectural Studio
            </span>
            <h2 className="text-footer font-medium text-white capitalize leading-[1.25] text-[26px] sm:text-[34px] md:text-[44px] tracking-normal md:tracking-[4px] lg:tracking-[6px] mb-0 max-w-5xl mx-auto">
              Transform Your Living Architecture With{' '}
              <span className="text-infinity" data-text="Ladiya Interior">
                Ladiya Interior
              </span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
              From bespoke master villas to luxury penthouses across Gulshan, Banani, and Dhaka—our architectural atelier turns discerning visions into generational spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full max-w-lg mx-auto"
          >
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#b8955a] hover:bg-[#a07f46] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Book Studio Consultation
            </a>
            <a
              href="tel:+8801580506445"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 text-center"
            >
              Atelier Hotline: 01580506445
            </a>
          </motion.div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackTop && (
          <motion.div
            id="back-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed right-[30px] sm:right-[50px] bottom-[20px] z-[99]"
          >
            <button
              onClick={scrollToTop}
              title="Top"
              aria-label="Back to top"
              className="w-[45px] h-[45px] bg-[#2a2a2a] hover:bg-[#666666] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
            >
              <ArrowUp size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
