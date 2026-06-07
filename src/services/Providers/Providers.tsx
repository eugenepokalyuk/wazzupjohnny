import { FC, PropsWithChildren } from 'react';

import { ToastProvider } from '@components/ui';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);
