import { FC, useMemo, useState } from 'react';
import clsx from 'clsx';

import { SegaShell } from '@components/sega';
import classes from '@components/sega/sega.module.scss';
import { PlayIcon } from '@components/ui';
import { projectArray } from '@services/Api';

/** Tags that appear in at least two projects, most frequent first. */
const useTopTags = () =>
  useMemo(() => {
    const counts = new Map<string, number>();
    projectArray.forEach((p) =>
      p.badges.forEach((b) => counts.set(b, (counts.get(b) ?? 0) + 1)),
    );

    return [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, []);

export const Projects: FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = useTopTags();

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  const projects = useMemo(() => {
    const filtered = selectedTags.length
      ? projectArray.filter((p) =>
          selectedTags.every((t) => p.badges.includes(t)),
        )
      : projectArray;

    return [...filtered].sort(
      (a, b) =>
        (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0) || b.created - a.created,
    );
  }, [selectedTags]);

  return (
    <SegaShell>
      <section className={`${classes.sec} ${classes.projects}`}>
        <div className={classes.wrap}>
          <div className={classes.banner}>
            <span>🗂️ MY PROJECTS</span>
          </div>

          <p className={classes.pageLead}>
            PORTFOLIO STAGE — выбери технологию-фильтр и пройди уровень. Всего{' '}
            {projectArray.length} проектов в архиве
          </p>

          <div className={classes.filterRow}>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={clsx(classes.chip, {
                  [classes.chipOn]: selectedTags.includes(tag),
                })}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {projects.length === 0 ? (
            <div className={classes.emptyNote}>
              NO STAGE FOUND · сбрось фильтры
            </div>
          ) : (
            <div className={classes.projGrid}>
              {projects.map((project) => {
                const href = project.url || project.urlGitHub || null;
                const inner = (
                  <>
                    <div className={classes.projHead}>
                      <span className={classes.projYear}>
                        {project.created}
                      </span>
                      {href && (
                        <span className={classes.projGo}>
                          {project.url ? 'PLAY' : 'CODE'}{' '}
                          <PlayIcon className={classes.txtIcon} />
                        </span>
                      )}
                    </div>
                    <div className={classes.projTitle}>{project.title}</div>
                    <p className={classes.projDesc}>{project.description}</p>
                    <div className={classes.projBadges}>
                      {project.badges.slice(0, 6).map((badge) => (
                        <span key={badge} className={classes.projBadge}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </>
                );

                return href ? (
                  <a
                    key={project.title}
                    className={classes.proj}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={project.title} className={classes.proj}>
                    {inner}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </SegaShell>
  );
};
