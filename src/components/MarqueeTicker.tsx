import React from 'react';

const TICKER_ITEMS = [
  '✦ BESPOKE SPATIAL INTERIOR ARCHITECTURE',
  '✦ MONOLITHIC ROMAN TRAVERTINE & NATURAL STONE',
  '✦ FSC-CERTIFIED EUROPEAN TIMBER MILLWORK',
  '✦ ARCHITECTURAL CIRCADIAN LIGHTING SYSTEMS',
  '✦ ACOUSTICALLY CALIBRATED LIVING SANCTUARIES',
  '✦ TURNKEY RESIDENTIAL & PENTHOUSE COMMISSIONS',
  '✦ LADIYA INTERIOR DESIGN STUDIO & GALLERY'
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#22201D] text-[#F8F6F4] py-3.5 overflow-hidden border-y border-[#3A3835]">
      <div className="animate-ticker flex items-center gap-12 whitespace-nowrap text-xs font-semibold tracking-[0.25em] uppercase text-[#D8AD6E]">
        {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
          <span key={idx} className="flex items-center gap-4">
            <span className="hover:text-white transition-colors">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
