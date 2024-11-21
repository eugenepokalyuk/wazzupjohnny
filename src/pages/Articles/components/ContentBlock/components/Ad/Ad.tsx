import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import classes from './Ad.module.scss';

interface Props {
  content: string;
  description?: string;
  imageUrl?: string;
  linkUrl: string;
}

export const Ad: FC<Props> = ({ content, description, imageUrl, linkUrl }) => (
  <a
    href={linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={classes.box}
  >
    {imageUrl && <img src={imageUrl} alt={content} className={classes.image} />}

    <div className={classes.content}>
      <Text tag={Tags.Paragraph} size={Size.MD} className={classes.text}>
        {content}
      </Text>

      {description && (
        <Text
          tag={Tags.Paragraph}
          size={Size.SM}
          className={classes.description}
        >
          {description}
        </Text>
      )}
    </div>
  </a>
);
