'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Clock,
  Heart,
  MapPin,
  Mountain,
  Star,
  Users,
  Utensils,
} from 'lucide-react';
import type { DestinationPackage } from '../../data/siteData';

const defaultReviewsById: Record<string, number> = {
  'california-sunset-cruise': 124,
  'swiss-alpine-retreat': 186,
  'bali-ubud-sanctuary': 152,
  'kyoto-heritage-walk': 98,
  'amalfi-coast-getaway': 143,
  'banff-emerald-peaks': 117,
};

export interface PackageCardProps {
  pkg: DestinationPackage & { reviews?: number };
}

export function PackageCard({ pkg }: PackageCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const reviewCount = pkg.reviews ?? defaultReviewsById[pkg.id] ?? 124;
  const [priceAmount, priceUnit] = pkg.price.split('/');

  return (
    <article className="bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 motion-reduce:transform-none">
      {/* Top Half: Image + Sweeping Wave + Glass Heart + Category Badge */}
      <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-t-3xl bg-stone-200">
        <a href={`/packages/${pkg.id}`} className="block w-full h-full">
          <img
            src={pkg.image}
            alt={pkg.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none"
          />
        </a>

        <button
          type="button"
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-label={
            isFavorite
              ? `Remove ${pkg.title} from saved packages`
              : `Save ${pkg.title} to favorites`
          }
          aria-pressed={isFavorite}
          className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 text-white hover:bg-white/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-[#e76f51] text-[#e76f51]' : 'text-white'
            }`}
          />
        </button>

        <div className="absolute bottom-[20px] left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-[#f3d5b5] text-[#1f2937] px-4 py-1.5 text-xs font-semibold shadow-sm">
          {pkg.category === 'Mountain' ? (
            <Mountain className="w-3.5 h-3.5 text-[#1f2937]" />
          ) : (
            <Users className="w-3.5 h-3.5 text-[#1f2937]" />
          )}
          <span>{pkg.category}</span>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-1 left-0 w-full h-[35px] z-10 pointer-events-none"
        >
          <svg
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,32 C320,80 640,0 1440,48 L1440,74 L0,74 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Half: Content + Curved Beige Footer */}
      <div className="-mt-2 relative z-10 flex-1 flex flex-col overflow-hidden rounded-b-3xl bg-white">
        {/* Middle Section: Rating, Title, Orange Underline, Features */}
        <div className="pt-3 pb-10 px-6 flex-1 flex flex-col bg-white">
          <div className="flex justify-end">
            <div className="inline-flex items-center gap-1.5 text-sm tabular-nums">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-[#1f2937]">
                {pkg.rating.toFixed(1)}
              </span>
              <span className="text-gray-500">({reviewCount} reviews)</span>
            </div>
          </div>

          <h3 className="mt-2 text-2xl font-bold text-[#0f172a] leading-snug">
            <a
              href={`/packages/${pkg.id}`}
              className="hover:text-[#e76f51] transition-colors"
            >
              {pkg.title}
            </a>
          </h3>

          <div className="w-16 h-1 bg-[#e76f51] rounded-full my-3" />

          <div className="mt-auto pt-2 flex flex-wrap items-center gap-x-4 gap-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#fcf4e8] flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#e76f51]" />
              </span>
              <span className="text-xs sm:text-sm text-[#4b5563]">
                {pkg.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#fcf4e8] flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#e76f51]" />
              </span>
              <span className="text-xs sm:text-sm text-[#4b5563]">
                {pkg.duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#fcf4e8] flex items-center justify-center shrink-0">
                <Utensils className="w-3.5 h-3.5 text-[#e76f51]" />
              </span>
              <span className="text-xs sm:text-sm text-[#4b5563]">
                Including meals and excursions
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Curved Beige Footer */}
        <div className="bg-[#fcf9f2] rounded-t-[2rem] rounded-b-3xl -mt-6 px-6 py-5 flex items-center justify-between gap-3 border-t border-[#f3eadb]">
          <div className="flex items-baseline gap-0.5 tabular-nums">
            <span className="text-2xl font-bold text-[#1f2937]">
              {priceAmount}
            </span>
            {priceUnit && (
              <span className="text-xs font-medium text-gray-500">
                /{priceUnit}
              </span>
            )}
          </div>

          <a
            href={`/packages/${pkg.id}`}
            className="inline-flex items-center gap-2 bg-[#e76f51] hover:bg-[#d65a3b] rounded-full px-6 py-3 text-sm text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e76f51] focus-visible:ring-offset-2"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
