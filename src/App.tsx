/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, type MouseEvent } from 'react';
import { HeroAndSearch } from './components/home/HeroAndSearch';
import { PromoAndDestinations } from './components/home/PromoAndDestinations';
import { SwitzerlandFeature } from './components/home/SwitzerlandFeature';
import { TrustTestimonialsCta } from './components/home/TrustTestimonialsCta';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import {
  BlogDetailPage,
  BlogListingPage,
  NotFoundPage,
} from './components/pages/BlogAndNotFoundPages';
import { ContactPage } from './components/pages/ContactPage';
import {
  HotelsPage,
  ServicesPage,
} from './components/pages/HotelsAndServicesPages';
import {
  PackageDetailPage,
  PackagesListingPage,
} from './components/pages/PackagePages';
import { blogs, destinations, HERO_IMAGE } from './data/siteData';

interface RouteLocation {
  pathname: string;
  search: string;
}

function normalizePathname(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path || '/';
}

function readLocation(): RouteLocation {
  return {
    pathname: normalizePathname(window.location.pathname),
    search: window.location.search,
  };
}

function updateMetaTag(
  selector: string,
  attribute: 'name' | 'property',
  key: string,
  value: string
) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}

function resolvePageMetadata(pathname: string): {
  title: string;
  description: string;
  image: string;
} {
  const defaultTitle = 'Roamly | Discover Your Next Adventure';
  const defaultDescription =
    'Explore breathtaking destinations, book unforgettable tours, and create memories that last forever with Roamly.';

  if (pathname === '/') {
    return {
      title: defaultTitle,
      description: defaultDescription,
      image: HERO_IMAGE,
    };
  }

  if (pathname === '/packages') {
    return {
      title: 'Travel Packages | Roamly',
      description:
        'Browse handpicked coastal cruises, alpine retreats, and family-friendly tour packages with Roamly.',
      image: HERO_IMAGE,
    };
  }

  if (pathname.startsWith('/packages/')) {
    const id = decodeURIComponent(pathname.slice('/packages/'.length));
    const pkg = destinations.find((item) => item.id === id);
    if (pkg) {
      return {
        title: `${pkg.title} | Roamly`,
        description: pkg.description[0] ?? defaultDescription,
        image: pkg.image,
      };
    }
  }

  if (pathname === '/blog') {
    return {
      title: 'Travel Blog & Guides | Roamly',
      description:
        'Read destination stories, hidden beach guides, and slow travel tips from Roamly writers.',
      image: blogs[0]?.image ?? HERO_IMAGE,
    };
  }

  if (pathname.startsWith('/blog/')) {
    const id = decodeURIComponent(pathname.slice('/blog/'.length));
    const post = blogs.find((item) => item.id === id);
    if (post) {
      return {
        title: `${post.title} | Roamly`,
        description: post.excerpt,
        image: post.image,
      };
    }
  }

  if (pathname === '/hotels') {
    return {
      title: 'Hotel & Resort | Roamly',
      description:
        'Stay in our top-rated resorts and boutique properties across the most popular destinations.',
      image: '/resort-bali.jpg',
    };
  }

  if (pathname === '/services') {
    return {
      title: 'Our Services | Roamly',
      description:
        'Explore custom itineraries, group tours, flight and hotel bookings, and 24/7 travel support.',
      image: HERO_IMAGE,
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Get in Touch | Roamly',
      description:
        'Contact Roamly travel specialists for custom itineraries, package inquiries, and 24/7 trip support.',
      image: HERO_IMAGE,
    };
  }

  return {
    title: 'Page Not Found | Roamly',
    description: defaultDescription,
    image: HERO_IMAGE,
  };
}

export default function App() {
  const [route, setRoute] = useState<RouteLocation>(() => readLocation());

  useEffect(() => {
    const handlePopState = () => {
      setRoute(readLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = resolvePageMetadata(route.pathname);
    document.title = meta.title;
    updateMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    updateMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      meta.description
    );
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', meta.image);
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    updateMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      meta.description
    );
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', meta.image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      'href',
      `${window.location.origin}${route.pathname}`
    );
  }, [route.pathname]);

  const handleLinkClick = (event: MouseEvent<HTMLDivElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = (event.target as HTMLElement | null)?.closest('a');
    if (!target) {
      return;
    }

    const href = target.getAttribute('href');
    if (!href || !href.startsWith('/')) {
      return;
    }

    event.preventDefault();
    const url = new URL(href, window.location.origin);
    const nextPathname = normalizePathname(url.pathname);

    window.history.pushState({}, '', `${nextPathname}${url.search}${url.hash}`);
    setRoute({ pathname: nextPathname, search: url.search });

    if (url.hash) {
      const hashId = url.hash.slice(1);
      requestAnimationFrame(() => {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView();
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const renderPage = () => {
    const { pathname, search } = route;

    if (pathname === '/') {
      return (
        <>
          <HeroAndSearch />
          <PromoAndDestinations />
          <SwitzerlandFeature />
          <TrustTestimonialsCta />
        </>
      );
    }

    if (pathname === '/packages') {
      const searchParams = new URLSearchParams(search);
      const initialSearch = searchParams.get('search') ?? '';
      return <PackagesListingPage initialSearch={initialSearch} />;
    }

    if (pathname.startsWith('/packages/')) {
      const id = decodeURIComponent(pathname.slice('/packages/'.length));
      return id && !id.includes('/') ? (
        <PackageDetailPage id={id} />
      ) : (
        <NotFoundPage />
      );
    }

    if (pathname === '/blog') {
      return <BlogListingPage />;
    }

    if (pathname.startsWith('/blog/')) {
      const id = decodeURIComponent(pathname.slice('/blog/'.length));
      return id && !id.includes('/') ? (
        <BlogDetailPage id={id} />
      ) : (
        <NotFoundPage />
      );
    }

    if (pathname === '/hotels') {
      return <HotelsPage />;
    }

    if (pathname === '/services') {
      return <ServicesPage />;
    }

    if (pathname === '/contact') {
      return <ContactPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <div
      onClick={handleLinkClick}
      className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-body)]"
    >
      <Header />
      <main className="flex-1 pt-16">{renderPage()}</main>
      <Footer />
    </div>
  );
}
