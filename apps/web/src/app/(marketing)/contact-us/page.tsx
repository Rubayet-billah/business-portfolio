import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Hero, ContactForm } from '@/components/sections';
import { SocialIcons } from '@/components/shared';
import { getServices, getSiteSettings } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Tell us about your project and get a free proposal — or call the Agency team to talk it through.',
  path: '/contact-us',
});

export default async function ContactPage() {
  const [settings, { items: services }] = await Promise.all([getSiteSettings(), getServices()]);
  const serviceOptions = services.map((s) => ({ value: s.slug, label: s.title }));

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Tell us what you're trying to grow"
        description="Share your requirements and get a proposal for free — or just call us to discuss."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact Us' },
        ]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Request a proposal</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We usually reply within one business day.
            </p>
            <div className="mt-6">
              <ContactForm serviceOptions={serviceOptions} source="proposal" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p>{settings.address}</p>
                  {settings.registeredAddress ? (
                    <p className="mt-1 text-muted-foreground">{settings.registeredAddress}</p>
                  ) : null}
                </div>
              </div>
              <a href={`tel:${settings.phone}`} className="flex items-center gap-3 hover:text-primary">
                <Phone className="size-5 text-primary" aria-hidden />
                {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`} className="flex items-center gap-3 hover:text-primary">
                <Mail className="size-5 text-primary" aria-hidden />
                {settings.email}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Follow
              </p>
              <SocialIcons links={settings.socials} iconClassName="size-5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
