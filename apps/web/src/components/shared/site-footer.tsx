import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { SiteSettings } from '@agency/types';
import { Logo } from './logo';
import { SocialIcons } from './social-icons';

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {settings.description}
          </p>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{settings.address}</span>
            </li>
            <li>
              <a href={`tel:${settings.phone}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Phone className="size-4" aria-hidden />
                {settings.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${settings.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="size-4" aria-hidden />
                {settings.email}
              </a>
            </li>
          </ul>
        </div>

        {settings.footerNav.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
              {col.heading}
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {settings.siteName}. All rights reserved.
          </p>
          <SocialIcons links={settings.socials} iconClassName="size-4" />
        </div>
      </div>
    </footer>
  );
}
