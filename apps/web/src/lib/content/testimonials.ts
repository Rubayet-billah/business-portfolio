import type { ListParams, Testimonial } from '@agency/types';
import { content } from './client';

export async function getTestimonials(params?: ListParams) {
  return content.testimonials.list({ sortBy: 'order', sortOrder: 'asc', limit: 60, ...params });
}

export async function getFeaturedTestimonials(limit = 6): Promise<Testimonial[]> {
  const { items } = await content.testimonials.list({ limit: 60 });
  const featured = items.filter((t) => t.featured);
  return (featured.length ? featured : items).slice(0, limit);
}

export async function getTestimonialById(id: string): Promise<Testimonial | null> {
  return content.testimonials.get(id);
}

export async function getTestimonialsByService(
  serviceSlug: string,
  limit = 3
): Promise<Testimonial[]> {
  const { items } = await content.testimonials.list({ limit: 60 });
  return items.filter((t) => t.serviceSlug === serviceSlug).slice(0, limit);
}
