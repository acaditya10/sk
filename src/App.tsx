import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostCalculator } from './components/CostCalculator';
import { Portfolio } from './components/Portfolio';
import { ServicesSection } from './components/ServicesSection';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { StudioLocationCard } from './components/StudioLocationCard';
import { InstagramGallery } from './components/InstagramGallery';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-clay selection:text-canvas">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 45-Day Before / After Transformation */}
        <BeforeAfterSlider />

        {/* Instant Project Cost & Timeline Estimator */}
        <CostCalculator />

        {/* Curated Portfolio Showcase */}
        <Portfolio />

        {/* Detailed Turnkey Services */}
        <ServicesSection />

        {/* The 4-Step Turnkey Process & Material Guarantees */}
        <WorkProcess />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Studio Location, Public Data & Site Inspection Booking */}
        <StudioLocationCard />

        {/* Instagram Feed Highlights */}
        <InstagramGallery />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Pill */}
      <FloatingActions />
    </div>
  );
}
