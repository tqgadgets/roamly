'use client';

import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Facebook,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import { instagramPosts } from '../../data/siteData';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/packages' },
  { label: 'Packages', href: '/packages' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: '/blog', icon: Instagram },
  { label: 'YouTube', href: '/packages', icon: Youtube },
  { label: 'Twitter', href: '/blog', icon: Twitter },
  { label: 'Facebook', href: '/contact', icon: Facebook },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = newsletterEmail.trim();

    if (!trimmed) {
      setNewsletterStatus('error');
      setNewsletterError('Please enter your email address.');
      return;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setNewsletterStatus('error');
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setNewsletterError('');
    setNewsletterStatus('loading');

    await new Promise((resolve) => setTimeout(resolve, 600));

    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#111827] text-gray-300 py-12 px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-10 pb-10">
          {/* Section 1 & 2: Brand, Description, Socials & Newsletter */}
          <div className="space-y-5">
            <a href="/" aria-label="Roamly home" className="inline-block">
              <img
                src="/logo-footer.png"
                alt="Roamly"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed text-gray-300">
              Thoughtfully curated journeys, boutique stays, and seamless global
              travel experiences designed for curious explorers and families.
            </p>

            {/* Social Media Row */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Follow Roamly on ${social.label}`}
                    className="rounded-full border border-gray-600 p-2.5 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-1 space-y-2.5">
              <p className="text-sm font-semibold text-white">
                Subscribe to our newsletter
              </p>
              {newsletterStatus === 'success' ? (
                <div
                  role="status"
                  className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/50 border border-emerald-800 rounded-xl px-3 py-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Watch your inbox for travel deals.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  noValidate
                  className="space-y-2"
                >
                  <div className="flex items-center rounded-full bg-gray-900/70 border border-gray-700 p-1 focus-within:ring-2 focus-within:ring-[var(--color-accent)]">
                    <label htmlFor="footer-newsletter" className="sr-only">
                      Email address for newsletter
                    </label>
                    <input
                      id="footer-newsletter"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterStatus === 'error') {
                          setNewsletterStatus('idle');
                          setNewsletterError('');
                        }
                      }}
                      placeholder="Your email address"
                      className="min-w-0 flex-1 bg-transparent px-3.5 py-1.5 text-xs text-white placeholder:text-gray-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'loading'}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-semibold transition-all duration-200 active:scale-95 disabled:opacity-60 cursor-pointer shrink-0"
                    >
                      {newsletterStatus === 'loading' ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </button>
                  </div>
                  {newsletterStatus === 'error' && newsletterError && (
                    <p className="text-xs text-red-400">{newsletterError}</p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Section 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>hello@roamly.travel</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="tabular-nums">+1 (415) 890-4312</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>742 Market Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Section 5: Instagram Post */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-white">Instagram Post</h3>
              <a
                href="/packages"
                className="text-xs font-semibold text-[var(--color-accent)] hover:underline"
              >
                @roamly.travel
              </a>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href="/packages"
                  aria-label={`Explore packages inspired by ${post.alt}`}
                  className="block aspect-square overflow-hidden rounded-xl bg-gray-800 group"
                >
                  <img
                    src={post.src}
                    alt={post.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-4 text-center text-xs text-gray-400">
          <p>&copy; 2026 Roamly. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/#about" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/#about" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
