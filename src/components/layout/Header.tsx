'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destination', href: '/packages' },
  { label: 'Hotel & Resort', href: '/hotels' },
  { label: 'Service', href: '/services' },
  { label: 'Blog', href: '/blog' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState(() => ({
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
  }));

  useEffect(() => {
    const syncLocation = () => {
      setActiveLocation({
        pathname: window.location.pathname,
        hash: window.location.hash,
      });
    };

    const handleDocumentClick = () => {
      requestAnimationFrame(syncLocation);
    };

    window.addEventListener('popstate', syncLocation);
    document.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('popstate', syncLocation);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return activeLocation.pathname === '/' && !activeLocation.hash;
    }
    if (href.startsWith('/#')) {
      return (
        activeLocation.pathname === '/' &&
        activeLocation.hash === href.slice(1)
      );
    }
    return activeLocation.pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Left: Logo */}
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Roamly home"
            className="inline-flex items-center whitespace-nowrap shrink-0"
          >
            <img
              src="/logo.png"
              alt="Roamly"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Center (Desktop): Nav Links Pill */}
          <nav aria-label="Primary navigation" className="hidden md:flex">
            <div className="flex items-center gap-1 rounded-full bg-[#e5c7a4]/40 px-2 py-1.5">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-[var(--color-foreground)] font-semibold shadow-sm'
                        : 'text-[var(--color-foreground)] hover:bg-white hover:font-semibold'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Right: Contact CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="/contact" className="hidden sm:inline-block">
              <Button
                variant="primary"
                className="text-sm px-5 py-2 whitespace-nowrap shrink-0"
              >
                Contact
              </Button>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={
                isMobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={isMobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden overflow-y-auto bg-[var(--color-card)]/95 backdrop-blur-md border-t border-[var(--color-border)] p-6 flex flex-col justify-between">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-[var(--color-foreground)] hover:bg-orange-50 hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[var(--color-border)]">
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block"
            >
              <Button variant="primary" className="w-full text-base">
                Contact
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
