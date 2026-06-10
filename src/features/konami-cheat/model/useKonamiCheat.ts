import { useCallback, useEffect, useRef, useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';

import { KONAMI, KonamiStorageKey } from './konami';

interface Options {
  /** Fired when the cheat is accepted (e.g. to show a toast). */
  onActivate?: () => void;
}

export interface KonamiCheat {
  /** Transient flash state, true for ~1s right after activation. */
  cheat: boolean;
  /** Persisted: whether the bonus stage has been unlocked this session. */
  unlocked: boolean;
  /** Trigger the cheat manually (used by the tap-to-enter keycaps). */
  activate: () => void;
}

/**
 * Encapsulates the Konami-code easter egg: a layout-independent keyboard
 * listener plus the transient "cheat" flash and the persisted "unlocked" flag.
 */
export const useKonamiCheat = ({ onActivate }: Options = {}): KonamiCheat => {
  const [unlocked, setUnlocked] = useSessionStorage<boolean>(
    KonamiStorageKey.BonusUnlocked,
    false,
  );
  const [cheat, setCheat] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activate = useCallback(() => {
    setCheat(true);

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setCheat(false), 1100);

    setUnlocked(true);
    onActivate?.();
  }, [onActivate, setUnlocked]);

  useEffect(() => {
    let idx = 0;

    const onKey = (e: KeyboardEvent) => {
      const code = e.code;

      if (code === KONAMI[idx]) {
        idx += 1;
        if (idx === KONAMI.length) {
          idx = 0;
          activate();
        }
      } else {
        idx = code === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activate]);

  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    [],
  );

  return { cheat, unlocked, activate };
};
