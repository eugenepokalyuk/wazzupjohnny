import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppPaths, useTranslation } from '@shared/i18n';
import { PlayIcon } from '@shared/ui';

import classes from '@shared/styles/sega.module.scss';
import { FEATURED_PROJECTS } from '../model/home.data';

export const ProjectsSelect: FC = () => {
  const { t } = useTranslation();
  const paths = useAppPaths();

  return (
    <section id="projects" className={`${classes.sec} ${classes.projects}`}>
      <div className={classes.wrap}>
        <div className={classes.banner}>
          <span>🗂️ {t.stageSelect.banner}</span>
        </div>

        <div className={classes.projGrid}>
          {FEATURED_PROJECTS.map((project) => {
            const href = project.url || project.urlGitHub || '#';

            return (
              <a
                key={project.title}
                className={classes.proj}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.projHead}>
                  <span className={classes.projYear}>{project.created}</span>

                  <span className={classes.projGo}>
                    {t.common.play} <PlayIcon className={classes.txtIcon} />
                  </span>
                </div>
                <div className={classes.projTitle}>{project.title}</div>
                <p className={classes.projDesc}>{project.description}</p>
                <div className={classes.projBadges}>
                  {project.badges.slice(0, 5).map((badge) => (
                    <span key={badge} className={classes.projBadge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>

        <Link to={paths.projects} className={classes.allProjects}>
          {t.common.allProjects} <PlayIcon className={classes.txtIcon} />
        </Link>
      </div>
    </section>
  );
};
