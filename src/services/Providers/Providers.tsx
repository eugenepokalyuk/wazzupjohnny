import { FC, PropsWithChildren } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import { ToastProvider } from '@components/ui';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ToastProvider>{children}</ToastProvider>

      <Analytics />
      <SpeedInsights />
    </>
  );
};
