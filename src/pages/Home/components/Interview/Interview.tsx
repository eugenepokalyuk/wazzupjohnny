import { FC } from 'react';

import { Tags, Text } from '@components/ui';

import classes from './Interview.module.scss';

export const Interview: FC = () => (
  <div className={classes.box}>
    <Text tag={Tags.Heading} className={classes.title}>
      {'Привет! Меня зовут\nЕвгений. Я занимаюсь\nфронтенд разработкой'}
    </Text>
  </div>
);
