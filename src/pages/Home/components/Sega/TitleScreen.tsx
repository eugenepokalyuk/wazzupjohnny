import { FC } from 'react';
import clsx from 'clsx';

import { ArrowUpIcon, PlayIcon } from '@components/ui';
import classes from '@components/sega/sega.module.scss';

import { PLAYER_NAME } from './sega.data';
import { useSega } from './SegaContext';
import { TvScreen } from './TvScreen';

export const TitleScreen: FC = () => {
  const { showToast } = useSega();

  const handlePressStart = () => {
    showToast('PLAYER 1 READY!');
    document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="boot" className={classes.boot}>
      <div className={classes.floor} />

      <TvScreen />

      <h1 className={classes.titleCart}>
        {'WAZZUP'}
        <br />
        {'JOHNNY'}
      </h1>

      <div className={classes.titleSub}>{'16-BIT FRONTEND'}</div>

      <p className={classes.titleTag}>
        PLAYER 1: <b>{PLAYER_NAME}</b> — фронтенд-разработчик
      </p>

      <button
        type="button"
        className={classes.pressStart}
        onClick={handlePressStart}
      >
        <PlayIcon className={classes.txtIcon} /> PRESS{' '}
        <span className={classes.blink}>START</span>
      </button>
      <div className={classes.copyright}>
        © {new Date().getFullYear()} EUGENE SOFT · ALL RIGHTS RESERVED
      </div>

      <a href="#levels" className={classes.scrolldown} aria-label="scroll">
        <ArrowUpIcon className={clsx(classes.txtIcon, classes.iconFlip)} />
      </a>
    </section>
  );
};
