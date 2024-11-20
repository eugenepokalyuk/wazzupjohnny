import { FC, ReactNode } from 'react';

import { ToastProvider } from '@components/ui';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
