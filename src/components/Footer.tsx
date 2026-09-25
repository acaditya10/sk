import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-espresso bg-espresso py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-cream/70 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-3">
          <div className="font-serif text-lg text-cream tracking-tight">
            SK INTERIOR DESIGN
          </div>
          <p className="text-xs text-cream/60 leading-relaxed">
            Turnkey luxury residential interiors and commercial architecture studio based in Mumbai. Precision German factory modular execution with a 10-year warranty.
          </p>
          <div className="text-[11px] text-cream/50">
            GST Registered · MSME Certified Studio
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cream mb-3">
            Navigation
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#portfolio" className="hover:text-clay-light transition-colors">
                Portfolio Showcase
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-clay-light transition-colors">
                Turnkey Services
              </a>
            </li>
            <li>
              <a href="#cost-calculator" className="hover:text-clay-light transition-colors">
                Turnkey Cost Estimator
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-clay-light transition-colors">
                45-Day Handover Process
              </a>
            </li>
            <li>
              <a href="#studio-contact" className="hover:text-clay-light transition-colors">
                Studio Location & Visit
              </a>
            </li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cream mb-3">
            Contact Channels
          </div>
          <ul className="space-y-2">
            <li>
              <a href={`tel:${BUSINESS_DATA.phone}`} className="flex items-center gap-1.5 hover:text-cream transition-colors">
                <Phone className="w-3.5 h-3.5 text-clay-light" />
                <span className="font-mono">{BUSINESS_DATA.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={BUSINESS_DATA.whatsappMessage("Hello SK Interior Design, I would like to consult with an architect.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                WhatsApp: +91 9082443145
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS_DATA.email}`} className="flex items-center gap-1.5 hover:text-cream transition-colors truncate">
                <Mail className="w-3.5 h-3.5 text-clay-light shrink-0" />
                <span className="truncate">{BUSINESS_DATA.email}</span>
              </a>
            </li>
            <li className="pt-1 text-cream/50">
              Hours: 9:30 AM – 8:30 PM (Daily)
            </li>
          </ul>
        </div>

        {/* Studio Location */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cream mb-3">
            Studio Location
          </div>
          <p className="text-xs text-cream/60 leading-relaxed mb-3 flex gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-clay-light shrink-0 mt-0.5" />
            <span>{BUSINESS_DATA.address.fullAddress}</span>
          </p>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-cream/10 border border-cream/15 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_DATA.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-cream/10 border border-cream/15 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-cream/50">
        <div>
          © {new Date().getFullYear()} SK Interior Design. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>Mumbai · Powai · Bandra · Andheri · Thane</span>
          <a href="#studio-contact" className="hover:text-clay-light transition-colors">
            Book Consultation
          </a>
        </div>
      </div>
    </footer>
  );
};
