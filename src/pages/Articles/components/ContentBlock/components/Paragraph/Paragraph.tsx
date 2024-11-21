import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Paragraph.module.scss';

interface Props {
  content: string;
}

export const Paragraph: FC<Props> = ({ content }) => (
  <Text tag={Tags.Paragraph} size={Size.SM} className={classes.paragraph}>
    {content}
  </Text>
);
