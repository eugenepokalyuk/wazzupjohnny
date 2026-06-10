import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { PlayIcon } from '@components/ui';

import classes from '@components/sega/sega.module.scss';
import { LevelCard, LEVELS } from './sega.data';

const LevelInner: FC<{ level: LevelCard }> = ({ level }) => (
  <>
    <span className={classes.lvCursor}>
      <PlayIcon className={classes.txtIcon} />
    </span>
    <div className={classes.lvNo}>{level.no}</div>
    <div className={classes.lvIcon}>{level.icon}</div>
    <div className={classes.lvTitle}>{level.title}</div>
    <div className={classes.lvDesc}>{level.desc}</div>
  </>
);

export const LevelSelect: FC = () => (
  <section id="levels" className={`${classes.sec} ${classes.levels}`}>
    <div className={classes.wrap}>
      <div className={classes.banner}>
        <span>🕹️ LEVEL SELECT</span>
      </div>

      <div className={classes.levelsGrid}>
        {LEVELS.map(
          (level): ReactNode =>
            level.href.startsWith('/') ? (
              <Link key={level.no} className={classes.level} to={level.href}>
                <LevelInner level={level} />
              </Link>
            ) : (
              <a key={level.no} className={classes.level} href={level.href}>
                <LevelInner level={level} />
              </a>
            ),
        )}
      </div>
    </div>
  </section>
);
