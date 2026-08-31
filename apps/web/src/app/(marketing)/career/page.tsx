import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@agency/ui';
import { Hero } from '@/components/sections';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Careers',
  description: 'Join Agency — a small, senior team that ships work it is proud of.',
  path: '/career',
});

const OPENINGS: { title: string; type: string; location: string }[] = [
  // No live openings right now — the dashboard will manage this list later.
];

export default function CareerPage() {
  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Do the best work of your career"
        description="We are a small, senior team. We hire people who care about craft and outcomes in equal measure."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Careers' },
        ]}
      />

      <section className="section-pad">
        <div className="container-page max-w-2xl">
          {OPENINGS.length ? (
            <ul className="flex flex-col gap-3">
              {OPENINGS.map((role) => (
                <li
                  key={role.title}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-card p-5"
                >
                  <div>
                    <p className="font-semibold">{role.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {role.type} · {role.location}
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact-us">Apply</Link>
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h2 className="text-lg font-semibold">No open roles right now</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We still like to meet good people. Send your portfolio and tell us what you do best —
                we keep every strong application on file.
              </p>
              <Button asChild className="mt-5">
                <Link href="/contact-us">Introduce yourself</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
