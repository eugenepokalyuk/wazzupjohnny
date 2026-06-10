import { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Providers } from './providers/Providers';
import { AppRouter } from './router/AppRouter';
import { ErrorBoundary } from './ErrorBoundary';

export const App: FC = () => (
  <StrictMode>
    <Providers>
      <BrowserRouter>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </BrowserRouter>
    </Providers>
  </StrictMode>
);
