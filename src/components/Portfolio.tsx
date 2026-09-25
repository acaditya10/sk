import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem, BUSINESS_DATA } from '../data/businessData';
import { MapPin, Clock, Maximize2, X, MessageCircle, Check, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential Homes' },
  { id: 'kitchen', label: 'Modular Kitchens' },
  { id: 'living', label: 'Living & Dining' },
  { id: 'bedroom', label: 'Master Suites' },
  { id: 'commercial', label: 'Boutique Offices' },
];

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5">
        <div>
          <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
            Selected Mumbai Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl text-ink">
            Curated Turnkey Portfolio
          </h2>
          <p className="text-sm text-ink-soft mt-2 max-w-xl">
            Explore recently completed apartments, luxury kitchens, and corporate spaces across Powai, Chandivali, Bandra, and Andheri.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-surface border border-line rounded-xl self-start md:self-end">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-clay text-canvas font-semibold shadow-sm'
                    : 'text-ink-mute hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group bg-surface border border-line hover:border-line-strong rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
          >
            {/* Real Photograph */}
            <div className="relative overflow-hidden aspect-[4/3] bg-sunken">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-canvas/90 text-clay border border-line backdrop-blur-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Content info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-ink-mute mb-2">
                  <span className="flex items-center gap-1 text-clay font-medium">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-ink-soft">{project.sqft}</span>
                </div>

                <h3 className="text-lg text-ink group-hover:text-clay transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-ink-soft line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-line flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-ink-mute">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Handover: <strong className="text-ink">{project.completionTime}</strong></span>
                </span>
                <span className="text-clay font-medium text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Inspect Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Spec Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/60 backdrop-blur-md">
          <div className="bg-surface border border-line-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
            <button
              onClick={() => setActiveModalProject(null)}
              type="button"
              aria-label="Close project details"
              className="absolute top-5 right-5 p-2 rounded-lg bg-sunken text-ink-mute hover:text-ink"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal photograph */}
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-sunken mb-5 -mx-1">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-clay uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeModalProject.location}</span>
              <span aria-hidden="true">·</span>
              <span>{activeModalProject.sqft}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl text-ink mb-3">
              {activeModalProject.title}
            </h3>

            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-mute mb-3">
                Architectural Features & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink">
                {activeModalProject.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-clay shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Used */}
            <div className="mb-6 pt-4 border-t border-line">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-mute mb-2">
                Certified Materials & Sourcing
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeModalProject.materials.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-sunken border border-line text-ink-soft"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Handover & Action Button */}
            <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-ink-mute">
                <span>Handover Completed in: </span>
                <strong className="text-ink font-mono">{activeModalProject.completionTime}</strong>
              </div>

              <a
                href={BUSINESS_DATA.whatsappMessage(
                  `Hi SK Interior Design, I loved your "${activeModalProject.title}" project in ${activeModalProject.location}. Can we discuss a similar interior design for my flat?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-clay text-canvas font-semibold text-xs hover:bg-clay-deep transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About This Style on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
