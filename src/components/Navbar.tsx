import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur-md border-b border-line transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a href="#" className="text-lg sm:text-2xl font-serif tracking-tight text-ink hover:text-clay transition-colors whitespace-nowrap">
          SK INTERIOR DESIGN
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          <a href="#portfolio" className="hover:text-clay transition-colors whitespace-nowrap">
            Portfolio
          </a>
          <a href="#services" className="hover:text-clay transition-colors whitespace-nowrap">
            Services
          </a>
          <a href="#cost-calculator" className="hover:text-clay transition-colors whitespace-nowrap">
            Estimator
          </a>
          <a href="#process" className="hover:text-clay transition-colors whitespace-nowrap">
            Process
          </a>
          <a href="#studio-contact" className="hover:text-clay transition-colors whitespace-nowrap">
            Studio
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_DATA.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-ink-soft hover:text-ink bg-surface border border-line rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-clay" />
            <span className="font-mono">{BUSINESS_DATA.phone}</span>
          </a>

          <a
            href={BUSINESS_DATA.whatsappMessage("Hi SK Interior Design, I would like to inquire about interior design services for my Mumbai property.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-canvas bg-clay hover:bg-clay-deep rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Studio</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BUSINESS_DATA.whatsappMessage("Hi SK Interior Design, I would like to inquire about interior design services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-clay text-canvas"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-ink-soft hover:text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas border-b border-line px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3.5 text-[15px] font-medium text-ink-soft">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-clay"
            >
              Portfolio & Transformations
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-clay"
            >
              Services & Capabilities
            </a>
            <a
              href="#cost-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-clay"
            >
              Cost & Timeline Estimator
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-clay"
            >
              The 45-Day Turnkey Process
            </a>
            <a
              href="#studio-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-clay"
            >
              Studio Location & Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-line space-y-2.5">
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-surface border border-line text-xs font-semibold text-ink"
            >
              <Phone className="w-3.5 h-3.5 text-clay" />
              <span>Call: {BUSINESS_DATA.phone}</span>
            </a>
            <a
              href={BUSINESS_DATA.whatsappMessage("Hi SK Interior Design, I would like to book a site visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-clay text-canvas text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
