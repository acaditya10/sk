import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const FloatingActions: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 max-w-[calc(100vw-2rem)]"
    >
      {/* Quick Calculator Shortcut (Desktop) */}
      <a
        href="#cost-calculator"
        className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-surface/95 text-ink-soft hover:text-ink border border-line backdrop-blur-md shadow-xl text-xs font-medium transition-transform hover:scale-105 active:scale-95"
      >
        <Calculator className="w-3.5 h-3.5 text-clay" />
        <span>Cost Estimator</span>
      </a>

      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${BUSINESS_DATA.phone}`}
        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-surface text-ink border border-line shadow-xl text-xs font-semibold hover:bg-sunken transition-transform hover:scale-105 active:scale-95"
        aria-label="Call Studio"
      >
        <Phone className="w-3.5 h-3.5 text-clay" />
        <span className="hidden sm:inline font-mono">{BUSINESS_DATA.phone}</span>
        <span className="sm:hidden">Call</span>
      </a>

      {/* Instant WhatsApp Button */}
      <a
        href={BUSINESS_DATA.whatsappMessage(
          "Hi SK Interior Design, I would like to inquire about turnkey interior services for my Mumbai property."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-xl text-xs transition-transform hover:scale-105 active:scale-95 shadow-emerald-700/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>
    </aside>
  );
};
