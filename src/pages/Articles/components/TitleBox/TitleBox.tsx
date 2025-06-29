import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './TitleBox.module.scss';

export const TitleBox: FC = () => (
  <div className={classes.title_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Статьи'}
    </Text>

    <Text tag={Tags.Paragraph} size={Size.LG}>
      {
        'Здесь вы найдёте статьи, которые я написал. Это материалы о разработке, фреймворках, и многое другое'
      }
    </Text>
  </div>
);
