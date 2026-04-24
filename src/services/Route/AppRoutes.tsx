import { FC } from 'react';
import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { Home } from '@pages/Home/Home';
import { Projects } from '@pages/Projects/Projects';
import { About } from '@pages/About/About';
import { Articles } from '@pages/Articles/Articles';
import { MusicPlaylist } from '@pages/MusicPlaylist/MusicPlaylist';
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
    path: Urls.About,
    element: <About />,
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
    path: Urls.MusicPlaylist,
    element: <MusicPlaylist />,
  },

  {
    path: Urls.Error,
    element: <Error />,
  },
];

export const AppRoutes: FC = () => useRoutes(appRoutes);
