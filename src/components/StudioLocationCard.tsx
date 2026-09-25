import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Send,
  Navigation,
  Clock,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const StudioLocationCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyArea: 'Powai / Chandivali',
    projectType: '2 BHK Apartment',
    budgetRange: '₹10L – ₹15L',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.address.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const constructWhatsAppInquiry = () => {
    return `Hello SK Interior Design, I submitted a consultation inquiry on your website:
- Name: ${formData.name || 'Prospective Client'}
- Phone: ${formData.phone || 'N/A'}
- Email: ${formData.email || 'N/A'}
- Property Location: ${formData.propertyArea}
- Project Type: ${formData.projectType}
- Target Budget: ${formData.budgetRange}
- Notes: ${formData.notes || 'Looking for site visit and design consultation.'}`;
  };

  return (
    <section id="studio-contact" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-line">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
          Studio & Public Registry Details
        </div>
        <h2 className="text-3xl sm:text-4xl text-ink mb-3">
          Visit Our Studio or Schedule a Site Inspection
        </h2>
        <p className="text-sm text-ink-soft">
          We operate across Mumbai with our studio based in Nahar Amrit Shakti, Chandivali. Reach us directly via phone, WhatsApp, or official email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Official Contact & Map Hub (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Studio Profile Card */}
          <div className="p-5 sm:p-7 rounded-2xl bg-surface border border-line space-y-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-clay uppercase tracking-wider">
                  Verified Studio Presence
                </span>
                <h3 className="text-xl sm:text-2xl text-ink mt-1">
                  SK Interior Design
                </h3>
                <p className="text-xs text-ink-mute mt-1">
                  Residential & Commercial Turnkey Fit-Outs
                </p>
              </div>

              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-sunken hover:bg-line text-ink-soft hover:text-ink text-xs transition-colors shrink-0"
              >
                <Navigation className="w-3.5 h-3.5 text-clay" />
                <span>Get Route</span>
              </a>
            </div>

            {/* Address */}
            <div className="p-4 rounded-xl bg-canvas border border-line space-y-2">
              <div className="flex items-start gap-3 text-xs text-ink-soft">
                <MapPin className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">Studio Address</div>
                  <div className="text-ink-soft mt-0.5 leading-relaxed">
                    {BUSINESS_DATA.address.fullAddress}
                  </div>
                  <div className="text-[11px] text-ink-mute mt-1 font-mono">
                    Coordinates: 19.1044° N, 72.8974° E
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface hover:bg-sunken text-ink-mute hover:text-ink text-[11px] transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-sage" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                </button>
                <a
                  href={BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-surface hover:bg-sunken text-ink-mute hover:text-clay text-[11px] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Interactive Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_DATA.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-line hover:border-line-strong transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-clay-tint text-clay flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-ink-mute">Direct Phone</div>
                  <div className="font-semibold text-ink font-mono group-hover:text-clay">
                    {BUSINESS_DATA.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={BUSINESS_DATA.whatsappMessage("Hello SK Interior Design, I would like to inquire about design and renovation services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-line hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-ink-mute">WhatsApp Direct</div>
                  <div className="font-semibold text-emerald-700 group-hover:underline">
                    wa.me/919082443145
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_DATA.email}?subject=Interior%20Design%20Inquiry%20-%20Mumbai`}
                className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-line hover:border-line-strong transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-sunken text-ink-soft flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-ink-mute">Official Email</div>
                  <div className="font-semibold text-ink text-[11px] truncate group-hover:text-clay">
                    {BUSINESS_DATA.email}
                  </div>
                </div>
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-line">
                <div className="w-9 h-9 rounded-lg bg-sunken text-ink-mute flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-ink-mute">Studio Hours</div>
                  <div className="font-semibold text-ink text-[11px]">
                    9:30 AM – 8:30 PM IST (Mon–Sun)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Presence */}
            <div className="pt-2 border-t border-line">
              <div className="text-[11px] font-semibold text-ink-mute uppercase tracking-wider mb-2">
                Public Social Channels
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-canvas border border-line hover:border-pink-500/50 text-xs text-ink transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram: <strong>{BUSINESS_DATA.instagramHandle}</strong></span>
                  <ExternalLink className="w-3 h-3 text-ink-mute" />
                </a>

                <a
                  href={BUSINESS_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-canvas border border-line hover:border-blue-500/50 text-xs text-ink transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook: <strong>{BUSINESS_DATA.facebookPageName}</strong></span>
                  <ExternalLink className="w-3 h-3 text-ink-mute" />
                </a>
              </div>
            </div>

            {/* Service Areas Tag List */}
            <div className="pt-2 border-t border-line">
              <div className="text-[11px] font-semibold text-ink-mute uppercase tracking-wider mb-2">
                Active Service Locations in Mumbai MMR
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-ink-mute">
                {BUSINESS_DATA.serviceAreas.map((area, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-canvas border border-line">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Consultation Form (6 cols) */}
        <div className="lg:col-span-6 bg-surface border border-line rounded-2xl p-5 sm:p-8 shadow-xl">
          <div className="mb-6">
            <span className="text-[11px] font-mono text-clay uppercase tracking-wider">
              Priority Booking
            </span>
            <h3 className="text-xl sm:text-2xl text-ink mt-1">
              Request On-Site Inspection
            </h3>
            <p className="text-xs text-ink-soft mt-1">
              Fill in your property details. We will contact you within 2 hours or you can forward this immediately to WhatsApp.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-canvas border border-clay/40 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg text-ink">Inquiry Received</h4>
              <p className="text-xs text-ink-soft leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name || 'there'}</strong>! Our senior interior architect will review your project details and get in touch.
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.whatsappMessage(constructWhatsAppInquiry())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-clay text-canvas font-semibold text-xs hover:bg-clay-deep transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Forward Details to WhatsApp for Faster Response</span>
                </a>
              </div>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-[11px] text-ink-mute hover:text-clay hover:underline block mx-auto mt-2"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditya Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-line text-sm text-ink placeholder-ink-mute/60 focus:outline-none focus:border-clay transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-line text-sm text-ink placeholder-ink-mute/60 focus:outline-none focus:border-clay transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-line text-sm text-ink placeholder-ink-mute/60 focus:outline-none focus:border-clay transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    Property Location (Mumbai)
                  </label>
                  <select
                    value={formData.propertyArea}
                    onChange={(e) => setFormData({ ...formData, propertyArea: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-canvas border border-line text-sm text-ink focus:outline-none focus:border-clay transition-colors"
                  >
                    <option value="Powai / Chandivali">Powai / Chandivali</option>
                    <option value="Andheri East / West">Andheri East / West</option>
                    <option value="Bandra / Khar / Santacruz">Bandra / Khar / Santacruz</option>
                    <option value="Juhu / Vile Parle">Juhu / Vile Parle</option>
                    <option value="Goregaon / Malad / Kandivali">Goregaon / Malad / Kandivali</option>
                    <option value="South Mumbai / Worli / Lower Parel">South Mumbai / Worli</option>
                    <option value="Chembur / Ghatkopar / Kurla">Chembur / Ghatkopar</option>
                    <option value="Thane / Navi Mumbai">Thane / Navi Mumbai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-ink-soft mb-1">
                    Space Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-canvas border border-line text-sm text-ink focus:outline-none focus:border-clay transition-colors"
                  >
                    <option value="1 BHK Full Turnkey">1 BHK Turnkey</option>
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="4 BHK / Penthouse">4 BHK / Penthouse</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                    <option value="Commercial / Office">Commercial / Office</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1">
                  Additional Notes / Floor Plan Details
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Possession next month, need modular kitchen + 2 wardrobes and ceiling lights..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-canvas border border-line text-sm text-ink placeholder-ink-mute/60 focus:outline-none focus:border-clay transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-clay text-canvas font-semibold text-sm hover:bg-clay-deep transition-colors shadow-md active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Site Inspection Request</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-ink-mute">
                  Or instant response on WhatsApp:{" "}
                  <a
                    href={BUSINESS_DATA.whatsappMessage("Hi SK Interior Design, I would like to book a site inspection.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-clay hover:underline font-medium"
                  >
                    Chat Directly Now →
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
