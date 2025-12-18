import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.title_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Чо бы Женьке подарить? А вот список ниже обнищал, но я пополняю его)'}
    </Text>
  </div>
);
