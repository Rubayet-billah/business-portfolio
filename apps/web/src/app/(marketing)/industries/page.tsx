import type { Metadata } from 'next';
import { CtaBand, Hero, IndustryGrid } from '@/components/sections';
import { getIndustries } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Industries We Serve',
  description:
    'Agency has grown brands across e-commerce, hospitality, EdTech, energy, wellness and more.',
  path: '/industries',
});

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <Hero
        eyebrow="Industries"
        title="Sectors we serve"
        description="We tailor strategy, creative and measurement to how buyers in your sector actually research and decide."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Industries' },
        ]}
      />
      <IndustryGrid industries={industries} eyebrow="" title="" />
      <CtaBand title="Not sure if we have worked in your space?" description="We probably have — and if not, the fundamentals still apply. Let's talk." />
    </>
  );
}
