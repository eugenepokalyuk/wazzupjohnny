import { FC, useEffect, useState } from 'react';

import { Link, MenuCloseIcon, MenuOpenIcon } from '@components/ui';
import { Urls } from '@services/Route';

import { NavigationDesktop } from './components/NavigationDesktop/NavigationDesktop';
import { NavigationMobile } from './components/NavigationMobile/NavigationMobile';
import classes from './Header.module.scss';

export interface RouteLink {
  key: string;
  url: string;
  label: string;
}

export const Header: FC = () => {
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

  const RouteLinks: RouteLink[] = [
    {
      key: Urls.Projects,
      url: Urls.Projects,
      label: 'Проекты',
    },
    {
      key: Urls.About,
      url: Urls.About,
      label: 'Самопрезентация',
    },
    {
      key: Urls.WishList,
      url: Urls.WishList,
      label: 'Список желаний',
    },
    {
      key: Urls.Articles,
      url: Urls.Articles,
      label: 'Статьи',
    },
  ];

  return (
    <header className={classes.header}>
      <div className={classes.box}>
        <div className={classes.logo}>
          <Link to={Urls.Home}>{'wazzupjohnny'}</Link>
        </div>

        <NavigationDesktop RouteLinks={RouteLinks} />

        <div className={classes.burger_menu} onClick={handleMenuToggle}>
          {isMenuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
        </div>

        {isMenuOpen && <NavigationMobile RouteLinks={RouteLinks} />}
      </div>
    </header>
  );
};
