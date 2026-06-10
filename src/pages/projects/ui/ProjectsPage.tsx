import { FC } from 'react';
import clsx from 'clsx';

import { format, useTranslation } from '@shared/i18n';
import { PlayIcon } from '@shared/ui';
import { projectArray } from '@entities/project';
import { SegaLayout } from '@widgets/sega-layout';

import classes from '@shared/styles/sega.module.scss';
import { useProjectFilters } from '../model/useProjectFilters';

export const ProjectsPage: FC = () => {
  const { t } = useTranslation();
  const { tags, selectedTags, toggleTag, projects } = useProjectFilters();

  return (
    <SegaLayout>
      <section className={`${classes.sec} ${classes.projects}`}>
        <div className={classes.wrap}>
          <div className={classes.banner}>
            <span>{t.projectsPage.banner}</span>
          </div>

          <p className={classes.pageLead}>
            {format(t.projectsPage.lead, { count: projectArray.length })}
          </p>

          <div className={classes.filterRow}>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={clsx(classes.chip, { [classes.chipOn]: selectedTags.includes(tag) })}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {projects.length === 0 ? (
            <div className={classes.emptyNote}>{t.projectsPage.empty}</div>
          ) : (
            <div className={classes.projGrid}>
              {projects.map((project) => {
                const href = project.url || project.urlGitHub || null;
                const inner = (
                  <>
                    <div className={classes.projHead}>
                      <span className={classes.projYear}>{project.created}</span>
                      {href && (
                        <span className={classes.projGo}>
                          {project.url ? t.common.play : t.common.code}{' '}
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
    </SegaLayout>
  );
};
