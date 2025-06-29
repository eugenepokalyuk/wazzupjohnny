import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';
import ImageAvatarSrc from '@public/images/about/avatar.jpg';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.box}>
    <div className={classes.image_box}>
      <img src={ImageAvatarSrc} alt="Фото Жени" />
    </div>

    <Text tag={Tags.Heading} size={Size.XXL}>
      {'Меня зовут Женя'}
    </Text>
  </div>
);
