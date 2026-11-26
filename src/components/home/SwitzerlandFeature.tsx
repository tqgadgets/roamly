import { Phone } from 'lucide-react';
import { switzerlandHighlights } from '../../data/siteData';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function SwitzerlandFeature() {
  return (
    <section className="relative w-full bg-[#111827] text-white py-16 md:py-24 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:pr-10">
          {/* Left Content */}
          <Reveal direction="right" className="lg:col-span-5 space-y-6">
            <p className="text-sm font-semibold text-[var(--color-accent)]">
              Featured Destination
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Switzerland
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Ride panoramic alpine railways across stone viaducts, stay in
              timber chalets overlooking glacial lakes, and wake up to crisp
              mountain mornings in the heart of Europe.
            </p>
            <div className="pt-2">
              <a href="/packages/swiss-alpine-retreat" className="inline-block">
                <Button
                  variant="primary"
                  className="px-7 py-3 text-sm font-semibold"
                >
                  Explore Destination
                </Button>
              </a>
            </div>
          </Reveal>

          {/* Right 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {switzerlandHighlights.map((item, index) => (
              <Reveal key={item.id} direction="left" delay={0.1 * index}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-800 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-200 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Vertical Phone Number */}
        <div className="hidden lg:flex items-center gap-2 absolute right-2 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-xs font-semibold tracking-widest text-gray-300 tabular-nums">
          <Phone className="w-3.5 h-3.5 text-[var(--color-accent)] rotate-90" />
          <span>+41 44 580 24 90</span>
        </div>
      </div>
    </section>
  );
}
