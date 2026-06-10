import { FC, useCallback, useEffect, useMemo } from 'react';

import { useTranslation } from '@shared/i18n';
import { SegaLayout } from '@widgets/sega-layout';
import {
  Achievements,
  BonusStage,
  CharacterStats,
  HomeContext,
  InsertCoin,
  LevelSelect,
  ProjectsSelect,
  TitleScreen,
  ToastBar,
  useHomeToast,
} from '@widgets/home';
import { useKonamiCheat } from '@features/konami-cheat';

import classes from '@shared/styles/sega.module.scss';

export const HomePage: FC = () => {
  const { t } = useTranslation();
  const { showToast, message, shown } = useHomeToast();

  const onActivate = useCallback(
    () => showToast(t.bonus.unlocked),
    [showToast, t],
  );
  const { cheat, unlocked, activate } = useKonamiCheat({ onActivate });

  // Scroll the freshly-unlocked Bonus Stage into view after it mounts.
  useEffect(() => {
    if (!cheat) return;

    const id = window.setTimeout(() => {
      document.getElementById('bonus')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(id);
  }, [cheat]);

  const ctx = useMemo(() => ({ showToast }), [showToast]);

  return (
    <SegaLayout fullBleed>
      <HomeContext.Provider value={ctx}>
        <TitleScreen />

        <LevelSelect />

        <ProjectsSelect />

        <CharacterStats />

        <Achievements />

        <InsertCoin cheat={cheat} onCheat={activate} />

        {unlocked && <BonusStage />}

        {cheat && <div className={classes.cheatFlash} />}

        <ToastBar message={message} shown={shown} />
      </HomeContext.Provider>
    </SegaLayout>
  );
};
