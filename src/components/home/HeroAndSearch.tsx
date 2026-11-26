'use client';

import { type FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Briefcase,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageSquare,
  Phone,
  Plane,
  Send,
  User,
} from 'lucide-react';
import { destinations } from '../../data/siteData';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

const availableDestinations = Array.from(
  new Set(destinations.map((pkg) => pkg.location))
);

const heroWords = ['Life', 'is', 'short', 'and', 'the', 'world', 'is', 'wide'];

const heroSlides = [
  {
    src: '/hero-bg.jpg',
    alt: 'Sunny tropical beach with white sand, leaning palm tree, and turquoise waves',
  },
  {
    src: '/src/assets/images/dest_swiss_alps_1795588097229.jpg',
    alt: 'Dramatic snow-capped Swiss Alps peaks over an emerald alpine valley',
  },
  {
    src: '/src/assets/images/dest_european_city_1795602106394.jpg',
    alt: 'Historic European canal city skyline with sunlit stone bridges',
  },
];

export function HeroAndSearch() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const submitTimerRef = useRef<number | null>(null);
  const destinationContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fontId = 'caveat-google-font';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const preloadLinks: HTMLLinkElement[] = [];

    heroSlides.forEach((slide) => {
      const existing = document.head.querySelector(
        `link[rel="preload"][as="image"][href="${slide.src}"]`
      );
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = slide.src;
        document.head.appendChild(link);
        preloadLinks.push(link);
      }

      const preloader = new window.Image();
      preloader.src = slide.src;
    });

    return () => {
      preloadLinks.forEach((link) => link.remove());
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        destinationContainerRef.current &&
        !destinationContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredDestinations = availableDestinations.filter((loc) =>
    loc.toLowerCase().includes(destinationQuery.trim().toLowerCase())
  );

  const handleEnquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedDestination = destinationQuery.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, '');

    if (!trimmedName || !trimmedPhone || !trimmedDestination) {
      setErrorMessage('Please enter your name, phone number, and destination.');
      return;
    }

    if (phoneDigits.length < 7) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    setErrorMessage('');
    setIsDropdownOpen(false);
    setIsSubmitting(true);

    submitTimerRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setPhone('');
      setDestinationQuery('');
      setMessage('');
    }, 1000);
  };

  return (
    <div id="home" className="scroll-mt-20">
      {/* A. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center pb-20 sm:pb-28 pt-12 sm:pt-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={heroSlides[currentSlide].src}
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              loading="eager"
              decoding="sync"
              referrerPolicy="no-referrer"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: [1, 1.05] }
              }
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 1.5, ease: 'easeInOut' },
                      scale: { duration: 6.5, ease: 'linear' },
                    }
              }
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
        />

        {/* Floating decorative elements (Suitcase & Plane) */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute top-16 left-16 z-10 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 items-center justify-center text-white shadow-lg"
        >
          <Briefcase className="w-6 h-6 text-[var(--color-accent)]" />
        </div>
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute bottom-32 right-20 z-10 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 items-center justify-center text-white shadow-lg"
        >
          <Plane className="w-6 h-6 text-white" />
        </div>

        {/* Center Hero Copy */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] text-balance [text-shadow:0_4px_15px_rgba(0,0,0,0.6)]">
            {heroWords.map((word, i) => {
              const isAccentWord = word === 'wide';
              return (
                <motion.span
                  key={`${word}-${i}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, filter: 'blur(0px)', y: 0 }
                      : { opacity: 0, filter: 'blur(8px)', y: 20 }
                  }
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.8, delay: i * 0.1, ease: 'easeOut' }
                  }
                  className={`inline-block mr-[0.26em] last:mr-0 ${
                    isAccentWord
                      ? "relative text-[var(--color-accent)] font-['Caveat',cursive] text-5xl md:text-7xl leading-none pb-1.5"
                      : ''
                  }`}
                >
                  {word}
                  {isAccentWord && (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 160 22"
                      fill="none"
                      preserveAspectRatio="none"
                      className="absolute left-0 -bottom-0.5 w-full h-3.5 text-[var(--color-accent)] pointer-events-none"
                    >
                      <path
                        d="M3 16C42 4 108 3 157 12"
                        stroke="currentColor"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </motion.span>
              );
            })}
          </h1>
          <Reveal immediate delay={0.75}>
            <p className="mt-4 text-lg md:text-xl font-medium text-white/95 max-w-2xl mx-auto leading-snug [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
              Discover handpicked coastal escapes, alpine retreats, and seamless
              guided tours crafted around unforgettable moments.
            </p>
          </Reveal>
          <Reveal immediate delay={0.9}>
            <div className="mt-6">
              <a href="/packages" className="inline-block">
                <Button
                  variant="primary"
                  className="group text-base font-semibold px-6 py-3 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-accent)]/50 gap-2"
                >
                  <span>Explore Now</span>
                  <Plane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* B. Overlapping Quick Enquiry Form */}
      <section
        aria-label="Quick trip enquiry"
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-20"
      >
        <Reveal immediate delay={0.25}>
          <Card className="p-5 sm:p-6 shadow-lg hover:shadow-lg bg-white">
            <h2
              className="text-xl md:text-2xl font-bold text-[var(--color-foreground)] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Enquiry
            </h2>

            {isSubmitted ? (
              <div
                role="status"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-[var(--color-foreground)]"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-sm sm:text-base font-medium">
                    Thank you! We will contact you shortly.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm whitespace-nowrap self-start sm:self-auto"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <label htmlFor="enquiry-name" className="sr-only">
                      Full Name
                    </label>
                    <User
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full bg-white border border-gray-200 rounded-xl p-3 pl-10 text-sm text-[var(--color-foreground)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="enquiry-phone" className="sr-only">
                      Phone Number
                    </label>
                    <Phone
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full bg-white border border-gray-200 rounded-xl p-3 pl-10 text-sm text-[var(--color-foreground)] placeholder:text-gray-400 tabular-nums focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                    />
                  </div>

                  <div ref={destinationContainerRef} className="relative">
                    <label htmlFor="enquiry-destination" className="sr-only">
                      Destination
                    </label>
                    <div className="relative">
                      <MapPin
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      />
                      <input
                        id="enquiry-destination"
                        type="text"
                        required
                        autoComplete="off"
                        role="combobox"
                        aria-expanded={isDropdownOpen}
                        aria-controls="destination-suggestions-listbox"
                        aria-autocomplete="list"
                        value={destinationQuery}
                        onChange={(e) => {
                          setDestinationQuery(e.target.value);
                          setIsDropdownOpen(true);
                        }}
                        onFocus={() => setIsDropdownOpen(true)}
                        onBlur={() => setIsDropdownOpen(false)}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setIsDropdownOpen(false);
                          }
                        }}
                        placeholder="Where to? (e.g. Bali, Switzerland)"
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 pl-10 text-sm text-[var(--color-foreground)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                      />
                    </div>

                    {isDropdownOpen && (
                      <div
                        id="destination-suggestions-listbox"
                        role="listbox"
                        aria-label="Destination suggestions"
                        className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto"
                      >
                        {filteredDestinations.length > 0 ? (
                          filteredDestinations.map((loc) => (
                            <button
                              key={loc}
                              type="button"
                              role="option"
                              aria-selected={destinationQuery === loc}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setDestinationQuery(loc);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-[var(--color-foreground)] hover:bg-gray-100 flex items-center gap-2.5 cursor-pointer transition-colors"
                            >
                              <MapPin
                                aria-hidden="true"
                                className="w-4 h-4 text-gray-400 shrink-0"
                              />
                              <span>{loc}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-2.5 text-sm text-gray-500">
                            No destinations found
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <label htmlFor="enquiry-message" className="sr-only">
                      Message
                    </label>
                    <MessageSquare
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                    <input
                      id="enquiry-message"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific requirements?"
                      className="w-full bg-white border border-gray-200 rounded-xl p-3 pl-10 text-sm text-[var(--color-foreground)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p
                    role="alert"
                    className="mt-3 text-xs font-medium text-red-600"
                  >
                    {errorMessage}
                  </p>
                )}

                <div className="mt-4 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full md:w-auto gap-2 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
