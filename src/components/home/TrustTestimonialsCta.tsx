import { CheckCircle2, Star } from 'lucide-react';
import {
  CTA_IMAGE,
  FEATURED_TRAVELER_IMAGE,
  testimonials,
  trustCollageImages,
  trustPolicies,
} from '../../data/siteData';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

export function TrustTestimonialsCta() {
  return (
    <>
      {/* G. Trust & Payments Section */}
      <section
        id="about"
        className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-x-clip"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 4 Images in a Grid */}
          <Reveal direction="right" className="lg:col-span-6 grid grid-cols-2 gap-4">
            {trustCollageImages.map((img) => (
              <div
                key={img.src}
                className="rounded-2xl overflow-hidden bg-stone-200 aspect-[4/3] group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                />
              </div>
            ))}
          </Reveal>

          {/* Right: Heading, Description, 4 Checkmarks, Payment Logos */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] leading-tight text-balance">
                We provide tours across a variety of destinations.
              </h2>
              <p className="text-base text-[var(--color-body)] leading-relaxed">
                Travel with confidence knowing every itinerary is backed by
                transparent policies, verified local operators, and secure
                global payment protection.
              </p>
            </div>

            <ul className="space-y-4">
              {trustPolicies.map((policy) => (
                <li key={policy.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                      {policy.title}
                    </h3>
                    <p className="text-sm text-[var(--color-body)] mt-0.5">
                      {policy.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Payment Partners: PayPal, Stripe, Mastercard, Skrill */}
            <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
              <p className="text-xs font-semibold text-[var(--color-body)]">
                Accepted Payment Methods
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-sm font-bold text-sky-700">
                  PayPal
                </span>
                <span className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-sm font-bold text-indigo-600">
                  Stripe
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-sm font-bold text-[var(--color-foreground)]">
                  <span
                    className="inline-flex items-center -space-x-1.5"
                    aria-hidden="true"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/90" />
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-400/90" />
                  </span>
                  <span>Mastercard</span>
                </span>
                <span className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-sm font-bold text-purple-800">
                  Skrill
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* H. Testimonials Section */}
      <section
        id="blog"
        className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-12 overflow-x-clip"
      >
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
              What our customer says
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-body)]">
              Real stories from travelers who explored coastal towns, alpine
              peaks, and cultural capitals with GoVibe.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Large Featured Image with Quote Overlay & Author Info */}
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 min-h-[380px] h-full group">
              <img
                src={FEATURED_TRAVELER_IMAGE}
                alt="Smiling GoVibe traveler with film camera overlooking coastal bay"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-white">
                <p className="text-base sm:text-lg font-medium leading-snug">
                  &ldquo;We plan, track, and explore with JourneyHub in real
                  time.&rdquo;
                </p>
                <div className="text-xs text-gray-200">
                  <p className="font-bold text-white">Sarah Jenkins</p>
                  <p>Travel Photographer · Verified Explorer</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: 2 Testimonial Cards (Noah Johnson & Henry Collins) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {testimonials.slice(0, 2).map((item, index) => (
              <Reveal key={item.id} delay={0.1 * index} className="flex-1">
                <Card className="h-full flex flex-col justify-between gap-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-semibold text-[var(--color-foreground)] tabular-nums ml-1.5">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-[var(--color-foreground)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover bg-stone-200 shrink-0"
                    />
                    <div>
                      <p className="text-sm font-bold text-[var(--color-foreground)]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[var(--color-body)]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* I. Final CTA (Ice/Water Background) */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <img
          src={CTA_IMAGE}
          alt="Glacial icebergs floating in deep Arctic fjord water"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
        <Reveal className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Start your next journey now and create memories that last forever.
          </h2>
          <p className="text-base text-gray-100 max-w-xl mx-auto leading-relaxed">
            Reserve flexible flights, stays, and guided expeditions tailored to
            your schedule.
          </p>
          <div className="pt-2">
            <a href="/packages" className="inline-block">
              <Button
                variant="primary"
                className="text-sm sm:text-base font-semibold tracking-wide px-8 py-3 shadow-md"
              >
                BOOK YOUR TRIP
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
