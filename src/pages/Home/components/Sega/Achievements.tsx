import { FC } from 'react';
import clsx from 'clsx';

import { LinkIcon } from '@components/ui';

import classes from '@components/sega/sega.module.scss';

import { MEDALS } from './sega.data';
import { CoursesMock } from './courses.data';

export const Achievements: FC = () => (
  <section
    id="achievements"
    className={`${classes.sec} ${classes.achievements}`}
  >
    <div className={classes.wrap}>
      <div className={classes.banner}>
        <span>🏆 ACHIEVEMENTS UNLOCKED</span>
      </div>

      {CoursesMock.map((world, wi) => (
        <div key={world.title} className={classes.world}>
          <div className={classes.worldBar}>
            <span className={classes.wn}>WORLD {wi + 1}-1</span>

            <span className={classes.wt}>{world.title}</span>

            <span className={classes.wp}>
              {world.lessons.length}/{world.lessons.length}
            </span>
          </div>

          <div className={classes.achGrid}>
            {world.lessons.map((lesson, li) => {
              const medal = MEDALS[li % MEDALS.length];
              const hasLink = Boolean(lesson.link) && lesson.link !== '#';
              const body = (
                <p>
                  <span className={classes.medal}>{medal}</span>

                  <span>
                    <span className={classes.at}>{lesson.name}</span>

                    <span className={classes.au}>
                      {hasLink ? (
                        <>
                          VIEW CERT
                          <LinkIcon className={classes.txtIcon} />
                        </>
                      ) : (
                        'COMPLETE'
                      )}
                    </span>
                  </span>
                </p>
              );

              return hasLink ? (
                <a
                  key={lesson.name}
                  className={clsx(classes.ach, classes.achLink)}
                  href={lesson.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {body}
                </a>
              ) : (
                <div key={lesson.name} className={classes.ach}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);
