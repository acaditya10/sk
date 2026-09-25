import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Editorial Copy (6 cols) */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          {/* Trust signal tag with unboxed metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink-mute">
            <span className="flex items-center gap-1.5 text-clay">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nahar Amrit Shakti, Chandivali</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Serving Greater Mumbai & MMR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] [text-wrap:balance]">
            Turnkey Luxury Interiors Tailored for Mumbai Living.
          </h1>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
            From 3D spatial planning to German-hardware modular carpentry and handover in 45 days. We deliver turnkey homes with fixed-price transparency and a 10-year warranty.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <a
              href="#cost-calculator"
              className="flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-clay text-canvas font-semibold text-sm hover:bg-clay-deep transition-colors shadow-md shadow-clay/20 active:scale-98 whitespace-nowrap"
            >
              <span>Calculate Project Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS_DATA.whatsappMessage("Hello SK Interior Design, I would like to schedule a site consultation for my Mumbai apartment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-surface border border-line-strong text-ink hover:bg-sunken transition-colors text-sm font-semibold whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Studio Direct</span>
            </a>
          </div>

          {/* Contact Direct Line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5 text-xs text-ink-mute">
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="flex items-center gap-1.5 hover:text-clay transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: <strong className="text-ink font-mono">{BUSINESS_DATA.phone}</strong></span>
            </a>
            <span aria-hidden="true">·</span>
            <span>{BUSINESS_DATA.workingHours}</span>
          </div>

          {/* Quantitative Proof Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-line">
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-ink tabular-nums">
                140+
              </div>
              <div className="text-xs text-ink-mute mt-0.5">Homes Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-clay tabular-nums">
                45 Days
              </div>
              <div className="text-xs text-ink-mute mt-0.5">Handover Guarantee</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-ink tabular-nums">
                10 Years
              </div>
              <div className="text-xs text-ink-mute mt-0.5">Hardware Warranty</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-sage tabular-nums">
                100%
              </div>
              <div className="text-xs text-ink-mute mt-0.5">Fixed Price (0 Surprises)</div>
            </div>
          </div>
        </div>

        {/* Right: Real Project Photograph */}
        <div className="lg:col-span-6 w-full">
          <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-sunken border border-line shadow-[0_24px_60px_-24px_rgba(31,26,19,0.35)] flex flex-col justify-end">
            <img
              src="/images/hero-kitchen-island.jpg"
              alt="White modular kitchen island with breakfast counter executed by SK Interior Design in Mumbai"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
            />

            {/* Ambient Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" />

            {/* Floating Architectural Spec Card */}
            <div className="relative z-10 p-5 sm:p-6 m-4 sm:m-6 bg-surface/95 backdrop-blur-md rounded-xl border border-line-strong max-w-lg shadow-xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-clay tracking-wider uppercase mb-2">
                <span>Signature Turnkey Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Nahar Amrit Shakti, Powai</span>
              </div>
              <h2 className="text-xl sm:text-2xl text-ink mb-2 leading-tight">
                The Nahar 3BHK Pavilion
              </h2>
              <p className="text-xs sm:text-sm text-ink-soft mb-4 line-clamp-2">
                Bespoke acoustic wood panelling, concealed warm 3000K lighting, Italian botticino marble floors, and custom curved furniture.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-line text-xs text-ink-soft">
                <div>
                  <div className="text-ink-mute text-[11px]">Area</div>
                  <div className="font-semibold text-ink font-mono">1,450 sq.ft</div>
                </div>
                <div>
                  <div className="text-ink-mute text-[11px]">Handover</div>
                  <div className="font-semibold text-ink font-mono">48 Days</div>
                </div>
                <div>
                  <div className="text-ink-mute text-[11px]">Warranty</div>
                  <div className="font-semibold text-clay font-mono">10 Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
