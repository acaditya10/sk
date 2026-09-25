import React, { useState } from 'react';
import { Calculator, MessageCircle, ShieldCheck, Sparkles, Clock, Check } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface ScopeOption {
  id: string;
  name: string;
  costMultiplier: number;
  description: string;
}

const PROPERTY_TYPES = [
  { id: '1bhk', label: '1 BHK', area: '450 – 600 sq.ft', baseSqft: 520 },
  { id: '2bhk', label: '2 BHK', area: '750 – 1,000 sq.ft', baseSqft: 850 },
  { id: '3bhk', label: '3 BHK', area: '1,150 – 1,600 sq.ft', baseSqft: 1350 },
  { id: '4bhk', label: '4 BHK / Villa', area: '1,800 – 3,000 sq.ft', baseSqft: 2200 },
  { id: 'commercial', label: 'Boutique Office', area: '600 – 1,500 sq.ft', baseSqft: 950 },
];

const FINISH_TIERS = [
  {
    id: 'essential',
    name: 'Smart Contemporary',
    ratePerSqft: 1450,
    tagline: 'Clean aesthetics, high durability, fast execution',
    features: [
      'Commercial Marine Ply (IS 303)',
      'Anti-fingerprint matte laminates (0.8mm & 1mm)',
      'Soft-close telescopic channels',
      'Gypsum false ceiling with standard warm LED spots',
      'Asian Paints Tractor Emulsion finish',
    ],
  },
  {
    id: 'premium',
    name: 'Luxury Turnkey (Most Popular)',
    ratePerSqft: 2150,
    tagline: 'Fluted panels, quartz tops, German hardware',
    features: [
      'BWP 710 Marine Grade Boiling Waterproof Ply',
      'High-gloss acrylic / PU lacquer finishes',
      'Hettich / Blum soft-close tandem boxes',
      'Fluted louvers & acoustic headboard wall panelling',
      'Seamless quartz kitchen countertops',
      'Asian Paints Royale Luxury Matte & texture accent',
    ],
  },
  {
    id: 'bespoke',
    name: 'Ultra Bespoke Signature',
    ratePerSqft: 3200,
    tagline: 'Italian marble, veneer, automated architectural lighting',
    features: [
      'Natural book-matched Italian marble accents',
      'Natural smoked oak / walnut veneer with PU coat',
      'Hafele glass profile wardrobes with sensor lights',
      'Concealed magnetic architectural track lights',
      'Smart home curtain motorization & automation ready',
      'Dedicated project architect & concierge management',
    ],
  },
];

const SCOPE_ITEMS: ScopeOption[] = [
  { id: 'kitchen', name: 'Modular Kitchen & Quartz Top', costMultiplier: 1.0, description: 'BWP ply carcass, soft-close Blum/Hettich fittings' },
  { id: 'wardrobes', name: 'Master & Guest Floor-to-Ceiling Wardrobes', costMultiplier: 1.0, description: 'Profile glass or acrylic finish with organizers' },
  { id: 'ceiling', name: 'False Ceiling & Architectural Lighting', costMultiplier: 1.0, description: 'Cove lighting, magnetic track lights & drivers' },
  { id: 'living', name: 'Living Room TV Console & Panelling', costMultiplier: 1.0, description: 'Fluted panels, concealed cable conduits & credenza' },
  { id: 'painting', name: 'Full Home Painting & Texture Wall', costMultiplier: 1.0, description: 'Asian Paints Royale Luxury with primer & putty' },
  { id: 'civil', name: 'Civil Alterations & Bathroom Upgrades', costMultiplier: 0.8, description: 'Tiling, plumbing modifications & waterproofing' },
];

export const CostCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<string>('2bhk');
  const [finishTier, setFinishTier] = useState<string>('premium');
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'kitchen',
    'wardrobes',
    'ceiling',
    'living',
    'painting',
  ]);

  const toggleScope = (id: string) => {
    if (selectedScopes.includes(id)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((s) => s !== id));
      }
    } else {
      setSelectedScopes([...selectedScopes, id]);
    }
  };

  const selectedProp = PROPERTY_TYPES.find((p) => p.id === propertyType) || PROPERTY_TYPES[1];
  const selectedTier = FINISH_TIERS.find((t) => t.id === finishTier) || FINISH_TIERS[1];

  // Calculation Math
  const scopeRatio = selectedScopes.length / SCOPE_ITEMS.length;
  const baseEstimate = selectedProp.baseSqft * selectedTier.ratePerSqft * (0.65 + 0.35 * scopeRatio);

  const minLakhs = (baseEstimate * 0.92 / 100000).toFixed(1);
  const maxLakhs = (baseEstimate * 1.08 / 100000).toFixed(1);

  // Delivery timeline estimation
  let estimatedDays = '45 Days';
  if (selectedProp.id === '1bhk') estimatedDays = '35 – 40 Days';
  else if (selectedProp.id === '2bhk') estimatedDays = '42 – 48 Days';
  else if (selectedProp.id === '3bhk') estimatedDays = '50 – 58 Days';
  else if (selectedProp.id === '4bhk') estimatedDays = '60 – 75 Days';
  else estimatedDays = '30 – 45 Days';

  const generateWhatsAppMessage = () => {
    const scopesList = selectedScopes
      .map((s) => SCOPE_ITEMS.find((item) => item.id === s)?.name)
      .filter(Boolean)
      .join(', ');

    return `Hello SK Interior Design! I used your online cost estimator for my Mumbai property:
- Configuration: ${selectedProp.label} (${selectedProp.area})
- Finish Tier: ${selectedTier.name}
- Selected Scope: ${scopesList}
- Estimated Budget: ₹${minLakhs} – ₹${maxLakhs} Lakhs
- Target Timeline: ${estimatedDays}

Could we schedule a site visit or consultation to discuss?`;
  };

  return (
    <section id="cost-calculator" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
          Transparent Mumbai Interior Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl text-ink mb-4">
          Instant Turnkey Project Estimator
        </h2>
        <p className="text-sm sm:text-base text-ink-soft">
          Get an immediate estimate based on current Mumbai material costs, labor rates, and factory precision carpentry. No guesswork. No hidden margins.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Inputs Column (7 cols) */}
        <div className="lg:col-span-7 space-y-7 sm:space-y-8 bg-surface p-5 sm:p-8 rounded-2xl border border-line">
          {/* Step 1: Select Property Configuration */}
          <div>
            <div className="block text-xs font-semibold uppercase tracking-wider text-ink-soft mb-3">
              1. Choose Apartment / Space Configuration
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {PROPERTY_TYPES.map((prop) => {
                const active = propertyType === prop.id;
                return (
                  <button
                    key={prop.id}
                    onClick={() => setPropertyType(prop.id)}
                    type="button"
                    className={`p-3 rounded-xl border text-left transition-all ${
                      active
                        ? 'bg-clay-tint border-clay shadow-md text-ink'
                        : 'bg-canvas border-line text-ink-soft hover:border-line-strong hover:text-ink'
                    }`}
                  >
                    <div className="font-semibold text-sm text-ink">{prop.label}</div>
                    <div className="text-[11px] text-ink-mute mt-0.5">{prop.area}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Finish Tier */}
          <div>
            <div className="block text-xs font-semibold uppercase tracking-wider text-ink-soft mb-3">
              2. Select Material & Finish Package
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FINISH_TIERS.map((tier) => {
                const active = finishTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setFinishTier(tier.id)}
                    type="button"
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      active
                        ? 'bg-clay-tint border-clay shadow-lg text-ink'
                        : 'bg-canvas border-line text-ink-soft hover:border-line-strong hover:text-ink'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <span className="font-semibold text-sm text-ink">{tier.name}</span>
                        {active && <span className="w-2 h-2 rounded-full bg-clay shrink-0" />}
                      </div>
                      <div className="text-xs text-clay font-mono mb-2">
                        ≈ ₹{tier.ratePerSqft.toLocaleString('en-IN')}/sq.ft
                      </div>
                      <p className="text-[11px] text-ink-mute leading-relaxed mb-3">
                        {tier.tagline}
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-line/70 text-[10px] text-ink-mute text-left">
                      {tier.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1">
                          <Check className="w-3 h-3 text-clay shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Scope Checklist */}
          <div>
            <div className="block text-xs font-semibold uppercase tracking-wider text-ink-soft mb-3">
              3. Customize Included Scope Items
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SCOPE_ITEMS.map((item) => {
                const checked = selectedScopes.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleScope(item.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      checked
                        ? 'bg-sunken border-line-strong text-ink'
                        : 'bg-canvas border-line text-ink-mute hover:border-line-strong'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                        checked ? 'bg-clay text-canvas' : 'border border-line-strong bg-surface'
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-ink">{item.name}</div>
                      <div className="text-[11px] text-ink-mute">{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Sticky Card (5 cols) — shown first on mobile */}
        <div className="order-first lg:order-none lg:col-span-5 lg:sticky lg:top-24 space-y-5">
          <div className="bg-espresso rounded-2xl border border-espresso p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-clay/25 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-cream/15 gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-clay-light">
                <Calculator className="w-4 h-4" />
                <span>Estimated Turnkey Cost</span>
              </div>
              <span className="text-[11px] text-cream/50 font-mono">Mumbai MMR Rates</span>
            </div>

            <div className="py-5 sm:py-6">
              <div className="text-3xl sm:text-4xl font-serif text-cream tracking-tight">
                ₹{minLakhs} – ₹{maxLakhs} <span className="text-lg font-sans font-normal text-cream/60">Lakhs</span>
              </div>
              <p className="text-xs text-cream/60 mt-1">
                Estimated for {selectedProp.label} · {selectedTier.name} package
              </p>
            </div>

            <div className="space-y-3 py-4 border-t border-cream/15 text-xs text-cream/85">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-cream/60">
                  <Clock className="w-3.5 h-3.5 text-clay-light" /> Guaranteed Handover
                </span>
                <span className="font-semibold text-cream font-mono">{estimatedDays}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-cream/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-clay-light" /> Warranty Coverage
                </span>
                <span className="font-semibold text-clay-light font-mono">10 Years Flat</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-cream/60">
                  <Sparkles className="w-3.5 h-3.5 text-clay-light" /> Project Management
                </span>
                <span className="font-semibold text-cream">Daily WhatsApp Photos</span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action with pre-filled message */}
            <div className="pt-4 space-y-2.5">
              <a
                href={BUSINESS_DATA.whatsappMessage(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-clay text-canvas font-semibold text-sm hover:bg-clay-deep transition-colors shadow-lg active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cream/10 text-cream hover:bg-cream/20 transition-colors text-xs font-medium"
              >
                <span>Or Call Studio Directly: {BUSINESS_DATA.phone}</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-cream/50 mt-4 leading-normal">
              *Estimate covers design, factory fabrication, materials, hardware & labor. Formal itemized BOQ provided post-site visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
