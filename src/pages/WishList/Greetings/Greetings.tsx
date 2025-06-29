import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.title_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Мои желания'}
    </Text>

    <Text tag={Tags.Paragraph} size={Size.LG}>
      {
        'Здесь я собрал вещи и мечты, которые хочу реализовать. От практичных покупок до увлекательных хобби — это мой wish-list'
      }
    </Text>
  </div>
);
