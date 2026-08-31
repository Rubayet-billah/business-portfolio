import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumbs, Markdown } from '@/components/shared';
import { getLegalPage } from '@/content/legal';
import { buildMetadata } from '@/lib/seo/metadata';
import { formatDate } from '@/lib/utils';

export function legalMetadata(slug: string): Metadata {
  const page = getLegalPage(slug);
  if (!page) return buildMetadata({ title: 'Not found', noIndex: true });
  return buildMetadata({ title: page.title, path: `/${page.slug}`, description: `${page.title} — Agency.` });
}

export function LegalPageView({ slug }: { slug: string }) {
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: page.title },
        ]}
      />
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{page.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated {formatDate(page.updatedAt)}
      </p>
      <div className="mt-8">
        <Markdown>{page.body}</Markdown>
      </div>
    </>
  );
}
