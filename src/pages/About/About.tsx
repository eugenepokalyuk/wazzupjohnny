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
          'Профессиональный Frontend-разработчик с душой сноубордиста, любитель абиссинской кошки и настольных игр'
        }
      </Text>
    </div>

    {AboutMock.map((item, index) => (
      <div
        key={index}
        className={`${classes.row} ${index % 2 === 0 ? classes.even : classes.odd}`}
      >
        <img src={item.image} alt={item.title} className={classes.image} />

        <div className={classes.text}>
          <Text tag={Tags.Heading} size={Size.LG}>
            {item.title}
          </Text>

          <Text tag={Tags.Paragraph} size={Size.MD}>
            {item.description}
          </Text>
        </div>
      </div>
    ))}
  </Layout>
);
