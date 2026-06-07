import { FC } from 'react';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { Home } from '@pages/Home/Home';
import { Projects } from '@pages/Projects/Projects';
import { Articles } from '@pages/Articles/Articles';
import { ArticlePage } from '@pages/Articles/components/ArticlePage/ArticlePage';
import { Error } from '@pages/Error/Error';

import { Urls } from './urls';

export const appRoutes: RouteObject[] = [
  {
    path: Urls.Home,
    element: <Home />,
  },
  {
    path: Urls.Projects,
    element: <Projects />,
  },
  {
    path: Urls.Articles,
    element: <Articles />,
  },
  {
    path: Urls.ArticlePage,
    element: <ArticlePage />,
  },

  {
    path: Urls.Error,
    element: <Error />,
  },
];

export const AppRoutes: FC = () => useRoutes(appRoutes);
