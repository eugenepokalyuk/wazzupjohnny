import { FC } from 'react';
import clsx from 'clsx';

import { useTranslation } from '@shared/i18n';
import { LinkIcon } from '@shared/ui';

import classes from '@shared/styles/sega.module.scss';
import { MEDALS } from '../model/home.data';
import { CoursesMock } from '../model/courses.data';

export const Achievements: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="achievements" className={`${classes.sec} ${classes.achievements}`}>
      <div className={classes.wrap}>
        <div className={classes.banner}>
          <span>🏆 {t.achievements.banner}</span>
        </div>

        {CoursesMock.map((world, wi) => (
          <div key={world.title} className={classes.world}>
            <div className={classes.worldBar}>
              <span className={classes.wn}>
                {t.achievements.world} {wi + 1}-1
              </span>

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
                            {t.common.viewCert}
                            <LinkIcon className={classes.txtIcon} />
                          </>
                        ) : (
                          t.common.complete
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
};
