'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '../ui/Button';

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'REPLACE_ME';
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'REPLACE_ME';
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'REPLACE_ME';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) {
      nextErrors.subject = 'Please add a subject for your inquiry.';
    }
    if (!message.trim()) {
      nextErrors.message = 'Please write a short message about your trip.';
    } else if (message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Spam honeypot check: silently succeed without sending
    if (honeypot.trim().length > 0) {
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('loading');
    setStatusMessage('');

    const isEmailJsConfigured =
      EMAILJS_SERVICE_ID !== 'REPLACE_ME' &&
      EMAILJS_TEMPLATE_ID !== 'REPLACE_ME' &&
      EMAILJS_PUBLIC_KEY !== 'REPLACE_ME';

    try {
      if (isEmailJsConfigured) {
        const response = await fetch(
          'https://api.emailjs.com/api/v1.0/email/send',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service_id: EMAILJS_SERVICE_ID,
              template_id: EMAILJS_TEMPLATE_ID,
              user_id: EMAILJS_PUBLIC_KEY,
              template_params: {
                from_name: name.trim(),
                from_email: email.trim(),
                subject: subject.trim(),
                message: message.trim(),
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to send message via email provider.');
        }
      } else {
        // Fallback mock success when EmailJS environment variables are not configured yet
        await new Promise((resolve) => setTimeout(resolve, 750));
      }

      setStatus('success');
      setStatusMessage(
        'Thank you for reaching out! Our travel specialists will reply within 24 hours.'
      );
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
      setStatusMessage(
        'Something went wrong while sending your message. Please try again or email hello@govibe.travel directly.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Hidden Honeypot Field for Spam Prevention */}
      <input
        type="text"
        name="honeypot"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === 'success' && (
        <div
          role="status"
          className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p>{statusMessage}</p>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p>{statusMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-[var(--color-foreground)]"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="Elena Rostova"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-[var(--color-foreground)]"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email)
                setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-subject"
          className="block text-sm font-semibold text-[var(--color-foreground)]"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            if (errors.subject)
              setErrors((prev) => ({ ...prev, subject: undefined }));
          }}
          placeholder="Custom Swiss Alps itinerary question"
          required
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
        {errors.subject && (
          <p className="text-xs text-red-600">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[var(--color-foreground)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message)
              setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          placeholder="Tell us where you are dreaming of traveling, preferred dates, and group size..."
          required
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-y"
        />
        {errors.message && (
          <p className="text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'loading'}
          className="w-full sm:w-auto gap-2 px-8 py-3"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
