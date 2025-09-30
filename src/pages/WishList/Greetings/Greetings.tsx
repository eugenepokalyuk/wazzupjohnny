import { FC } from 'react';

import { Color, Size, Tags, Text } from '@components/ui';

import classes from './Greetings.module.scss';

export const Greetings: FC = () => (
  <div className={classes.title_box}>
    <Text tag={Tags.Heading} size={Size.XL}>
      {'Мои желания'}
    </Text>

    <Text tag={Tags.Paragraph} size={Size.LG}>
      {
        'Здесь я собрал вещи и желания, которые хочу реализовать. От практичных покупок до увлекательных хобби — это мой wish-list'
      }
    </Text>

    <Text tag={Tags.Paragraph} size={Size.MD} color={Color.Secondary}>
      {
        'Если вы потеряли что-то из списка, ЭТО ТОЧНО БЫЛО ЗДЕСЬ, значит подарочек уже забронировали или уже подрили, но всегда можно уточнить)'
      }
    </Text>
  </div>
);
