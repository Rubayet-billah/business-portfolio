import type { Metadata } from 'next';
import { CtaBand, Hero } from '@/components/sections';
import { ProjectCard } from '@/components/shared';
import { getPortfolioItems } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Portfolio',
  description: 'Web design, graphic design, SEO and ad campaign work from the Agency team.',
  path: '/portfolio',
});

export default async function PortfolioPage() {
  const { items } = await getPortfolioItems({ limit: 60 });

  return (
    <>
      <Hero
        eyebrow="Portfolio"
        title="Web, graphic, SEO and campaign work"
        description="A cross-section of projects we have taken from brief to launch — with outcomes we can point to."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Portfolio' },
        ]}
      />
      <section className="section-pad">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} id={item.slug} className="scroll-mt-28">
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Have a project in mind?" />
    </>
  );
}
