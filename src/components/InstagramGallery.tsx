import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_GALLERY, BUSINESS_DATA } from '../data/businessData';

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-line">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
            Fresh From The Studio Feed
          </div>
          <h2 className="text-3xl sm:text-4xl text-ink">
            Seen on Instagram
          </h2>
        </div>

        <a
          href={BUSINESS_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-surface border border-line hover:border-pink-500/50 text-sm font-semibold text-ink transition-colors"
        >
          <Instagram className="w-4 h-4 text-pink-600" />
          <span>{BUSINESS_DATA.instagramHandle}</span>
          <ArrowUpRight className="w-4 h-4 text-ink-mute" />
        </a>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {INSTAGRAM_GALLERY.map((img) => (
          <a
            key={img.src}
            href={BUSINESS_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-xl overflow-hidden bg-sunken border border-line"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors flex items-center justify-center">
              <Instagram className="w-6 h-6 text-canvas opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
