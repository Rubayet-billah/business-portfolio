'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '@agency/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@agency/ui';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMobileNavOpen, toggleMobileNav } from '@/store/slices/uiSlice';

export function MobileNav({ items }: { items: NavItem[] }) {
  const open = useAppSelector((s) => s.ui.mobileNavOpen);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(setMobileNavOpen(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => dispatch(toggleMobileNav())}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div className="fixed inset-x-0 top-[var(--header-h,4rem)] bottom-0 z-40 overflow-y-auto border-t border-border bg-background px-4 py-6">
          <ul className="flex flex-col gap-1">
            {items.map((item) =>
              item.children.length ? (
                <li key={item.href}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.label} className="border-none">
                      <AccordionTrigger className="py-3 text-base">{item.label}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-1 pl-2">
                          <li>
                            <Link
                              href={item.href}
                              className="block rounded-md px-2 py-2 text-sm font-medium text-primary"
                            >
                              All {item.label}
                            </Link>
                          </li>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-3 text-base font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Button asChild size="lg" className="mt-6 w-full">
            <Link href="/contact-us">Get a Proposal</Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
