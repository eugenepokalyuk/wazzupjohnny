import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.greetings_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Мои проекты'}
    </Text>

    <Text tag={Tags.Paragraph} size={Size.LG}>
      {
        'Здесь найдешь список коммерческих и пет проектов, созданных мной с использованием современных технологий'
      }
    </Text>
  </div>
);
