import { FC, useEffect, useState } from 'react';

import { Layout } from '@components/units';
import { ShapeWidget } from '@components/modules/Shape/ShapeWidget/ShapeWidget';
import { projectArray } from '@services/Api';

import { Greetings } from './Greetings/Greetings';
import { Filter } from './Filter/Filter';
import { CardList } from './CardList/CardList';

export const Projects: FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const filteredProjects = selectedTags.length
    ? projectArray.filter((project) =>
        selectedTags.every((tag) => project.badges.includes(tag)),
      )
    : projectArray;

  useEffect(() => {
    setActiveProjectIndex(0);
  }, []);

  const activeHint = filteredProjects[activeProjectIndex]?.hint || null;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <Layout>
      <Greetings />

      <Filter tags={selectedTags} onClick={toggleTag} />

      <CardList
        projects={filteredProjects}
        projectIndex={activeProjectIndex}
        setProjectIndex={setActiveProjectIndex}
      />

      <ShapeWidget visible={!!activeHint} message={activeHint} />
    </Layout>
  );
};
