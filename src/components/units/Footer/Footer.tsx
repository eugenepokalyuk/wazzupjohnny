import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Color, Size, Tags, Text } from '@components/ui';
import { RouteLink } from '@components/units';
import { Urls } from '@services/Route';

import classes from './Footer.module.scss';
import { useLocation } from 'react-router';
import clsx from 'clsx';

interface Props {
  routeLinks:RouteLink[];
}

export const Footer:FC<Props> = ({ routeLinks }) => {
  const location = useLocation();

  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.box}>
        <div className={classes.logo}>
          <Link to={Urls.Home}>{'wazzupjohnny'}</Link>
        </div>

        <nav className={classes.nav_links}>
          {routeLinks.map(link => (
            <Link
              key={link.key}
              to={link.url}
              className={clsx(
                classes.link,
                location.pathname === link.url ? classes.active : null,
              )}
            >
              <Text tag={Tags.Heading_3} size={Size.MD}>
                {link.label}
              </Text>
            </Link>
          ))}
        </nav>

        <Text color={Color.Secondary}>{`©2023-${year} wazzupjohnny. Все права защищены`}</Text>
      </div>
    </footer>
  );
};
