import { FC } from 'react';

import { WishListItem } from '@services/Api';

import classes from './WishListBox.module.scss';
import { WishItem } from '../WishItem/WishItem';

interface Props {
  list: WishListItem[];
}

export const WishListBox: FC<Props> = ({ list }) => (
  <div className={classes.box}>
    {list.map((item, index) => (
      <WishItem key={index} item={item} index={index} />
    ))}
  </div>
);
