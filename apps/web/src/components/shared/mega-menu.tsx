'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import type { NavItem } from '@agency/types';
import { cn } from '@agency/ui';

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {items.map((item) => {
        const hasChildren = item.children.length > 0;
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

        if (!hasChildren) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                active ? 'text-primary' : 'text-foreground'
              )}
            >
              {item.label}
            </Link>
          );
        }

        const open = openLabel === item.label;
        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => setOpenLabel(item.label)}
            onMouseLeave={() => setOpenLabel(null)}
          >
            <Link
              href={item.href}
              className={cn(
                'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                active ? 'text-primary' : 'text-foreground'
              )}
              aria-expanded={open}
              onFocus={() => setOpenLabel(item.label)}
            >
              {item.label}
              <ChevronDown
                className={cn('size-4 transition-transform', open && 'rotate-180')}
                aria-hidden
              />
            </Link>
            {open ? (
              <div className="absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-lg px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
