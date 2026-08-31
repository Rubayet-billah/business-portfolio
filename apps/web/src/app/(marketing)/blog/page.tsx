import type { Metadata } from 'next';
import { Hero } from '@/components/sections';
import { BlogCard } from '@/components/shared';
import { getBlogPosts } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Practical guides on web design, SEO, paid media and brand from the Agency team.',
  path: '/blog',
});

export default async function BlogPage() {
  const { items } = await getBlogPosts({ limit: 100 });

  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Insights on building demand"
        description="How-tos and frameworks on web, SEO, paid media, content and brand — written by the people doing the work."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog' },
        ]}
      />
      <section className="section-pad">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
