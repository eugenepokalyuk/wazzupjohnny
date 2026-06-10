import { FC } from 'react';

import { Size, Tags, Text } from '@shared/ui';

import classes from './Subheading.module.scss';

interface Props {
  content: string;
}

export const Subheading: FC<Props> = ({ content }) => (
  <Text tag={Tags.Heading_2} size={Size.MD} className={classes.subheading}>
    {content}
  </Text>
);
