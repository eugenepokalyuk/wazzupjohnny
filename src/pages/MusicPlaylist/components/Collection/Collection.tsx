import { FC } from 'react';

import { Button, Link, Size, Variant } from '@components/ui';

import classes from './Collection.module.scss';

interface Props {
  playlists:number[];
}

export const Collection:FC<Props> = ({ playlists }) => (
  <div className={classes.box}>
    {playlists.map((playlist, index) => (
      <CollectionCard key={index} playlist={playlist} index={playlists.length - index - 1} />
    ))}
  </div>
);

interface CardProps {
  playlist:number;
  index:number;
}

const CollectionCard:FC<CardProps> = ({ playlist, index }) => (
  <div className={classes.card_box}>
    <div className={classes.card}>
      <Link to={`https://music.yandex.ru/iframe/playlist/mackspavlov/${playlist}`}>
        <Button size={Size.XL} variant={Variant.Default} wide>
          {`Daily legends #${index + 1}`}
        </Button>
      </Link>
    </div>
  </div>
);
