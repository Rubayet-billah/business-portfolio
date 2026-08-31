import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send, MessageCircle, Palette } from 'lucide-react';
import type { SocialLink } from '@agency/types';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@agency/ui';

const ICONS: Record<SocialLink['platform'], LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  behance: Palette,
  whatsapp: MessageCircle,
  telegram: Send,
};

export function SocialIcons({
  links,
  className,
  iconClassName,
}: {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {links.map((link) => {
        const Cmp = ICONS[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Cmp className={cn('size-4', iconClassName)} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
