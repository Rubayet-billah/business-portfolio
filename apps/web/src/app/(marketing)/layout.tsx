import { SiteFooter, SiteHeader, JsonLd } from '@/components/shared';
import { getSiteSettings } from '@/lib/content';
import { organizationSchema, websiteSchema } from '@/lib/seo/structured-data';
import { FloatingContact } from '@/components/shared';

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();

  return (
    <>
      <JsonLd data={[organizationSchema(settings), websiteSchema()]} />
      <SiteHeader settings={settings} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter settings={settings} />
      <FloatingContact whatsapp={settings.whatsapp} telegram={settings.telegram} />
    </>
  );
}
