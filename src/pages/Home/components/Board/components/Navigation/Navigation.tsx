import { FC } from 'react';

import { Button, Link, Size, Variant } from '@components/ui';
import { Urls } from '@services/Route';

import { BoardCard } from '../BoardCard/BoardCard';

export const Navigation: FC = () => {
  const NavigationLinksMock = [
    { label: 'Мои проекты', url: Urls.Projects },
    { label: 'Немного о себе', url: Urls.About },
    { label: 'Пишу статьи', url: Urls.Articles },
    { label: 'Мой плейлист', url: Urls.MusicPlaylist },
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
