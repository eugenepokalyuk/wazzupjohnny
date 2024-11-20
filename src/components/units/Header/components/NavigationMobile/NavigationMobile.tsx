import { FC } from 'react';

import { RouteLink } from '@components/units';
import { Link, Size, Tags, Text } from '@components/ui';

import classes from './NavigationMobile.module.scss';

interface Props {
  RouteLinks: RouteLink[];
}

export const NavigationMobile: FC<Props> = ({ RouteLinks }) => {
  return (
    <div className={classes.mobile_menu}>
      {RouteLinks.map((link) => (
        <Link key={link.key} to={link.url} className={classes.mobile_menu_link}>
          <Text tag={Tags.Heading_2} size={Size.LG}>
            {link.label}
          </Text>
        </Link>
      ))}
    </div>
  );
};
