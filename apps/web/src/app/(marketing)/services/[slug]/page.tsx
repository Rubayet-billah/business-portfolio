import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import {
  CtaBand,
  FaqAccordion,
  FeatureList,
  Hero,
  LogoStrip,
  PillLinks,
  PortfolioGrid,
  ProcessSteps,
  StatBand,
  Testimonials,
} from '@/components/sections';
import { JsonLd } from '@/components/shared';
import {
  getFaqsForService,
  getPortfolioByService,
  getServiceBySlug,
  getServiceSlugs,
  getServices,
  getTestimonialsByService,
} from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo/structured-data';

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: 'Service not found', noIndex: true });
  return buildMetadata({
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.shortDescription,
    path: `/services/${service.slug}`,
    keywords: service.seo?.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const [related, testimonials, serviceFaqs, { items: allServices }] = await Promise.all([
    getPortfolioByService(service.slug, 3),
    getTestimonialsByService(service.slug, 3),
    getFaqsForService(service.slug),
    getServices(),
  ]);

  const faqs = [
    ...serviceFaqs,
    ...service.faqs.map((qa, i) => ({
      id: `svc-faq-${i}`,
      question: qa.question,
      answer: qa.answer,
      scope: 'services' as const,
      serviceSlug: service.slug,
      status: 'published' as const,
      order: i,
      createdAt: service.createdAt,
      updatedAt: service.updatedAt,
    })),
  ];

  const pillLinks = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 8)
    .map((s) => ({ label: s.title, href: `/services/${s.slug}` }));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <Hero
        variant="navy"
        eyebrow={service.category ?? 'Service'}
        title={service.title}
        description={service.tagline}
        primaryCta={{ label: 'Book a free consultation', href: '/contact-us' }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.title },
        ]}
      >
        {service.stats.length ? (
          <div className="mt-10 w-full">
            <StatBand
              stats={service.stats}
              className="border-white/15 bg-white/10 [&>div]:bg-transparent [&_dd]:text-brand-navy-foreground [&_dt]:text-brand-navy-foreground/70"
            />
          </div>
        ) : null}
      </Hero>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">{service.shortDescription}</h2>
            <p className="leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
          {service.deliverables.length ? (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                What you get
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {service.features.length ? (
        <FeatureList
          eyebrow="Capabilities"
          title={`What our ${service.title.toLowerCase()} covers`}
          features={service.features}
        />
      ) : null}

      {service.process.length ? <ProcessSteps steps={service.process} /> : null}

      {service.techStack.length ? (
        <LogoStrip label="Tools we use" items={service.techStack} />
      ) : null}

      {related.length ? (
        <PortfolioGrid items={related} eyebrow="Selected work" title="Recent projects" />
      ) : null}

      {testimonials.length ? (
        <Testimonials
          testimonials={testimonials}
          eyebrow="Client stories"
          title={`Results from our ${service.title.toLowerCase()} clients`}
        />
      ) : null}

      {faqs.length ? <FaqAccordion faqs={faqs} /> : null}

      <CtaBand title={`Ready to talk ${service.title.toLowerCase()}?`} />

      <PillLinks links={pillLinks} />
    </>
  );
}
