import Image from 'next/image';
import type { Metadata } from 'next';
import { CtaBand, FeatureList, Hero, StatBand } from '@/components/sections';
import { getSiteSettings, getTeam } from '@/lib/content';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Agency is a small, senior team built around one idea: marketing that is accountable to the numbers. Meet the people behind the work.',
  path: '/about-us',
});

const VALUES = [
  { title: 'Transparent communication', description: 'You always know what we are doing and why.', icon: 'MessagesSquare' },
  { title: 'Outcome over output', description: 'We measure success in pipeline and revenue, not deliverables.', icon: 'Target' },
  { title: 'Hands-on support', description: 'A single point of contact and a team that actually replies.', icon: 'Headset' },
  { title: 'Long-term thinking', description: 'We build assets that compound, not one-off spikes.', icon: 'LineChart' },
];

export default async function AboutPage() {
  const [settings, team] = await Promise.all([getSiteSettings(), getTeam()]);

  return (
    <>
      <Hero
        eyebrow="About Agency"
        title="A digital marketing partner built for meaningful growth"
        description="We started Agency with a simple conviction: marketing should be accountable to the numbers. Every engagement is pointed at pipeline and revenue, not deliverables."
        primaryCta={{ label: 'Work with us', href: '/contact-us' }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About Us' },
        ]}
      />

      <section className="section-pad">
        <div className="container-page">
          <StatBand stats={settings.stats} />
        </div>
      </section>

      <section className="section-pad bg-secondary/30">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">Why we exist</h2>
            <p className="leading-relaxed text-muted-foreground">
              Most agencies sell channels in isolation. We connect brand, website and demand
              generation into one measurable system — so every dollar of spend is accountable and
              every quarter builds on the last.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We work with service businesses and e-commerce brands where consistent lead generation
              and measurable growth are what matter.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src="https://picsum.photos/seed/mo-about/1200/900"
              alt="The Agency team at work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <FeatureList eyebrow="How we operate" title="The principles behind every engagement" features={VALUES} />

      <section className="section-pad">
        <div className="container-page flex flex-col gap-10">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Leadership</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.id} className="flex flex-col items-center gap-3 text-center">
                {member.avatar ? (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="size-28 rounded-full object-cover"
                  />
                ) : null}
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                {member.bio ? (
                  <p className="text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Let's build something that delivers" />
    </>
  );
}
