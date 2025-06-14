import { FC } from 'react';

import { CloseIcon, MenuOpenIcon } from '@components/ui';
import { RouteLink } from '@components/units';

import classes from './HeaderLayout.module.scss';
import { NavigationDesktop } from '../NavigationDesktop/NavigationDesktop';
import { NavigationMobile } from '../NavigationMobile/NavigationMobile';
import { Profile } from '../Profile/Profile';

interface Props {
  routeLinks: RouteLink[];
  handleMenuToggle: () => void;
  isMenuOpen: boolean;
}

export const HeaderLayout: FC<Props> = ({
  routeLinks,
  handleMenuToggle,
  isMenuOpen,
}) => (
  <header className={classes.header}>
    <div className={classes.box}>
      <Profile />

      <NavigationDesktop routeLinks={routeLinks} />

      <div className={classes.burger_menu} onClick={handleMenuToggle}>
        {isMenuOpen ? <CloseIcon /> : <MenuOpenIcon />}
      </div>

      <NavigationMobile
        routeLinks={routeLinks}
        className={isMenuOpen ? classes.open : classes.close}
      />
    </div>
  </header>
);
