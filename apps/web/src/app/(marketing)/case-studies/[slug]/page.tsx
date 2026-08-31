import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CtaBand, Hero, StatBand } from '@/components/sections';
import { JsonLd, TestimonialCard } from '@/components/shared';
import {
  getCaseStudy,
  getCaseStudySlugs,
  getTestimonialById,
} from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/structured-data';

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return buildMetadata({ title: 'Case study not found', noIndex: true });
  return buildMetadata({
    title: cs.seo?.title ?? cs.title,
    description: cs.seo?.description ?? cs.challenge,
    path: `/case-studies/${cs.slug}`,
    type: 'article',
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  const testimonial = cs.testimonialId ? await getTestimonialById(cs.testimonialId) : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
          { name: cs.title, path: `/case-studies/${cs.slug}` },
        ])}
      />
      <Hero
        variant="navy"
        eyebrow={cs.client}
        title={cs.title}
        description={cs.industry ? `${cs.industry} · ${new Date(cs.publishedAt).getFullYear()}` : undefined}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: cs.title },
        ]}
      />

      {cs.metrics.length ? (
        <section className="section-pad">
          <div className="container-page">
            <StatBand
              stats={cs.metrics.map((m) => ({ label: m.label, value: m.value }))}
            />
          </div>
        </section>
      ) : null}

      <section className="section-pad bg-secondary/30">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {[
            ['The challenge', cs.challenge],
            ['Our approach', cs.approach],
            ['The outcome', cs.outcome],
          ].map(([heading, text]) => (
            <div key={heading} className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                {heading}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {testimonial ? (
        <section className="section-pad">
          <div className="container-page max-w-xl">
            <TestimonialCard testimonial={testimonial} />
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
