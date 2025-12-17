import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.title_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Мои желания'}
    </Text>

    <Text tag={Tags.Paragraph} size={Size.LG}>
      {
        'Я немного выгорел, поэтому пж не покупай ничего из списка который здесь был ранее, сделай лучше сюрприз'
      }
    </Text>
  </div>
);
