'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full Residential Architecture & Interior Suite',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F6F4] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B8955A] font-semibold">
            Bespoke Architectural Commission
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-[#22201D] font-normal">
            Connect With Ladiya Interior
          </h1>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Whether commissioning a complete penthouse transformation, commercial spatial architecture, or bespoke furniture millwork, our principal architects and design directors are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white border border-[#E8E4DF] p-8 sm:p-14 rounded-sm shadow-sm">
          {/* Atelier Contact Details */}
          <div className="space-y-8 lg:border-r lg:border-[#E8E4DF] lg:pr-10">
            <div className="space-y-2">
              <h3 className="font-serif-luxury text-2xl text-[#22201D]">
                Ladiya Design Studio
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Private spatial consultations and material gallery appointments by advance reservation.
              </p>
            </div>

            <div className="space-y-5 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#D8AD6E] shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-semibold block text-[#22201D]">Gulshan Studio &amp; Experience Center</span>
                  <span>House 14, Road 11, Gulshan-1, Dhaka 1212, Bangladesh</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#D8AD6E] shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-semibold block text-[#22201D]">Banani Flagship Atelier &amp; Showroom</span>
                  <span>House 42, Road 11, Block D, Banani, Dhaka 1213, Bangladesh</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#D8AD6E] shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-semibold block text-[#22201D]">Direct Studio Inquiries</span>
                  <a href="mailto:contact@ladiya-interior.com" className="hover:text-[#D8AD6E] underline">contact@ladiya-interior.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#D8AD6E] shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-semibold block text-[#22201D]">Direct Hotline &amp; WhatsApp</span>
                  <a href="https://wa.me/8801580506445" target="_blank" rel="noopener noreferrer" className="hover:text-[#D8AD6E] font-medium block">
                    +880 1580-506445 (01580506445)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-[#D8AD6E] shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-semibold block text-[#22201D]">Consultation Hours</span>
                  <span>Saturday &ndash; Thursday: 10:00 &ndash; 20:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 lg:pl-6">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 bg-[#F8F6F4] rounded-sm">
                <div className="w-16 h-16 rounded-full bg-[#108474]/10 text-[#108474] flex items-center justify-center">
                  <Check size={32} />
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#22201D]">Commission Inquiry Transmitted</h3>
                <p className="text-xs text-stone-600 max-w-md font-light leading-relaxed">
                  Thank you, {formData.name}. Our principal design architect will review your project brief and contact you within 24 hours to schedule an initial spatial discovery session.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#22201D] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#D8AD6E] transition-colors"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Genevieve Laurent"
                      className="w-full px-4 py-3 bg-[#F8F6F4] border border-[#E8E4DF] text-xs text-[#22201D] focus:border-[#D8AD6E] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. laurent@residence.com"
                      className="w-full px-4 py-3 bg-[#F8F6F4] border border-[#E8E4DF] text-xs text-[#22201D] focus:border-[#D8AD6E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 212 555 0192"
                      className="w-full px-4 py-3 bg-[#F8F6F4] border border-[#E8E4DF] text-xs text-[#22201D] focus:border-[#D8AD6E] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">Commission Scope</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F6F4] border border-[#E8E4DF] text-xs text-[#22201D] focus:border-[#D8AD6E] focus:outline-none cursor-pointer"
                    >
                      <option>Full Residential Architecture &amp; Interior Suite</option>
                      <option>Luxury Penthouse Turnkey Renovation</option>
                      <option>Bespoke Millwork &amp; Custom Furniture Commission</option>
                      <option>Commercial &amp; Hospitality Spatial Design</option>
                      <option>Architectural Lighting &amp; Acoustic Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">Project Vision &amp; Spatial Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property location, approximate square footage, timeline, material preferences, and architectural vision..."
                    className="w-full px-4 py-3 bg-[#F8F6F4] border border-[#E8E4DF] text-xs text-[#22201D] focus:border-[#D8AD6E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-[#22201D] hover:bg-[#D8AD6E] text-white hover:text-[#22201D] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Transmit Commission Brief</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
