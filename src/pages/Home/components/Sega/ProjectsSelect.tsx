import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PlayIcon } from '@components/ui';

import { Urls } from '@services/Route/urls';

import classes from '@components/sega/sega.module.scss';
import { FEATURED_PROJECTS } from './sega.data';

export const ProjectsSelect: FC = () => (
  <section id="projects" className={`${classes.sec} ${classes.projects}`}>
    <div className={classes.wrap}>
      <div className={classes.banner}>
        <span>🗂️ STAGE SELECT</span>
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
                  PLAY <PlayIcon className={classes.txtIcon} />
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

      <Link to={Urls.Projects} className={classes.allProjects}>
        ALL PROJECTS <PlayIcon className={classes.txtIcon} />
      </Link>
    </div>
  </section>
);
