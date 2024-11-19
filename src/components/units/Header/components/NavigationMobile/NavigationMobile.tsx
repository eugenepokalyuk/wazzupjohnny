import { FC } from 'react';

import { Urls } from '@services/Route';
import { Link } from '@components/ui';

import classes from './NavigationMobile.module.scss';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const NavigationMobile: FC<Props> = ({ toggleMenu }) => (
  <nav className={classes.mobile_menu}>
    <div className={classes.menu_links}>
      <Link to={Urls.Home} onClick={toggleMenu}>
        {'Home'}
      </Link>
    </div>
  </nav>
);
