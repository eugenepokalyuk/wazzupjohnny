import { FC } from 'react';

import { Button, Link, Size, Tags, Text } from '@components/ui';
import { WishListItem } from '@services/Api';

import classes from './WishItem.module.scss';

interface Props {
  item: WishListItem;
  index: number;
}

export const WishItem: FC<Props> = ({ item, index }) => (
  <div
    className={`${classes.row} ${index % 2 === 0 ? classes.even : classes.odd}`}
  >
    <div className={classes.imageBox}>
      {item.gifted && <Button>{`🎁 Уже подарено!`}</Button>}

      <img src={item.imageUrl} alt={item.title} className={classes.image} />
    </div>

    <div className={classes.text}>
      <div className={classes.text_box}>
        <Text tag={Tags.Heading} size={Size.LG}>
          {item.title}
        </Text>

        <Text tag={Tags.Paragraph} size={Size.MD}>
          {item.description}
        </Text>
      </div>

      {item.links && item.links.length > 0 && (
        <div className={classes.links}>
          {item.links.map((link, linkIndex) => (
            <Link key={linkIndex} to={link} newTab={true}>
              <Button outline tilt>{`Сслыка`}</Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
);
