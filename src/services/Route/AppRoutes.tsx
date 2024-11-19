import { FC } from 'react';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { Error, Layout } from '@components/units';
import { Home } from '@pages/Home/Home.tsx';

import { Urls } from './urls';

export const appRoutes: RouteObject[] = [
  {
    path: Urls.Home,
    element: <Home />,
  },
  {
    path: Urls.Error,
    element: (
      <Layout>
        <Error />
      </Layout>
    ),
  },
];

export const AppRoutes: FC = () => useRoutes(appRoutes);
