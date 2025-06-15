import { FC } from 'react';

import { Link, Tags, Text } from '@components/ui';

import classes from './FactsItem.module.scss';

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  link?: string;
}

export const FactItem: FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  link,
}) => (
  <div className={classes.box}>
    <img src={imgSrc} alt={imgAlt} />

    <div className={classes.content}>
      <Text tag={Tags.Heading_3}>{title}</Text>

      <Text tag={Tags.Paragraph}>{description}</Text>

      {link && (
        <Link to={link} className={classes.link} newTab>
          {'Ссылочка'}
        </Link>
      )}
    </div>
  </div>
);
