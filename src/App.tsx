import { FC } from 'react';

import { AppRoutes } from '@services/Route';

import { ErrorBoundary } from './components/services/ErrorBoundary.tsx';

export const App: FC = () => (
  <ErrorBoundary>
    <AppRoutes />
  </ErrorBoundary>
);
