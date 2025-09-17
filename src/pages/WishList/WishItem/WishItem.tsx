import { FC } from 'react';
import clsx from 'clsx';

import { Button, Link, Size, Tags, Text } from '@components/ui';
import { WishListItem } from '@services/Api';

import classes from './WishItem.module.scss';

import { ImageSlider } from '@pages/About/Certs/ImageSlider/ImageSlider.tsx';

interface Props {
  item: WishListItem;
  index: number;
}

export const WishItem: FC<Props> = ({ item, index }) => {
  const isArray = Array.isArray(item.imageUrl);

  const sliderImages = isArray
    ? (item.imageUrl as string[]).map((src) => ({ src }))
    : [];

  return (
    <div
      className={clsx(classes.box, {
        [classes.even]: index % 2 === 0,
        [classes.odd]: index % 2 !== 0,
      })}
    >
      {!isArray ? (
        <div className={classes.image_box}>
          <img src={item.imageUrl as string} alt={item.title} />
        </div>
      ) : (
        <div className={classes.slider_box}>
        <ImageSlider images={sliderImages} slidesPerView={1} />
        </div>
      )}

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
};
