import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './List.module.scss';

interface Props {
  listTitle?: string;
  listItems: string[];
}

export const List: FC<Props> = ({ listTitle, listItems }) => (
  <div className={classes.list}>
    {listTitle && (
      <Text tag={Tags.Heading_3} size={Size.MD} className={classes.listTitle}>
        {listTitle}
      </Text>
    )}

    <ul>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
