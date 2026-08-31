import type { BlogPost } from '@agency/types';
import { base, img } from './_shared';

const author = { name: 'Jordan Ellis', role: 'Founder & Strategy Lead', avatar: img('mo-author-1', 200, 200) };
const author2 = { name: 'Riley Chen', role: 'Head of SEO', avatar: img('mo-author-2', 200, 200) };

const body = `## Why this matters

Most teams treat marketing channels in isolation. The compounding wins come from
connecting brand, website and demand generation into one measurable system.

### Three things to get right

1. **Instrumentation first.** If you cannot measure it, you cannot improve it.
2. **One roadmap.** SEO, paid and content should share the same quarterly goals.
3. **Iterate weekly.** Small, frequent changes beat big quarterly rewrites.

> Real results only happen when strategy and execution live in the same place.

Ship, measure, adjust — then do it again.`;

export const blog: BlogPost[] = [
  {
    ...base(1),
    id: 'post-1',
    slug: 'web-design-mistakes-that-cost-you-leads',
    title: '12 web design mistakes that quietly cost you leads',
    excerpt: 'Common conversion leaks on service and e-commerce sites — and the quickest fixes for each.',
    content: body,
    coverImage: { url: img('mo-post-1'), alt: 'Wireframe sketches', width: 1200, height: 800 },
    category: 'Web Design',
    tags: ['cro', 'web design', 'ux'],
    author,
    readingMinutes: 7,
    publishedAt: '2026-07-20T09:00:00.000Z',
    featured: true,
  },
  {
    ...base(2),
    id: 'post-2',
    slug: 'what-is-website-marketing',
    title: 'What is website marketing? A complete guide',
    excerpt: 'How to turn a website from a brochure into your best-performing marketing channel.',
    content: body,
    coverImage: { url: img('mo-post-2'), alt: 'Analytics on a laptop', width: 1200, height: 800 },
    category: 'Marketing',
    tags: ['strategy', 'seo', 'analytics'],
    author: author2,
    readingMinutes: 9,
    publishedAt: '2026-06-28T09:00:00.000Z',
    featured: true,
  },
  {
    ...base(3),
    id: 'post-3',
    slug: 'how-to-choose-a-web-development-agency',
    title: 'How to choose a web design & development agency',
    excerpt: 'A working shortlist of criteria by specialism, plus how to brief and compare vendors.',
    content: body,
    coverImage: { url: img('mo-post-3'), alt: 'Team reviewing designs', width: 1200, height: 800 },
    category: 'Industry',
    tags: ['agencies', 'procurement'],
    author,
    readingMinutes: 11,
    publishedAt: '2026-06-05T09:00:00.000Z',
    featured: true,
  },
  {
    ...base(4),
    id: 'post-4',
    slug: 'google-ads-budget-planning',
    title: 'How to plan a Google Ads budget that actually pays back',
    excerpt: 'A simple model for setting spend based on target CPA, close rate and margin.',
    content: body,
    coverImage: { url: img('mo-post-4'), alt: 'Spreadsheet model', width: 1200, height: 800 },
    category: 'Paid Media',
    tags: ['google ads', 'ppc', 'budgeting'],
    author,
    readingMinutes: 6,
    publishedAt: '2026-05-18T09:00:00.000Z',
    featured: false,
  },
  {
    ...base(5),
    id: 'post-5',
    slug: 'seo-content-briefs-that-rank',
    title: 'How to write SEO content briefs that actually rank',
    excerpt: 'The brief template our editors use to hit search intent on the first draft.',
    content: body,
    coverImage: { url: img('mo-post-5'), alt: 'Editorial brief', width: 1200, height: 800 },
    category: 'SEO',
    tags: ['seo', 'content'],
    author: author2,
    readingMinutes: 8,
    publishedAt: '2026-04-30T09:00:00.000Z',
    featured: false,
  },
  {
    ...base(6),
    id: 'post-6',
    slug: 'brand-refresh-vs-rebrand',
    title: 'Brand refresh vs. rebrand: which does your business need?',
    excerpt: 'A decision framework for evolving your identity without losing equity.',
    content: body,
    coverImage: { url: img('mo-post-6'), alt: 'Brand moodboard', width: 1200, height: 800 },
    category: 'Branding',
    tags: ['branding', 'identity'],
    author,
    readingMinutes: 5,
    publishedAt: '2026-04-08T09:00:00.000Z',
    featured: false,
  },
];
