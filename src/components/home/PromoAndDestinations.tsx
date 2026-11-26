'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Building2,
  Home,
  Umbrella,
} from 'lucide-react';
import {
  destinations,
  featureCollageImages,
  promoBanners,
} from '../../data/siteData';
import { Button } from '../ui/Button';
import { PackageCard } from '../ui/PackageCard';
import { Reveal } from '../ui/Reveal';

const stayTypes = [
  { id: 'villas', label: 'Villas', availability: '120+ Available', icon: Home },
  {
    id: 'resorts',
    label: 'Resorts',
    availability: '85+ Available',
    icon: Umbrella,
  },
  {
    id: 'cottages',
    label: 'Cottages',
    availability: '60+ Available',
    icon: Building2,
  },
] as const;

const destinationTabs = [
  'All',
  'Family Holidays',
  'Mountains',
  'Beaches',
  'Luxury Stays',
] as const;

const promoOverlayMap = {
  blue: 'bg-gradient-to-t from-sky-950/90 via-sky-900/55 to-sky-800/25',
  orange:
    'bg-gradient-to-t from-orange-950/90 via-[#e76f51]/65 to-orange-700/25',
  darkblue:
    'bg-gradient-to-t from-slate-950/95 via-indigo-950/70 to-slate-900/35',
} as const;

export function PromoAndDestinations() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedStayType, setSelectedStayType] =
    useState<(typeof stayTypes)[number]['id']>('villas');
  const [activeFilter, setActiveFilter] =
    useState<(typeof destinationTabs)[number]>('All');

  const filteredPackages =
    activeFilter === 'All'
      ? destinations
      : destinations.filter((pkg) => pkg.tabGroup === activeFilter);

  return (
    <>
      {/* C. Promo Cards */}
      <section
        aria-label="Featured travel promotions"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 overflow-x-clip"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {promoBanners.map((promo, index) => (
            <Reveal key={promo.id} delay={0.1 * index} className="h-full">
              <div className="relative overflow-hidden rounded-2xl min-h-[260px] h-full flex flex-col justify-end p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-slate-800 group">
                <img
                  src={promo.image}
                  alt={promo.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${promoOverlayMap[promo.tone]}`}
                />
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-gray-100 line-clamp-2">
                    {promo.subtitle}
                  </p>
                  <div className="pt-1">
                    <a href="/packages">
                      <Button
                        variant="primary"
                        className="px-4 py-2 text-xs font-semibold"
                      >
                        {promo.ctaLabel}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* D. Feature/Category Section */}
      <section
        id="destinations"
        className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-x-clip"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Tilted Polaroid Image Collage */}
          <div className="lg:col-span-6">
            <div className="relative w-full max-w-md mx-auto h-[400px] md:h-[500px] mt-8">
              <div
                aria-hidden="true"
                className="absolute inset-6 sm:inset-10 rounded-full bg-orange-100/80 blur-2xl pointer-events-none"
              />

              {/* Image 1 (Portofino - Tall Vertical) */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0, rotate: -4 }
                    : { opacity: 0, x: -100, rotate: -20 }
                }
                whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 60, damping: 15, delay: 0.1 }
                }
                className="absolute top-10 left-0 w-[55%] h-[70%] rotate-[-6deg] border-4 border-white bg-white shadow-xl rounded-2xl overflow-hidden z-10 hover:z-40 group"
              >
                <img
                  src={featureCollageImages[0].src}
                  alt={featureCollageImages[0].alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                />
              </motion.div>

              {/* Image 2 (Bali - Wide Horizontal) */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0, y: 0, rotate: 3 }
                    : { opacity: 0, x: 100, y: -50, rotate: 20 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }
                }
                className="absolute top-0 right-0 w-[50%] h-[35%] rotate-[8deg] border-4 border-white bg-white shadow-xl rounded-2xl overflow-hidden z-20 hover:z-40 group"
              >
                <img
                  src={featureCollageImages[1].src}
                  alt={featureCollageImages[1].alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                />
              </motion.div>

              {/* Image 3 (Switzerland - Wide Horizontal) */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0, y: 0, rotate: -2 }
                    : { opacity: 0, x: 100, y: 50, rotate: 20 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 60, damping: 15, delay: 0.3 }
                }
                className="absolute top-[40%] right-0 w-[45%] h-[35%] rotate-[-2deg] border-4 border-white bg-white shadow-xl rounded-2xl overflow-hidden z-30 hover:z-40 group"
              >
                <img
                  src={featureCollageImages[2].src}
                  alt={featureCollageImages[2].alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Heading, Description, 3 Stay Type Buttons, Book Now & Learn More */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] leading-tight text-balance">
                Find Your Next Dream Destination
              </h2>
              <p className="text-base text-[var(--color-body)] leading-relaxed">
                Choose from handpicked beachfront villas, full-service tropical
                resorts, and quiet alpine cottages ready for instant booking.
              </p>
            </div>

            {/* 3 Availability Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stayTypes.map((stay) => {
                const Icon = stay.icon;
                const isActive = selectedStayType === stay.id;
                return (
                  <button
                    key={stay.id}
                    type="button"
                    onClick={() => setSelectedStayType(stay.id)}
                    className={`flex flex-col items-start gap-1.5 p-4 rounded-2xl border text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-orange-50 border-[var(--color-accent)] text-[var(--color-foreground)]'
                        : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-sm font-bold">{stay.label}</span>
                    <span className="text-xs text-[var(--color-body)] tabular-nums">
                      {stay.availability}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="/packages">
                <Button variant="primary">Book Now</Button>
              </a>
              <a href="/packages">
                <Button variant="secondary">Learn More</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* E. Destinations Grid (Best travel destination) */}
      <section
        id="packages"
        className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-10 overflow-x-clip"
      >
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
                Best travel destination
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-body)]">
                Curated multi-day itineraries with local guides, transfers, and
                transparent pricing.
              </p>
            </div>

            {/* Destination Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2.5">
              {destinationTabs.map((tab) => {
                const isSelected = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                        : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Filtered Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPackages.map((pkg, index) => (
            <Reveal key={pkg.id} delay={0.1 * index} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
