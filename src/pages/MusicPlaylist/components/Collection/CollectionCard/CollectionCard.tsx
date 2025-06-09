import { FC } from 'react';

import { Link, Tags, Text } from '@components/ui';

import classes from './CollectionCard.module.scss';

interface Props {
  playlist:number;
  index:number;
  image:string;
}

export const CollectionCard:FC<Props> = ({ playlist, index, image }) => (
  <Link
    to={`https://music.yandex.ru/iframe/playlist/mackspavlov/${playlist}`}
    className={classes.link}
    //@ts-ignore
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={image} alt={`Daily legends #${index + 1}`} className={classes.image} />

    <div className={classes.overlay}>
      <div className={classes.text}>
        <Text tag={Tags.Heading}>{`Daily legends #${index + 1}`}</Text>
      </div>
    </div>
  </Link>
);
