import { FC } from 'react';
import clsx from 'clsx';

import classes from './sega.module.scss';
import { PALETTES, PaletteId } from './theme';

interface Props {
  palette: PaletteId;
  setPalette: (p: PaletteId) => void;
}

export const PaletteSwatches: FC<Props> = ({ palette, setPalette }) => (
  <div className={classes.paletteSwatches} role="radiogroup" aria-label="Цветовая тема">
    {PALETTES.map((p) => (
      <button
        key={p.id}
        type="button"
        className={clsx(classes.swatch, { [classes.on]: palette === p.id })}
        role="radio"
        aria-checked={palette === p.id}
        aria-label={`Тема ${p.label}`}
        title={p.label}
        onClick={() => setPalette(p.id)}
      >
        <i style={{ background: p.preview[0] }} />
        <i style={{ background: p.preview[1] }} />
      </button>
    ))}
  </div>
);
