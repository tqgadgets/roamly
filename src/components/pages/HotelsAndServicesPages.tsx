import { useState } from 'react';
import {
  Headphones,
  Heart,
  Map,
  MapPin,
  Phone,
  Plane,
  Send,
  Star,
  Users,
} from 'lucide-react';
import { resortData } from '../../data/resortData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

const serviceItems = [
  {
    id: 'custom-itineraries',
    title: 'Custom Itineraries',
    description:
      'Tailored day-by-day travel plans built around your pace, dining tastes, and private sightseeing preferences.',
    icon: Map,
  },
  {
    id: 'group-tours',
    title: 'Group Tours',
    description:
      'Small-group journeys led by vetted local guides so you can share iconic landmarks and hidden neighborhoods effortlessly.',
    icon: Users,
  },
  {
    id: 'flight-hotel-booking',
    title: 'Flight & Hotel Booking',
    description:
      'Coordinated international flights, boutique stays, and private airport transfers booked under one unified reservation.',
    icon: Plane,
  },
  {
    id: 'support-24-7',
    title: '24/7 Support',
    description:
      'Round-the-clock live assistance from dedicated travel specialists for schedule changes, rebooking, and on-trip peace of mind.',
    icon: Headphones,
  },
] as const;

export function HotelsPage() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div className="space-y-3 max-w-2xl">
        <Badge>Curated Stays</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          Hotel &amp; Resort
        </h1>
        <p className="text-base text-[var(--color-body)]">
          Stay in our top-rated properties across the most popular destinations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resortData.map((resort, index) => {
          const isFav = Boolean(favorites[resort.id]);
          return (
            <Reveal key={resort.id} delay={0.1 * index} className="h-full">
              <article className="relative overflow-hidden rounded-[2rem] min-h-[550px] h-full shadow-lg group bg-stone-900">
                <img
                  src={resort.image}
                  alt={`${resort.name} in ${resort.destination}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"
                />

                {/* Top Left Rating Pill */}
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-white text-sm font-medium z-10">
                  <Star
                    aria-hidden="true"
                    className="w-4 h-4 fill-white text-white shrink-0"
                  />
                  <span className="font-bold tabular-nums">
                    {resort.rating.toFixed(1)}
                  </span>
                  <span className="text-white/90 tabular-nums">
                    ({resort.reviews} reviews)
                  </span>
                </div>

                {/* Top Right Favorite Button */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(resort.id)}
                  aria-label={
                    isFav
                      ? `Remove ${resort.name} from favorites`
                      : `Save ${resort.name} to favorites`
                  }
                  aria-pressed={isFav}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  <Heart
                    aria-hidden="true"
                    className={`w-5 h-5 transition-colors ${
                      isFav ? 'fill-[#e76f51] text-[#e76f51]' : 'text-white'
                    }`}
                  />
                </button>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-4 z-10">
                  <h2 className="text-3xl font-bold font-heading text-white leading-tight">
                    {resort.name}
                  </h2>

                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-white text-sm w-fit">
                    <MapPin aria-hidden="true" className="w-4 h-4 shrink-0" />
                    <span>{resort.destination}</span>
                  </div>

                  <p className="text-gray-200 text-sm leading-relaxed">
                    {resort.description}
                  </p>

                  <div className="border-t border-white/20 my-2" />

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="inline-flex items-center gap-2 text-white font-medium text-sm tabular-nums">
                      <Phone aria-hidden="true" className="w-4 h-4 shrink-0" />
                      <span>{resort.contact}</span>
                    </div>

                    <a href="/contact" className="inline-block shrink-0">
                      <Button
                        variant="primary"
                        className="bg-[#e76f51] rounded-full px-6 py-2.5 text-white font-semibold flex items-center gap-2 text-sm whitespace-nowrap"
                      >
                        <span>Book Now</span>
                        <Send aria-hidden="true" className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div className="space-y-3 max-w-2xl">
        <Badge>Travel Concierge</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          Our Services
        </h1>
        <p className="text-base text-[var(--color-body)]">
          End-to-end trip planning, curated accommodations, and dedicated support
          for every stage of your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceItems.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.id} delay={0.1 * index} className="h-full">
              <Card className="h-full flex flex-col gap-4 p-7">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[var(--color-accent)] border border-orange-100 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-[var(--color-foreground)]">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[var(--color-body)]">
                    {service.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
