import { FC, useState } from 'react';

import { Button, Card, Link, Size, Tags, Text, Variant } from '@components/ui';
import { Layout } from '@components/units';

import classes from './Projects.module.scss';
import { ProjectArray } from './Projects.mock.tsx';

export const Projects: FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const uniqueTags = Array.from(
    new Set(ProjectArray.flatMap((project) => project.badges)),
  );

  const filteredProjects = selectedTags.length
    ? ProjectArray.filter((project) =>
        selectedTags.every((tag) => project.badges.includes(tag)),
      )
    : ProjectArray;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

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
        {!!filteredProjects?.length ? (
          filteredProjects.map((project, index) => (
            <Card className={classes.card} key={index}>
              <Text tag={Tags.Heading_3} size={Size.LG}>
                {project.title}
              </Text>

              <Text>{project.description}</Text>

              <div className={classes.tags_box}>
                {project.badges.map((badge, idx) => (
                  <Button
                    key={idx}
                    variant={Variant.Accent}
                    size={Size.SM}
                    tilt
                  >
                    {badge}
                  </Button>
                ))}
              </div>

              <div>
                <Link
                  to={project.urlGitHub}
                  // @ts-ignore
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={Variant.Secondary} wide>
                    {'Посмотреть код'}
                  </Button>
                </Link>
              </div>
            </Card>
          ))
        ) : (
          <Text tag={Tags.Heading} size={Size.LG}>
            {
              'Нет такого проекта, но если есть интересная идея может поделиться со мной'
            }
          </Text>
        )}
      </div>
    </Layout>
  );
};
