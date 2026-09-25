import React from 'react';
import { TESTIMONIALS } from '../data/businessData';
import { Star, MapPin, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-line">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
          Verified Mumbai Client Experiences
        </div>
        <h2 className="text-3xl sm:text-4xl text-ink mb-3">
          Trusted by Homeowners Across Powai & Mumbai
        </h2>
        <p className="text-sm text-ink-soft">
          Hear from residents of Nahar Amrit Shakti, Hiranandani, and Andheri who entrusted their apartments and workspaces to our turnkey team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-surface border border-line flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                <Quote className="w-4 h-4 text-clay/50 mr-auto" />
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-clay text-clay" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-line">
              <div className="font-semibold text-sm text-ink">{t.clientName}</div>
              <div className="text-[11px] text-clay font-medium mt-0.5">{t.property}</div>
              <div className="flex items-center gap-1 text-[11px] text-ink-mute mt-1">
                <MapPin className="w-3 h-3" />
                <span>{t.location}</span>
                <span aria-hidden="true">·</span>
                <span>{t.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
