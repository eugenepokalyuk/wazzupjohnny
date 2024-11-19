import { FC } from 'react';

import { Urls } from '@services/Route';
import { Link } from '@components/ui';

import classes from './NavigationDesktop.module.scss';

interface Props {
  isActive: (path: string) => boolean;
}

export const NavigationDesktop: FC<Props> = ({ isActive }) => (
  <nav className={classes.nav_links}>
    <div className={classes.links}>
      <Link
        to={Urls.Home}
        className={isActive(Urls.Home) ? classes.active : ''}
      >
        {'Home'}
      </Link>

      <Link
        to={Urls.Projects}
        className={isActive(Urls.Projects) ? classes.active : ''}
      >
        {'Projects'}
      </Link>

      <Link
        to={Urls.SelfPresentation}
        className={isActive(Urls.SelfPresentation) ? classes.active : ''}
      >
        {'Self-presentation'}
      </Link>

      <Link
        to={Urls.Goodies}
        className={isActive(Urls.Goodies) ? classes.active : ''}
      >
        {'Goodies'}
      </Link>

      <Link
        to={Urls.About}
        className={isActive(Urls.About) ? classes.active : ''}
      >
        {'About'}
      </Link>
    </div>
  </nav>
);
