import { FC, useEffect, useState } from 'react';

import { RouteLink } from '@components/units';

import { HeaderLayout } from './components/HeaderLayout/HeaderLayout';

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
    <HeaderLayout
      routeLinks={routeLinks}
      handleMenuToggle={handleMenuToggle}
      isMenuOpen={isMenuOpen}
    />
  );
};
