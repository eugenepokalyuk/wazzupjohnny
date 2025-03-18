import { FC } from 'react';
import { useLocation } from 'react-router';
import clsx from 'clsx';

import { RouteLink } from '@components/units';
import { Link, Size, Tags, Text } from '@components/ui';

import classes from './NavigationDesktop.module.scss';

interface Props {
  RouteLinks: RouteLink[];
}

export const NavigationDesktop: FC<Props> = ({ RouteLinks }) => {
  const location = useLocation();

  return (
    <nav className={classes.nav_links}>
      {RouteLinks.map((link) => (
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
  );
};
