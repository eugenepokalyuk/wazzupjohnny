import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { store, StoreProvider } from '@services/Store';

import './styles/main.scss';
import { App } from './App.tsx';

const rootDOM = document.getElementById('root');
const root = createRoot(rootDOM!);

root.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
);
