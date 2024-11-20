import { FC, ReactNode } from 'react';

import { Color, Tags, Text } from '@components/ui';

import classes from './BoardCard.module.scss';

interface Props {
  title?: string;
  children: ReactNode;
}

export const BoardCard: FC<Props> = ({ title, children }) => (
  <div className={classes.board}>
    {title && (
      <Text
        tag={Tags.Heading_3}
        color={Color.Default}
        className={classes.title}
      >
        {title}
      </Text>
    )}
    {children}
  </div>
);
