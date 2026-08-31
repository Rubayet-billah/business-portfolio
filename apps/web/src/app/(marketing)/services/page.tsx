import type { Metadata } from 'next';
import { CtaBand, FaqAccordion, Hero, ProcessSteps, ServiceGrid } from '@/components/sections';
import { JsonLd } from '@/components/shared';
import { getFaqsByScope, getServices } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { itemListSchema } from '@/lib/seo/structured-data';

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'SEO, Google Ads, Facebook advertising, social media, web design, UI/UX, content, branding, graphics and motion — the full Agency service line.',
  path: '/services',
});

const PROCESS = [
  { step: 1, title: 'Discovery & business analysis', description: 'Goals, audience, competitors, baseline.' },
  { step: 2, title: 'Strategy', description: 'A prioritised roadmap with measurable KPIs.' },
  { step: 3, title: 'Production', description: 'We design, build and write the assets.' },
  { step: 4, title: 'Launch & tracking', description: 'Go live with analytics wired in.' },
  { step: 5, title: 'Optimisation', description: 'Weekly iteration against the metrics.' },
  { step: 6, title: 'Reporting', description: 'Plain-language reporting and next steps.' },
];

export default async function ServicesPage() {
  const [{ items: services }, faqs] = await Promise.all([
    getServices(),
    getFaqsByScope('services'),
  ]);

  return (
    <>
      <JsonLd
        data={itemListSchema(
          'Agency services',
          services.map((s) => ({ name: s.title, url: `/services/${s.slug}` }))
        )}
      />
      <Hero
        eyebrow="Services"
        title="Bring your brand, website and marketing together"
        description="Agency brings brand strategy, creative, web development, SEO, paid advertising and social into one coordinated approach that helps your business earn attention and build pipeline."
        primaryCta={{ label: 'Get a Proposal', href: '/contact-us' }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services' },
        ]}
      />
      <ServiceGrid
        services={services}
        eyebrow="What we do"
        title="Ten services, one accountable team"
      />
      <ProcessSteps steps={PROCESS} />
      <FaqAccordion faqs={faqs} />
      <CtaBand />
    </>
  );
}
