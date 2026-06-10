import { FC } from 'react';
import clsx from 'clsx';

import { useTranslation } from '@shared/i18n';
import { ArrowUpIcon, PlayIcon } from '@shared/ui';

import classes from '@shared/styles/sega.module.scss';
import { PLAYER_NAME } from '../model/home.data';
import { useHome } from '../model/HomeContext';

export const TitleScreen: FC = () => {
  const { t } = useTranslation();
  const { showToast } = useHome();

  const handlePressStart = () => {
    showToast(t.title.ready);
    document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="boot" className={classes.boot}>
      <div className={classes.floor} />

      <div className={classes.tv}>
        <img className={classes.tvImg} src="/images/shape/cat.png" alt="Аватар-кот" />
      </div>

      <h1 className={classes.titleCart}>
        WAZZUP
        <br />
        JOHNNY
      </h1>
      <div className={classes.titleSub}>{t.title.edition}</div>
      <p className={classes.titleTag}>
        {t.title.player}: <b>{PLAYER_NAME}</b> — {t.title.role}
      </p>

      <button type="button" className={classes.pressStart} onClick={handlePressStart}>
        <PlayIcon className={classes.txtIcon} /> {t.title.pressStart}{' '}
        <span className={classes.blink}>START</span>
      </button>
      <div className={classes.copyright}>{t.title.copyright}</div>

      <a href="#levels" className={classes.scrolldown} aria-label="scroll">
        <ArrowUpIcon className={clsx(classes.txtIcon, classes.iconFlip)} />
      </a>
    </section>
  );
};
