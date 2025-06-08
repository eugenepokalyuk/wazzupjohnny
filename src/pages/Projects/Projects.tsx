import { FC, useEffect, useState } from 'react';

import { Button, Size, Tags, Text } from '@components/ui';
import { Layout } from '@components/units';
import { ShapeWidget } from '@components/modules/Shape/ShapeWidget/ShapeWidget';
import { projectArray } from '@services/Api';

import classes from './Projects.module.scss';
import { ProjectCard } from './ProjectCard/ProjectCard';

export const Projects:FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const uniqueTags = Array.from(
    new Set(projectArray.flatMap((project) => project.badges)),
  );

  const filteredProjects = selectedTags.length
    ? projectArray.filter((project) =>
      selectedTags.every((tag) => project.badges.includes(tag)),
    )
    : projectArray;

  const toggleTag = (tag:string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  useEffect(() => {
    setActiveProjectIndex(0);
  }, []);

  const handleVisible = (index:number) => {
    setActiveProjectIndex(index);
  };

  const activeHint = filteredProjects[activeProjectIndex]?.hint || null;

  return (
    <Layout>
      <div className={classes.greetings_box}>
        <Text tag={Tags.Heading} size={Size.XL}>
          {'Мои проекты'}
        </Text>

        <Text tag={Tags.Paragraph} size={Size.LG}>
          {
            'Здесь найдешь список коммерческих и пет проектов, созданных мной с использованием современных технологий'
          }
        </Text>
      </div>

      <div className={classes.filter_box}>
        <Text tag={Tags.Heading_2}>{'Фильтр по тегам:'}</Text>

        <div className={classes.tags_box}>
          {uniqueTags.map((tag, index) => (
            <Button
              key={index}
              size={Size.SM}
              className={selectedTags.includes(tag) ? classes.active : ''}
              onClick={() => toggleTag(tag)}
              tilt
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className={classes.card_list}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onVisible={handleVisible}
              active={index === activeProjectIndex}
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

      <ShapeWidget visible={!!activeHint} message={activeHint} />
    </Layout>
  );
};
