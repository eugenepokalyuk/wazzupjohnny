import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppPaths, useTranslation } from '@shared/i18n';
import { PlayIcon } from '@shared/ui';

import classes from '@shared/styles/sega.module.scss';
import { LEVELS, LevelCard } from '../model/home.data';

const LevelInner: FC<{ level: LevelCard }> = ({ level }) => {
  const { t } = useTranslation();
  const copy = t.levels[level.key];

  return (
    <>
      <span className={classes.lvCursor}>
        <PlayIcon className={classes.txtIcon} />
      </span>
      <div className={classes.lvNo}>{level.no}</div>
      <div className={classes.lvIcon}>{level.icon}</div>
      <div className={classes.lvTitle}>{copy.title}</div>
      <div className={classes.lvDesc}>{copy.desc}</div>
    </>
  );
};

export const LevelSelect: FC = () => {
  const { t } = useTranslation();
  const paths = useAppPaths();

  return (
    <section id="levels" className={`${classes.sec} ${classes.levels}`}>
      <div className={classes.wrap}>
        <div className={classes.banner}>
          <span>🕹️ {t.levels.banner}</span>
        </div>

        <div className={classes.levelsGrid}>
          {LEVELS.map((level) =>
            level.to.type === 'route' ? (
              <Link key={level.no} className={classes.level} to={paths[level.to.name]}>
                <LevelInner level={level} />
              </Link>
            ) : (
              <a key={level.no} className={classes.level} href={level.to.hash}>
                <LevelInner level={level} />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
