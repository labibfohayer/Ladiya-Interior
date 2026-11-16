import React from 'react';
import { Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { BRAND_SERVICES } from '@/data/products';

export const ServiceBadges: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={24} className="text-[#D8AD6E]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} className="text-[#D8AD6E]" />;
      case 'Truck':
        return <Truck size={24} className="text-[#D8AD6E]" />;
      case 'RotateCcw':
        return <RotateCcw size={24} className="text-[#D8AD6E]" />;
      default:
        return <Sparkles size={24} className="text-[#D8AD6E]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F8F6F4] border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="flex items-start gap-4 p-6 bg-white border border-[#E8E4DF] rounded-sm transition-all duration-300 hover:border-[#D8AD6E] hover:shadow-md group"
            >
              <div className="p-3 bg-[#F8F6F4] group-hover:bg-[#22201D] transition-colors rounded-none shrink-0">
                {getIcon(srv.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-base text-[#22201D] font-medium">
                  {srv.title}
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
