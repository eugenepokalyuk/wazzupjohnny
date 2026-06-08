import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import clsx from 'clsx';

import {
  SegaStorageKey,
  SegaTopBar,
  Tweaks,
  useSegaTheme,
} from '@components/sega';

import classes from '@components/sega/sega.module.scss';

import { KONAMI } from './sega.data';
import { SegaContext } from './SegaContext';
import { TitleScreen } from './TitleScreen';
import { LevelSelect } from './LevelSelect';
import { ProjectsSelect } from './ProjectsSelect';
import { CharacterStats } from './CharacterStats';
import { Achievements } from './Achievements';
import { InsertCoin } from './InsertCoin';
import { BonusStage } from './BonusStage';

export const Sega: FC = () => {
  const {
    palette,
    setPalette,
    crt,
    setCrt,
    flicker,
    setFlicker,
    floor,
    setFloor,
  } = useSegaTheme();
  const [unlocked, setUnlocked] = useSessionStorage<boolean>(
    SegaStorageKey.BonusUnlocked,
    false,
  );

  const [tweaksOpen, setTweaksOpen] = useState<boolean>(false);
  const [cheat, setCheat] = useState<boolean>(false);
  const cheatTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [toastMsg, setToastMsg] = useState<string>('');
  const [toastShown, setToastShown] = useState<boolean>(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastShown(true);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    toastTimer.current = setTimeout(() => setToastShown(false), 1800);
  }, []);

  const ctx = useMemo(() => ({ showToast }), [showToast]);

  // Fire the easter-egg reward (shared by the keyboard code and tap-to-enter).
  const activateCheat = useCallback(() => {
    setCheat(true);
    if (cheatTimer.current) {
      clearTimeout(cheatTimer.current);
    }
    cheatTimer.current = setTimeout(() => setCheat(false), 1100);
    setUnlocked(true);
    showToast('CHEAT ACCEPTED · BONUS STAGE UNLOCKED');
  }, [showToast, setUnlocked]);

  // Konami code easter egg via keyboard (layout-independent — uses e.code).
  useEffect(() => {
    let idx = 0;

    const onKey = (e: KeyboardEvent) => {
      const code = e.code;

      if (code === KONAMI[idx]) {
        idx += 1;
        if (idx === KONAMI.length) {
          idx = 0;
          activateCheat();
        }
      } else {
        idx = code === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activateCheat]);

  // Scroll the freshly-unlocked Bonus Stage into view after it mounts.
  useEffect(() => {
    if (!cheat) return;

    const id = window.setTimeout(() => {
      document
        .getElementById('bonus')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(id);
  }, [cheat]);

  useEffect(
    () => () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
      if (cheatTimer.current) {
        clearTimeout(cheatTimer.current);
      }
    },
    [],
  );

  return (
    <SegaContext.Provider value={ctx}>
      <div
        className={clsx(classes.root, {
          [classes.flicker]: flicker,
          [classes.noCrt]: !crt,
          [classes.noFloor]: !floor,
        })}
        data-palette={palette}
      >
        <div className={classes.crt} />

        <SegaTopBar onOpenTweaks={() => setTweaksOpen((v) => !v)} />

        <TitleScreen />
        <LevelSelect />
        <ProjectsSelect />
        <CharacterStats />
        <Achievements />
        <InsertCoin cheat={cheat} onCheat={activateCheat} />
        {unlocked && <BonusStage />}

        {cheat && <div className={classes.cheatFlash} />}

        <div className={clsx(classes.toast, { [classes.show]: toastShown })}>
          {toastMsg}
        </div>

        {tweaksOpen && (
          <Tweaks
            palette={palette}
            setPalette={setPalette}
            crt={crt}
            setCrt={setCrt}
            flicker={flicker}
            setFlicker={setFlicker}
            floor={floor}
            setFloor={setFloor}
            onClose={() => setTweaksOpen(false)}
          />
        )}
      </div>
    </SegaContext.Provider>
  );
};
