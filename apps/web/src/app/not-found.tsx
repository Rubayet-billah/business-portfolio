import Link from 'next/link';
import { Button } from '@agency/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">This page could not be found</h1>
      <p className="max-w-md text-muted-foreground">
        The link may be broken, or the page may have moved. Try the homepage or explore our services.
      </p>
      <div className="mt-2 flex gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">View services</Link>
        </Button>
      </div>
    </div>
  );
}
