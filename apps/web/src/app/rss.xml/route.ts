import { siteConfig } from '@/config/site';
import { getBlogPosts } from '@/lib/content';

function escape(input: string): string {
  return input.replace(/[<>&'"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c] as string
  );
}

export const revalidate = 3600;

export async function GET() {
  const { items } = await getBlogPosts({ limit: 50 });
  const base = siteConfig.url.replace(/\/$/, '');

  const entries = items
    .map(
      (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${base}/blog/${post.slug}</link>
      <guid isPermaLink="true">${base}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escape(post.excerpt)}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(siteConfig.name)} — Blog</title>
    <link>${base}/blog</link>
    <description>${escape(siteConfig.description)}</description>
    <language>en</language>
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
