'use client';

import { Toaster } from 'sonner';
import { ReduxProvider } from './redux-provider';
import { ThemeProvider } from './theme-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        {children}
        <Toaster position="top-center" richColors closeButton />
      </ThemeProvider>
    </ReduxProvider>
  );
}
