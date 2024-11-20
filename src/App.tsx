import { FC } from 'react';

import { AppRoutes } from '@services/Route';

import { ErrorBoundary } from './components/services/ErrorBoundary';
import { Providers } from './services/Providers/Providers';

export const App: FC = () => (
  <ErrorBoundary>
    <Providers>
      <AppRoutes />
    </Providers>
  </ErrorBoundary>
);
