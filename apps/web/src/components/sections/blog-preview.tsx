import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@agency/types';
import { Button } from '@agency/ui';
import { BlogCard, SectionHeading } from '@/components/shared';

export function BlogPreview({
  posts,
  eyebrow = 'Insights',
  title = 'Latest from the blog',
  description,
}: {
  posts: BlogPost[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  if (!posts.length) return null;

  return (
    <section className="section-pad">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              Read the blog
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
