import { FC } from 'react';

import { Layout } from '@components/units';
import { Button, Link, Size, Tags, Text } from '@components/ui';

import classes from './WishList.module.scss';
import { WishListMock } from './WishList.mock';

export const WishList:FC = () => {
  const sortedList = [...WishListMock].sort((a, b) => {
    return Number(a.gifted) - Number(b.gifted);
  });

  return (
    <Layout>
      <div className={classes.title_box}>
        <Text tag={Tags.Heading} size={Size.XL}>
          {'Мои желания'}
        </Text>

        <Text tag={Tags.Paragraph} size={Size.LG}>
          {
            'Здесь я собрал вещи и мечты, которые хочу реализовать. От практичных покупок до увлекательных хобби — это мой wish-list'
          }
        </Text>
      </div>

      <div className={classes.box}>
        {sortedList.map((item, index) => (
          <div
            key={index}
            className={`${classes.row} ${index % 2 === 0 ? classes.even : classes.odd}`}
          >
            <div className={classes.imageBox}>
              {item.gifted && <Button>{`🎁 Уже подарено!`}</Button>}

              <img src={item.imageUrl} alt={item.title} className={classes.image} />
            </div>

            <div className={classes.text}>
              <div>
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
                    <Link
                      key={linkIndex}
                      to={link}
                      // @ts-ignore
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button outline tilt>{`Сслыка ${linkIndex + 1}`}</Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
