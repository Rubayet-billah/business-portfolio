import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CtaBand, Hero } from '@/components/sections';
import { getCaseStudies } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies',
  description: 'In-depth looks at how Agency engagements delivered measurable business outcomes.',
  path: '/case-studies',
});

export default async function CaseStudiesPage() {
  const { items } = await getCaseStudies();

  return (
    <>
      <Hero
        eyebrow="Case studies"
        title="How the work delivered"
        description="A closer look at the challenge, the approach and the numbers behind selected engagements."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Case Studies' },
        ]}
      />
      <section className="section-pad">
        <div className="container-page flex flex-col gap-6">
          {items.map((cs) => (
            <article
              key={cs.id}
              className="group relative rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{cs.client}</span>
                {cs.industry ? <span>· {cs.industry}</span> : null}
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                <Link href={`/case-studies/${cs.slug}`} className="after:absolute after:inset-0">
                  {cs.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {cs.challenge}
              </p>
              {cs.metrics.length ? (
                <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <dd className="text-lg font-semibold text-primary">{m.value}</dd>
                      <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    </div>
                  ))}
                </dl>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read the case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
