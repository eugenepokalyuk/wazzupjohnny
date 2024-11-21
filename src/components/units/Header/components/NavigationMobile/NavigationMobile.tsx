import { FC } from 'react';
import { useLocation } from 'react-router';

import { RouteLink } from '@components/units';
import { Link, Size, Tags, Text } from '@components/ui';

import classes from './NavigationMobile.module.scss';
import clsx from 'clsx';

interface Props {
  RouteLinks: RouteLink[];
}

export const NavigationMobile: FC<Props> = ({ RouteLinks }) => {
  const location = useLocation();

  return (
    <div className={classes.mobile_menu}>
      {RouteLinks.map((link) => (
        <Link
          key={link.key}
          to={link.url}
          className={clsx(
            classes.link,
            location.pathname === link.url ? classes.active : null,
          )}
        >
          <Text tag={Tags.Heading_2} size={Size.LG}>
            {link.label}
          </Text>
        </Link>
      ))}
    </div>
  );
};
