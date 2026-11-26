'use client';

import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';
import { destinations } from '../../data/siteData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ImageSlider } from '../ui/ImageSlider';
import { PackageCard } from '../ui/PackageCard';
import { NotFoundPage } from './BlogAndNotFoundPages';

export function PackagesListingPage({
  initialSearch = '',
}: {
  initialSearch?: string;
}) {
  const [searchInput, setSearchInput] = useState(initialSearch);

  useEffect(() => {
    setSearchInput(initialSearch);
  }, [initialSearch]);

  const handleFilterChange = (value: string) => {
    setSearchInput(value);
    const trimmed = value.trim();
    const nextUrl = trimmed
      ? `/packages?search=${encodeURIComponent(trimmed)}`
      : '/packages';
    window.history.replaceState({}, '', nextUrl);
  };

  const normalizedQuery = searchInput.trim().toLowerCase();
  const filteredPackages = normalizedQuery
    ? destinations.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(normalizedQuery) ||
          pkg.location.toLowerCase().includes(normalizedQuery)
      )
    : destinations;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <Badge>Curated Tours</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            All Travel Packages
          </h1>
          <p className="text-base text-[var(--color-body)]">
            Browse every handpicked coastal getaway, cultural retreat, and alpine
            expedition available for upcoming seasons.
          </p>
        </div>

        {/* Live Search Filter */}
        <div className="w-full md:w-80">
          <label htmlFor="packages-search" className="sr-only">
            Filter packages by title or location
          </label>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-accent)]">
            <Search className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
            <input
              id="packages-search"
              type="text"
              value={searchInput}
              onChange={(e) => handleFilterChange(e.target.value)}
              placeholder="Search city or package..."
              className="w-full bg-transparent text-sm text-[var(--color-foreground)] focus:outline-none"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => handleFilterChange('')}
                aria-label="Clear search"
                className="text-[var(--color-body)] hover:text-[var(--color-foreground)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {filteredPackages.length === 0 ? (
        <Card className="text-center py-14 space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
            No packages found
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-body)] max-w-md mx-auto">
            We could not find any travel packages matching &ldquo;{searchInput}
            &rdquo;. Try searching another destination or clear your filter.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => handleFilterChange('')}>
              Clear Search
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      )}
    </section>
  );
}

export function PackageDetailPage({ id }: { id: string }) {
  const pkg = destinations.find((item) => item.id === id);

  if (!pkg) {
    return <NotFoundPage />;
  }

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <a
          href="/packages"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-body)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Packages</span>
        </a>
      </div>

      {/* Top Section: Image Slider */}
      <ImageSlider images={pkg.images} altPrefix={pkg.title} />

      {/* Header Section */}
      <header className="pb-8 border-b border-[var(--color-border)] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <Badge>{pkg.category}</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-body)]">
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
              <span>{pkg.location}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
              <span>{pkg.duration}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-foreground)] tabular-nums">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{pkg.rating.toFixed(1)} Rating</span>
            </div>
          </div>
        </div>

        <div className="md:text-right shrink-0">
          <p className="text-xs font-semibold text-[var(--color-body)]">
            Package Price
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] tabular-nums">
            {pkg.price}
          </p>
        </div>
      </header>

      {/* Main Content: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Description & Itinerary */}
        <div className="lg:col-span-8 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Description
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-body)]">
              {pkg.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Itinerary
            </h2>
            <div className="relative border-l-2 border-[var(--color-border)] ml-3 pl-8 space-y-8">
              {pkg.itinerary.map((step, index) => (
                <div key={step.day} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-background)]"
                  />
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-[var(--color-accent)]">
                      {step.day || `Day ${index + 1}`}
                    </p>
                    <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[var(--color-body)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24">
          <Card className="space-y-6">
            <div className="space-y-1 pb-4 border-b border-[var(--color-border)]">
              <p className="text-xs font-semibold text-[var(--color-body)]">
                Starting from
              </p>
              <p className="text-3xl font-bold text-[var(--color-foreground)] tabular-nums">
                {pkg.price}
              </p>
              <p className="text-xs text-[var(--color-body)]">{pkg.duration}</p>
            </div>

            <a href="/contact" className="block">
              <Button variant="primary" className="w-full py-3 text-base">
                Get More Info
              </Button>
            </a>

            <ul className="space-y-3 pt-2 text-sm text-[var(--color-body)]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>Free cancellation up to 48 hours</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>Instant booking confirmation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>24/7 dedicated trip support</span>
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </article>
  );
}
