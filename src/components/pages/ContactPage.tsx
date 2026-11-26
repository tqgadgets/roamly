import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../forms/ContactForm';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge>Travel Concierge</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          Get in Touch
        </h1>
        <p className="text-base text-[var(--color-body)]">
          Have questions about a destination package, group booking, or custom
          itinerary? Send us a note and a travel specialist will respond promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </div>

        {/* Right: Contact Info Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <Card className="space-y-6">
            <h2 className="text-xl font-bold text-[var(--color-foreground)]">
              Direct Contact
            </h2>

            <ul className="space-y-5 text-sm text-[var(--color-body)]">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    Email
                  </p>
                  <p>hello@govibe.travel</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    Phone
                  </p>
                  <p className="tabular-nums">+1 (415) 890-4312</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    Office
                  </p>
                  <p>
                    742 Market Street, Suite 400
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    Support Hours
                  </p>
                  <p>Mon – Fri, 9:00 AM – 6:00 PM PST</p>
                </div>
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </section>
  );
}
