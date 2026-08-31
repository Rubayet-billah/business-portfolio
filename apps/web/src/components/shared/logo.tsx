import Link from 'next/link';
import { cn } from '@agency/ui';

export function Logo({ className, onNavy = false }: { className?: string; onNavy?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Agency home"
      className={cn('inline-flex items-center gap-2 font-semibold tracking-tight', className)}
    >
      <span
        className={cn(
          'grid size-7 place-items-center rounded-md bg-primary text-primary-foreground',
          onNavy && 'bg-white text-primary'
        )}
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
          <path d="M4 18V9m5 9V6m5 12v-7m5 7V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className={cn('text-lg', onNavy && 'text-brand-navy-foreground')}>Agency</span>
    </Link>
  );
}
