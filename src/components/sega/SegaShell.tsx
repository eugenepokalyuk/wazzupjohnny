import { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';

import classes from './sega.module.scss';
import { SegaTopBar } from './SegaTopBar';
import { Tweaks } from './Tweaks';
import { useSegaTheme } from './theme';

interface Props {
  children: ReactNode;
}

/** Shared Sega chrome (CRT, top bar, theme tweaks) for the inner pages. */
export const SegaShell: FC<Props> = ({ children }) => {
  const { palette, setPalette, crt, setCrt, flicker, setFlicker, floor, setFloor } = useSegaTheme();
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

      <SegaTopBar
        palette={palette}
        setPalette={setPalette}
        onOpenTweaks={() => setTweaksOpen((v) => !v)}
      />

      <main className={classes.pageMain}>{children}</main>

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
  );
};
