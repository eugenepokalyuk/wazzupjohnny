import { FC, useEffect, useState } from 'react';

import { Link, MenuCloseIcon, MenuOpenIcon } from '@components/ui';
import { RouteLink } from '@components/units';
import { Urls } from '@services/Route';

import classes from './Header.module.scss';
import { NavigationDesktop } from './components/NavigationDesktop/NavigationDesktop';
import { NavigationMobile } from './components/NavigationMobile/NavigationMobile';

interface Props {
  routeLinks: RouteLink[];
}

export const Header: FC<Props> = ({ routeLinks }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.box}>
        <div className={classes.logo}>
          <Link to={Urls.Home}>{'wazzupjohnny'}</Link>
        </div>

        <NavigationDesktop routeLinks={routeLinks} />

        <div className={classes.burger_menu} onClick={handleMenuToggle}>
          {isMenuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
        </div>

        <NavigationMobile
          routeLinks={routeLinks}
          className={isMenuOpen ? classes.open : classes.close}
        />
      </div>
    </header>
  );
};
