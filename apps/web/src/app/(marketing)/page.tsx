import {
  BlogPreview,
  CtaBand,
  FaqAccordion,
  FeatureList,
  Hero,
  IndustryGrid,
  LogoStrip,
  PillLinks,
  PortfolioGrid,
  ProcessSteps,
  ServiceGrid,
  StatBand,
  Testimonials,
} from '@/components/sections';
import {
  getFaqsByScope,
  getFeaturedPosts,
  getFeaturedServices,
  getFeaturedTestimonials,
  getIndustries,
  getPortfolioItems,
  getSiteSettings,
} from '@/lib/content';

const HOME_PROCESS = [
  { step: 1, title: 'Discovery', description: 'We learn your goals, audience and current baseline.' },
  { step: 2, title: 'Strategy', description: 'A prioritised plan with clear KPIs and owners.' },
  { step: 3, title: 'Design & build', description: 'We produce the assets and ship the work.' },
  { step: 4, title: 'Launch', description: 'Go live with tracking wired in from day one.' },
  { step: 5, title: 'Optimise', description: 'Weekly iteration against the numbers that matter.' },
  { step: 6, title: 'Report & scale', description: 'Plain-language reporting, then we push what works.' },
];

const WHY_US = [
  { title: 'Improved user experience', description: 'Fast, accessible, conversion-focused design on every build.', icon: 'Gauge' },
  { title: 'Data protection', description: 'Security and privacy handled properly, not as an afterthought.', icon: 'ShieldCheck' },
  { title: 'SEO-optimised performance', description: 'Clean markup and Core Web Vitals that search engines reward.', icon: 'Search' },
  { title: 'Detailed cross-platform testing', description: 'Every device and browser checked before launch.', icon: 'MonitorPlay' },
  { title: 'Guaranteed satisfaction', description: 'We iterate until it is right — that is the whole point.', icon: 'Check' },
  { title: 'Quality content', description: 'Words that rank and convert, written by specialists.', icon: 'FileText' },
];

export default async function HomePage() {
  const [settings, services, industries, portfolio, testimonials, posts, faqs] = await Promise.all([
    getSiteSettings(),
    getFeaturedServices(6),
    getIndustries(),
    getPortfolioItems({ limit: 6 }),
    getFeaturedTestimonials(6),
    getFeaturedPosts(3),
    getFaqsByScope('general'),
  ]);

  const serviceNav = settings.primaryNav.find((n) => n.href === '/services');
  const pillLinks = (serviceNav?.children ?? []).map((c) => ({ label: c.label, href: c.href }));

  return (
    <>
      <Hero
        variant="navy"
        eyebrow="Full-service digital marketing"
        title="Bring your brand, website and marketing together to move your business forward"
        description="Agency blends brand strategy, creative, web development, SEO, paid advertising and social into one coordinated approach that earns attention and builds pipeline."
        primaryCta={{ label: 'Get a Proposal', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore services', href: '/services' }}
      >
        <div className="mt-10 w-full">
          <StatBand
            stats={settings.stats}
            className="border-white/15 bg-white/10 [&>div]:bg-transparent [&_dd]:text-brand-navy-foreground [&_dt]:text-brand-navy-foreground/70"
          />
        </div>
      </Hero>

      <LogoStrip
        label="We work across every modern stack"
        items={['Next.js', 'WordPress', 'Webflow', 'Shopify', 'Wix', 'Framer']}
      />

      <ServiceGrid
        services={services}
        description="From organic search to paid media to conversion-focused web design — everything a growing business needs, in one place."
      />

      <ProcessSteps steps={HOME_PROCESS} />

      <FeatureList
        eyebrow="Why Agency"
        title="Built to help startups grow fast and compound"
        features={WHY_US}
      />

      <IndustryGrid industries={industries} />

      <PortfolioGrid items={portfolio.items} showViewAll />

      <Testimonials testimonials={testimonials} />

      <BlogPreview posts={posts} />

      <CtaBand />

      <FaqAccordion faqs={faqs} />

      <PillLinks links={pillLinks} />
    </>
  );
}
