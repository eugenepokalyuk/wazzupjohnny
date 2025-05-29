import { FC } from 'react';

import { Button, Link, Size, Variant } from '@components/ui';
import { Urls } from '@services/Route';

import { BoardCard } from '../BoardCard/BoardCard';

export const Navigation:FC = () => {
  const NavigationLinksMock = [
    { label: 'Проекты', url: Urls.Projects },
    { label: 'Самопрезентация', url: Urls.About },
    { label: 'Список желаний', url: Urls.WishList },
    { label: 'Пишу статьи', url: Urls.Articles },
  ];

  return (
    <BoardCard>
      {NavigationLinksMock.map((link, index) => (
        <Link key={index} to={link.url}>
          <Button size={Size.LG} variant={Variant.Accent} wide>
            {link.label}
          </Button>
        </Link>
      ))}
    </BoardCard>
  );
};
