import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, Construction } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-10 text-center max-w-3xl mx-auto">
        <div className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
          Turnkey Transformation In 45 Days
        </div>
        <h2 className="text-3xl sm:text-4xl text-ink mb-4">
          From Bare Concrete Shell to Turnkey Luxury
        </h2>
        <p className="text-sm sm:text-base text-ink-soft">
          Slide horizontally to witness how SK Interior Design transforms raw Mumbai apartment shells into warm, acoustically balanced turnkey homes.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] max-h-[560px] rounded-2xl overflow-hidden border border-line-strong shadow-2xl select-none cursor-ew-resize touch-none bg-sunken"
      >
        {/* AFTER LAYER (FULL BACKGROUND - Turnkey Finished Living Room) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/ba-living-after.jpg"
            alt="Finished living room after 45-day turnkey execution"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Floating Spec Badge for Handover */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/95 border border-line-strong backdrop-blur-md text-xs text-sage font-medium shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Day 45: Turnkey Handover Ready</span>
          </div>
        </div>

        {/* BEFORE LAYER (CLIPPED ON LEFT - Raw Concrete Shell) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src="/images/ba-living-before.jpg"
            alt="Bare concrete shell on day one before renovation"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Floating Spec Badge for Day 1 Bare Shell */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/95 border border-line-strong backdrop-blur-md text-xs text-clay font-medium shadow-lg">
            <Construction className="w-3.5 h-3.5" />
            <span>Day 1: Raw Concrete Shell</span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-clay cursor-ew-resize z-20 shadow-[0_0_15px_rgba(176,85,47,0.7)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-canvas border-2 border-clay text-clay flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-ink-mute mt-4 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-line-strong inline-block" />
          <span>Raw Shell: Civil alterations, concealed piping & electrical conduits</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-clay inline-block" />
          <span>Handover: Italian marble, fluted panelling & 100% turnkey finish</span>
        </div>
      </div>
    </section>
  );
};
