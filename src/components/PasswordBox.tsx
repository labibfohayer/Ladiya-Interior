'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export const PasswordBox: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('1');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="page-demo" className="relative z-20 py-16 sm:py-24 bg-[#ffffff] overflow-hidden shadow-sm">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Password Card: enters with fade-right (from left to right) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="border border-[#e8e8e8] rounded-xl p-8 sm:p-12 bg-white shadow-sm flex flex-col items-center text-center justify-center space-y-4"
          >
            <div className="relative w-14 h-14">
              <Image
                src="/images/com.png"
                alt="Ladiya Interior Key"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              Private Studio Portfolio Key:
            </h3>

            <p className="text-xs text-stone-500 max-w-xs text-center font-normal">
              Enter key to unlock confidential residential projects & bespoke millwork lookbooks.
            </p>

            <div className="w-full max-w-[200px] py-4 bg-[#fbf9f5] border border-[#e8e8e8] rounded-lg text-4xl font-extrabold text-[#b8955a] tracking-widest shadow-inner">
              1
            </div>

            <div className="pt-2">
              <button
                onClick={handleCopy}
                className="px-8 py-3.5 bg-transparent hover:bg-[#b8955a] text-[#b8955a] hover:text-white border-2 border-[#b8955a] text-sm font-bold tracking-wider uppercase rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Key Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Studio Key</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Screenshot Illustration Card: enters with fade-left (from right to left) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="border border-[#e8e8e8] rounded-xl overflow-hidden bg-white shadow-sm relative flex items-center justify-center min-h-[300px]"
          >
            <Image
              src="/images/ladiya-vip-pass.png"
              alt="Ladiya Interior Private Client & Architectural Portal"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
