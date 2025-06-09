import { FC } from 'react';

import { Button, Size, Tags, Text } from '@components/ui';
import { projectArray } from '@services/Api';

import classes from './Filter.module.scss';

interface Props {
  tags:string[];
  onClick:(value:string) => void;
}

export const Filter:FC<Props> = ({ tags, onClick }) => {
  const uniqueTags = Array.from(
    new Set(projectArray.flatMap((project) => project.badges)),
  );

  return (
    <div className={classes.filter_box}>
      <Text tag={Tags.Heading_2}>{'Фильтр по тегам:'}</Text>

      <div className={classes.tags_box}>
        {uniqueTags.map((tag, index) => (
          <Button
            key={index}
            size={Size.SM}
            className={tags.includes(tag) ? classes.active : ''}
            onClick={() => onClick(tag)}
            tilt
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};
