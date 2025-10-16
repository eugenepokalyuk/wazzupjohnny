import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import { Urls } from '@services/Route';

import classes from './Layout.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
}

export interface RouteLink {
  key: string;
  url: string;
  label: string;
}

export const Layout: FC<Props> = ({ header, footer, wide, children }) => {
  const RouteLinks: RouteLink[] = [
    {
      key: Urls.Projects,
      url: Urls.Projects,
      label: 'Проекты',
    },
    {
      key: Urls.About,
      url: Urls.About,
      label: 'Немного о себе',
    },
    {
      key: Urls.WishList,
      url: Urls.WishList,
      label: 'Wish list',
    },
    {
      key: Urls.Articles,
      url: Urls.Articles,
      label: 'Статьи',
    },
    {
      key: Urls.MusicPlaylist,
      url: Urls.MusicPlaylist,
      label: 'Плейлист',
    },
  ];

  return (
    <div className={classes.box}>
      {header === null ? null : <Header routeLinks={RouteLinks} />}

      <main
        className={clsx(classes.main, {
          [classes.wide]: wide,
        })}
      >
        {children || <Outlet />}
      </main>

      {footer === null ? null : <Footer routeLinks={RouteLinks} />}
    </div>
  );
};
