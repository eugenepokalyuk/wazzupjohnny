import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';
import { ProjectItemProps } from '@services/Api';

import classes from './CardList.module.scss';
import { CardItem } from './CardItem/CardItem';

interface Props {
  projects:ProjectItemProps[];
  projectIndex:number;
  setProjectIndex:(value:number) => void;
}

export const CardList:FC<Props> = ({ projects, projectIndex, setProjectIndex }) => {
  const handleVisible = (index:number) => {
    setProjectIndex(index);
  };

  return (
    <div className={classes.card_list}>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <CardItem
            key={index}
            project={project}
            index={index}
            onVisible={handleVisible}
            active={index === projectIndex}
          />
        ))
      ) : (
        <Text tag={Tags.Heading} size={Size.LG}>
          {
            'Нет такого проекта, но если есть интересная идея может поделиться со мной'
          }
        </Text>
      )}
    </div>
  );
};
