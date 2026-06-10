import { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';

import { Tweaks, useTheme } from '@features/theme-switcher';
import classes from '@shared/styles/sega.module.scss';

import { SegaTopBar } from './SegaTopBar';

interface Props {
  children: ReactNode;
  /** Render children flush against the chrome (used by the full-screen Home hero). */
  fullBleed?: boolean;
}

/** Shared Sega chrome (CRT, top bar, theme tweaks) wrapping every page. */
export const SegaLayout: FC<Props> = ({ children, fullBleed = false }) => {
  const { palette, crt, flicker, floor } = useTheme();
  const [tweaksOpen, setTweaksOpen] = useState(false);

  return (
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

      {fullBleed ? children : <main className={classes.pageMain}>{children}</main>}

      {tweaksOpen && <Tweaks onClose={() => setTweaksOpen(false)} />}
    </div>
  );
};
