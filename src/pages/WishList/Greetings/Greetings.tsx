import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.title_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Чо бы Женьке подарить? Вот такой списочек, честно говоря сам не знаю чего хочу'}
    </Text>
  </div>
);
