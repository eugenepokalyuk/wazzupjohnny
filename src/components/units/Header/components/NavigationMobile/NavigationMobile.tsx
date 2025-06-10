import { FC } from 'react';
import { useLocation } from 'react-router';
import clsx from 'clsx';

import { RouteLink } from '@components/units';
import { Link, Size, Tags, Text } from '@components/ui';

import classes from './NavigationMobile.module.scss';

interface Props {
  routeLinks: RouteLink[];
  className?: string;
}

export const NavigationMobile: FC<Props> = ({ routeLinks, className }) => {
  const location = useLocation();

  return (
    <div className={clsx(classes.mobile_menu, className)}>
      {routeLinks.map((link) => (
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
