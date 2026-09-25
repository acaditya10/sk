import React from 'react';
import { WORK_PROCESS, MATERIAL_GUARANTEES } from '../data/businessData';
import { ShieldCheck, CalendarCheck } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-line">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
          Predictable 45-Day Timeline
        </div>
        <h2 className="text-3xl sm:text-4xl text-ink mb-4">
          How Your Turnkey Home Comes to Life
        </h2>
        <p className="text-sm sm:text-base text-ink-soft">
          We eliminate delays through German CNC factory modular fabrication. While your apartment undergoes civil and electrical prep, your custom carpentry is cut with sub-millimeter precision off-site.
        </p>
      </div>

      {/* 4 Process Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
        {WORK_PROCESS.map((proc) => (
          <div
            key={proc.step}
            className="p-6 rounded-2xl bg-surface border border-line relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl text-line-strong">
                  {proc.step}
                </span>
                <span className="text-[11px] font-mono text-clay px-2 py-0.5 rounded bg-clay-tint border border-clay/20">
                  {proc.timeframe}
                </span>
              </div>

              <h3 className="text-lg text-ink mb-2">
                {proc.title}
              </h3>

              <p className="text-xs text-ink-soft leading-relaxed">
                {proc.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-line text-[11px] text-ink-mute flex items-center gap-1.5">
              <CalendarCheck className="w-3.5 h-3.5 text-sage" />
              <span>Milestone Sign-Off</span>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantees Grid */}
      <div className="bg-espresso rounded-2xl border border-espresso p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cream uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4 text-clay-light" />
          <span>The SK Interior Quality Covenant</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {MATERIAL_GUARANTEES.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-sm font-semibold text-cream">{item.title}</h4>
              <p className="text-xs text-cream/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
