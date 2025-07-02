import { FC, useState } from 'react';
import clsx from 'clsx';

import imageLogoSrc from '@public/images/shape/logo.png';
import ImageAvatarSrc from '@public/images/about/avatar.jpg';

import classes from './FlipAvatar.module.scss';

export const FlipAvatar: FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={clsx(classes.box, {
        [classes.flipped]: flipped,
      })}
      onClick={handleClick}
    >
      <div className={classes.flipper}>
        <img
          src={imageLogoSrc}
          alt="Сторона кошки Астры"
          className={classes.front}
        />

        <img
          src={ImageAvatarSrc}
          alt="Сторона Евгения"
          className={classes.back}
        />
      </div>
    </div>
  );
};
