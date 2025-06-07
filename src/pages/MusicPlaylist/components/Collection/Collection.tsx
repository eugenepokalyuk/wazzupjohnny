import { FC } from 'react';

import classes from './Collection.module.scss';

interface Props {
  playlists: number[];
}

export const Collection: FC<Props> = ({ playlists }) => {
  return (
    <div className={classes.container}>
      {playlists.map((playlist, index) => (
        <CollectionCard key={index} playlist={playlist} />
      ))}
    </div>
  );
};

interface CardProps {
  playlist: number;
}

const CollectionCard: FC<CardProps> = ({ playlist }) => (
  <div className={classes.cardWrapper}>
    <div className={classes.card}>
      <iframe
        frameBorder="0"
        className={classes.iframe}
        src={`https://music.yandex.ru/iframe/playlist/mackspavlov/${playlist}`}
        title={`Yandex Music Playlist ${playlist}`}
      >
        <a href="https://music.yandex.ru/users/mackspavlov">Евгений Покалюк</a> на Яндекс Музыке
      </iframe>
    </div>
  </div>
);
