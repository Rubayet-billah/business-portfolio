import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import type { SiteSettings } from '@agency/types';
import { Button } from '@agency/ui';
import { Logo } from './logo';
import { DesktopNav } from './mega-menu';
import { MobileNav } from './mobile-nav';
import { SocialIcons } from './social-icons';
import { LanguageSwitch } from './language-switch';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  const topSocials = settings.socials.filter((s) =>
    ['facebook', 'instagram', 'linkedin', 'twitter'].includes(s.platform)
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      {/* Top contact bar */}
      <div className="hidden border-b border-border/70 bg-secondary/40 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href={`tel:${settings.phone}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Phone className="size-3.5" aria-hidden />
              {settings.phone}
            </a>
            <a href={`mailto:${settings.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="size-3.5" aria-hidden />
              {settings.email}
            </a>
          </div>
          <SocialIcons links={topSocials} iconClassName="size-3.5" />
        </div>
      </div>

      {/* Main bar */}
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />
        <DesktopNav items={settings.primaryNav} />
        <div className="flex items-center gap-1">
          <LanguageSwitch className="hidden sm:block" />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
            <Link href="/contact-us">Get a Proposal</Link>
          </Button>
          <MobileNav items={settings.primaryNav} />
        </div>
      </div>
    </header>
  );
}
