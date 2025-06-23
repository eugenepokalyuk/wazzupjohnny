import { FC, PropsWithChildren } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import { ToastProvider } from '@components/ui';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <>
    <ToastProvider>{children}</ToastProvider>

    {/* Vercel Analytics & SpeedInsights */}
    <Analytics />
    <SpeedInsights />
  </>
);
