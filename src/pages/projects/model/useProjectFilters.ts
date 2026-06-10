import { useMemo, useState } from 'react';

import { ProjectItemProps, projectArray } from '@entities/project';

export interface ProjectFilters {
  tags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  projects: ProjectItemProps[];
}

/** Tags that appear in at least two projects, most frequent first. */
const topTags = (): string[] => {
  const counts = new Map<string, number>();
  projectArray.forEach((p) => p.badges.forEach((b) => counts.set(b, (counts.get(b) ?? 0) + 1)));

  return [...counts.entries()]
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
};

/** Project list state: the active tag filter and the filtered, sorted result. */
export const useProjectFilters = (): ProjectFilters => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = useMemo(topTags, []);

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  const projects = useMemo(() => {
    const filtered = selectedTags.length
      ? projectArray.filter((p) => selectedTags.every((t) => p.badges.includes(t)))
      : projectArray;

    return [...filtered].sort((a, b) => b.created - a.created);
  }, [selectedTags]);

  return { tags, selectedTags, toggleTag, projects };
};
