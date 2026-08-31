import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CtaBand } from '@/components/sections';
import { Breadcrumbs, BlogCard, JsonLd, Markdown } from '@/components/shared';
import { getBlogPost, getBlogPosts, getBlogSlugs } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { articleSchema, breadcrumbSchema } from '@/lib/seo/structured-data';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return buildMetadata({ title: 'Post not found', noIndex: true });
  return buildMetadata({
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage?.url,
    type: 'article',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const { items } = await getBlogPosts({ limit: 4 });
  const related = items.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="section-pad">
        <div className="container-page max-w-3xl">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: post.title },
            ]}
          />
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-primary">{post.category}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight">{post.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="mt-6 flex items-center gap-3">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
            ) : null}
            <div className="text-sm">
              <p className="font-medium">{post.author.name}</p>
              {post.author.role ? (
                <p className="text-muted-foreground">{post.author.role}</p>
              ) : null}
            </div>
          </div>

          {post.coverImage ? (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alt || post.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="mt-10">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="section-pad bg-secondary/30">
          <div className="container-page flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">More from the blog</h2>
              <Link href="/blog" className="text-sm font-medium text-primary">
                View all
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
