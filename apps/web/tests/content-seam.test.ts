import {
  getBlogPosts,
  getServiceBySlug,
  getServices,
  getSiteSettings,
} from '@/lib/content';

describe('content seam (fixture transport)', () => {
  it('lists every service ordered by `order`', async () => {
    const { items, meta } = await getServices();
    expect(items).toHaveLength(10);
    expect(meta.total).toBe(10);
    const orders = items.map((s) => s.order);
    expect([...orders]).toEqual([...orders].sort((a, b) => a - b));
  });

  it('resolves a service by slug and returns null for an unknown one', async () => {
    const known = await getServiceBySlug('google-ads');
    expect(known?.title).toBe('Google Ads');
    expect(await getServiceBySlug('does-not-exist')).toBeNull();
  });

  it('paginates blog posts and reports meta', async () => {
    const page1 = await getBlogPosts({ page: 1, limit: 2 });
    expect(page1.items).toHaveLength(2);
    expect(page1.meta).toMatchObject({ page: 1, limit: 2, total: 6, totalPages: 3 });

    const page2 = await getBlogPosts({ page: 2, limit: 2 });
    expect(page2.items[0]?.id).not.toBe(page1.items[0]?.id);
  });

  it('sorts blog posts newest-first by publishedAt', async () => {
    const { items } = await getBlogPosts({ limit: 100 });
    const dates = items.map((p) => new Date(p.publishedAt).getTime());
    expect([...dates]).toEqual([...dates].sort((a, b) => b - a));
  });

  it('exposes site settings with primary nav', async () => {
    const settings = await getSiteSettings();
    expect(settings.siteName).toBe('Agency');
    expect(settings.primaryNav.find((n) => n.href === '/services')?.children.length).toBe(10);
  });
});
