import { ArrowLeft, ArrowRight, Calendar, Compass, User } from 'lucide-react';
import { blogs } from '../../data/siteData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function BlogListingPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div className="space-y-3 max-w-2xl">
        <Badge>Travel Journal</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          Stories &amp; Destination Guides
        </h1>
        <p className="text-base text-[var(--color-body)]">
          Practical field notes, seasonal recommendations, and packing guides from
          our local travel writers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((post) => (
          <a key={post.id} href={`/blog/${post.id}`} className="block group">
            <Card className="p-0 overflow-hidden h-full flex flex-col">
              <div className="aspect-[16/9] w-full bg-stone-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold text-[var(--color-accent)]">
                    {post.date}
                  </p>
                  <h2 className="text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--color-body)]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-body)]">
                  <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-foreground)]">
                    <User className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {post.author}
                  </span>
                  <span className="font-semibold text-[var(--color-accent)]">
                    Read Article
                  </span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}

export function BlogDetailPage({ id }: { id: string }) {
  const currentIndex = blogs.findIndex((item) => item.id === id);
  const post = currentIndex >= 0 ? blogs[currentIndex] : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const prevPost = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-body)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </a>
      </div>

      {/* Top: Large Featured Image */}
      <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-200 border border-[var(--color-border)] shadow-sm">
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-6 pt-2">
        <header className="space-y-4 pb-6 border-b border-[var(--color-border)]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] leading-tight text-balance">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--color-body)]">
            <span className="inline-flex items-center gap-2 font-medium text-[var(--color-foreground)]">
              <User className="w-4 h-4 text-[var(--color-accent)]" />
              <span>{post.author}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--color-accent)]" />
              <span>{post.date}</span>
            </span>
          </div>
        </header>

        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[var(--color-body)]">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {(prevPost || nextPost) && (
          <nav
            aria-label="Blog post pagination"
            className="pt-8 mt-8 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {prevPost ? (
              <a
                href={`/blog/${prevPost.id}`}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                  <img
                    src={prevPost.image}
                    alt={prevPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 motion-reduce:transform-none"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-body)]">
                    <ArrowLeft className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Previous Post
                  </span>
                  <h2 className="text-sm font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                    {prevPost.title}
                  </h2>
                </div>
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextPost ? (
              <a
                href={`/blog/${nextPost.id}`}
                className="group flex items-center justify-end gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/50 transition-colors text-right"
              >
                <div className="min-w-0 space-y-1">
                  <span className="inline-flex items-center justify-end gap-1 text-xs font-semibold text-[var(--color-body)]">
                    Next Post
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </span>
                  <h2 className="text-sm font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                    {nextPost.title}
                  </h2>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                  <img
                    src={nextPost.image}
                    alt={nextPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 motion-reduce:transform-none"
                  />
                </div>
              </a>
            ) : (
              <div className="hidden sm:block" />
            )}
          </nav>
        )}
      </div>
    </article>
  );
}

export function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[var(--color-accent)] flex items-center justify-center mx-auto border border-orange-100">
          <Compass className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            Page Not Found
          </h1>
          <p className="text-base text-[var(--color-body)]">
            The destination or story you are looking for could not be found or may
            have moved.
          </p>
        </div>
        <div>
          <a href="/">
            <Button variant="primary">Return Home</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
