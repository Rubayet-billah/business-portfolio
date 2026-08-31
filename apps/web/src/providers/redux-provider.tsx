'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer runs exactly once per mount — one store instance per client.
  const [store] = useState(makeStore);
  return <Provider store={store}>{children}</Provider>;
}
