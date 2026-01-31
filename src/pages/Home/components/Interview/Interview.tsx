import { FC } from 'react';

import { Color, Size, Tags, Text } from '@components/ui';
import { Breakpoints, useMedia } from '@/utils';

import classes from './Interview.module.scss';

export const Interview: FC = () => {
  const isMobile = useMedia(Breakpoints.Mobile);

  return (
    <div className={classes.box}>
      {isMobile ? (
        <Text tag={Tags.Heading} size={Size.XL} color={Color.Default}>
          {'Привет!\nМеня зовут Евгений\nЯ занимаюсь фронтенд разработкой'}
        </Text>
      ) : (
        <Text tag={Tags.Heading} size={Size.XXL} className={classes.title}>
          {'Привет! Меня зовут\nЕвгений. Я занимаюсь\nфронтенд разработкой'}
        </Text>
      )}
    </div>
  );
};
