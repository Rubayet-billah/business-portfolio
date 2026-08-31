'use client';

import { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { cn } from '@agency/ui';

/**
 * Decorative locale switch — the site is English-only for now. Kept because the
 * reference design shows it; wired to real i18n routing only if we add locales.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('relative', className)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="size-4" aria-hidden />
        BD
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 w-44 overflow-hidden rounded-md border border-border bg-popover p-1 text-sm shadow-lg"
        >
          <li
            role="option"
            aria-selected
            className="flex items-center justify-between rounded px-2 py-1.5 text-popover-foreground"
          >
            English (BD) <Check className="size-3.5 text-primary" aria-hidden />
          </li>
          <li
            role="option"
            aria-selected={false}
            aria-disabled
            className="rounded px-2 py-1.5 text-muted-foreground/60"
          >
            Español — soon
          </li>
        </ul>
      ) : null}
    </div>
  );
}
