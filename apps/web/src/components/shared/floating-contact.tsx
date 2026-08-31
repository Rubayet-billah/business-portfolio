'use client';

import { useState } from 'react';
import { MessageCircle, Send, X, Headset } from 'lucide-react';
import { cn } from '@agency/ui';

interface FloatingContactProps {
  whatsapp?: string;
  telegram?: string;
}

export function FloatingContact({ whatsapp, telegram }: FloatingContactProps) {
  const [open, setOpen] = useState(false);

  const links = [
    // Hex values below are the official WhatsApp / Telegram brand colours —
    // deliberately not design tokens.
    whatsapp && {
      label: 'WhatsApp',
      href: `https://wa.me/${whatsapp.replace(/[^\d]/g, '')}`,
      Icon: MessageCircle,
      className: 'bg-[#25D366] text-white',
    },
    telegram && {
      label: 'Telegram',
      href: `https://t.me/${telegram.replace(/^@/, '')}`,
      Icon: Send,
      className: 'bg-[#229ED9] text-white',
    },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof MessageCircle; className: string }[];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {open
        ? links.map(({ label, href, Icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex size-11 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105',
                className
              )}
              aria-label={label}
            >
              <Icon className="size-5" aria-hidden />
            </a>
          ))
        : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="size-5" aria-hidden /> : <Headset className="size-5" aria-hidden />}
      </button>
    </div>
  );
}
