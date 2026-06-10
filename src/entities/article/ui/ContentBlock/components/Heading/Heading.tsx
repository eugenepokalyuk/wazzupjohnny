import { FC } from 'react';

import { Size, Tags, Text } from '@shared/ui';

import classes from './Heading.module.scss';

interface Props {
  content: string;
}

export const Heading: FC<Props> = ({ content }) => (
  <Text tag={Tags.Heading} size={Size.LG} className={classes.heading}>
    {content}
  </Text>
);
