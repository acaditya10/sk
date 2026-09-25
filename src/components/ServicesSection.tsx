import React from 'react';
import { SERVICES, BUSINESS_DATA } from '../data/businessData';
import { Check, Clock, ArrowRight, MessageCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-line">
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
          End-to-End Execution
        </div>
        <h2 className="text-3xl sm:text-4xl text-ink mb-4">
          Architectural Capabilities & Turnkey Services
        </h2>
        <p className="text-sm sm:text-base text-ink-soft">
          From full 3BHK turnkey renovations to precision modular kitchens, our in-house civil, electrical, and factory carpentry teams ensure seamless execution across Mumbai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((srv) => (
          <div
            key={srv.number}
            className="p-6 rounded-2xl bg-surface border border-line hover:border-line-strong hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Number and category */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-2xl text-clay">
                  {srv.number}.
                </span>
                <span className="text-[11px] font-medium text-ink-mute uppercase tracking-wider">
                  {srv.category}
                </span>
              </div>

              <h3 className="text-xl text-ink mb-3 group-hover:text-clay transition-colors">
                {srv.title}
              </h3>

              <p className="text-xs text-ink-soft leading-relaxed mb-6">
                {srv.description}
              </p>

              {/* Scope Checklist */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-semibold text-ink-mute uppercase tracking-wider mb-2">
                  Scope Includes:
                </div>
                {srv.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-ink-soft">
                    <Check className="w-3.5 h-3.5 text-clay shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-ink-mute">
                <Clock className="w-3.5 h-3.5" />
                <span>Handover: <strong className="text-ink">{srv.timeline}</strong></span>
              </span>

              <a
                href={BUSINESS_DATA.whatsappMessage(
                  `Hi SK Interior Design, I would like to inquire about your "${srv.title}" service for my property.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-clay font-medium hover:text-clay-deep transition-colors"
              >
                <span>Consult</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
