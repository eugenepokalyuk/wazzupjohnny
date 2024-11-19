import { FC, useState } from 'react';
import { useLocation } from 'react-router';

import { Button, CloseIcon, HamburgerIcon } from '@components/ui';

import classes from './Header.module.scss';
import { NavigationMobile } from './components/NavigationMobile/NavigationMobile';
import { NavigationDesktop } from './components/NavigationDesktop/NavigationDesktop';

export const Header:FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isActive = (path:string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classes.box}>
      <nav className={classes.header}>
        <div className={classes.desktop}>
          <NavigationDesktop isActive={isActive} />
        </div>

        <Button className={classes.burger} size="icon" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>

        {isMenuOpen && <NavigationMobile toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
      </nav>
    </header>
  );
};
