import { FC } from 'react';

import { Layout } from '@components/units';
import { Size, Tags, Text } from '@components/ui';

import classes from './About.module.scss';
import { AboutMock } from './About.mock.ts';

export const About: FC = () => (
  <Layout>
    <div className={classes.greetings_box}>
      <Text tag={Tags.Heading} size={Size.XL}>
        {'Привет!'}
      </Text>

      <Text tag={Tags.Paragraph} size={Size.LG}>
        {
          'Я frontend-разработчик с душой сноубордиста, который обожает скорость и свободу на склонах, ласковую абиссинскую кошку и тяжелую музыку'
        }
      </Text>
    </div>

    {AboutMock.map((item, index) => (
      <div
        key={index}
        className={`${classes.row} ${index % 2 === 0 ? classes.even : classes.odd}`}
      >
        <img src={item.image} alt={item.title} className={classes.image} />

        <div className={classes.content}>
          <Text tag={Tags.Heading} size={Size.LG}>
            {item.title}
          </Text>

          <Text
            tag={Tags.Paragraph}
            size={Size.MD}
            className={classes.description}
          >
            {item.description}
          </Text>
        </div>
      </div>
    ))}
  </Layout>
);
