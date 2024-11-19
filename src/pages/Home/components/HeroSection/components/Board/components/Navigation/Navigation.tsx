import { FC } from 'react';

import { Button, Link } from '@components/ui';
import { Urls } from '@services/Route';

import classes from './Navigation.module.scss';

export const Navigation: FC = () => {
  const NavigationLinksMock = [
    { label: 'Проекты', url: Urls.Projects },
    { label: 'Самопрезентация', url: Urls.SelfPresentation },
    { label: 'Список желаний', url: Urls.WishList },
    { label: 'Пишу статьи', url: Urls.Articles },
  ];

  return (
    <div className={classes.board}>
      {NavigationLinksMock.map((link, index) => (
        <Link key={index} to={link.url}>
          <Button wide>{link.label}</Button>
        </Link>
      ))}
    </div>
  );
};
