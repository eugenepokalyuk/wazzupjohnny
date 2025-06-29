import { FC } from 'react';

import { Fact } from '@services/Api';

import classes from './FactsBox.module.scss';
import { FactItem } from './FactsItem/FactsItem';

interface Props {
  facts: Fact[];
}

export const FactsBox: FC<Props> = ({ facts }) => (
  <div className={classes.box}>
    <div className={classes.grid}>
      {facts.map(({ imgSrc, imgAlt, title, description, link }) => (
        <FactItem
          key={title.toString()}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          title={title}
          description={description}
          link={link}
        />
      ))}
    </div>
  </div>
);
