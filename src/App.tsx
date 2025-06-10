import { FC, StrictMode } from 'react';

import { AnimatedRoutes } from '@services/Route';

import { ErrorBoundary } from './components/services/ErrorBoundary';
import { Providers } from './services/Providers/Providers';

export const App: FC = () => (
  <StrictMode>
    <ErrorBoundary>
      <Providers>
        <AnimatedRoutes />
      </Providers>
    </ErrorBoundary>
  </StrictMode>
);
