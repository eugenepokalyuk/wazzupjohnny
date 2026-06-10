import { FC } from 'react';
import clsx from 'clsx';

import classes from './sega.module.scss';
import { PaletteId, PALETTES } from './theme';

interface Props {
  palette: PaletteId;
  setPalette: (p: PaletteId) => void;
  crt: boolean;
  setCrt: (v: boolean | ((prev: boolean) => boolean)) => void;
  flicker: boolean;
  setFlicker: (v: boolean) => void;
  floor: boolean;
  setFloor: (v: boolean) => void;
  onClose: () => void;
}

interface ToggleProps {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({ label, value, onChange }) => (
  <div className={classes.tweaksToggleRow}>
    <span>{label}</span>
    <button
      type="button"
      className={clsx(classes.tweaksToggle, { [classes.on]: value })}
      role="switch"
      aria-checked={value}
      aria-label={label}
      onClick={() => onChange(!value)}
    >
      <i />
    </button>
  </div>
);

export const Tweaks: FC<Props> = ({
  palette,
  setPalette,
  crt,
  setCrt,
  flicker,
  setFlicker,
  floor,
  setFloor,
  onClose,
}) => (
  <div className={classes.tweaks}>
    <div className={classes.tweaksHead}>
      <b>TWEAKS</b>
      <button
        type="button"
        className={classes.tweaksClose}
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
    </div>

    <div className={classes.tweaksLabel}>ПАЛИТРА КАРТРИДЖА</div>
    <div className={classes.tweaksSeg}>
      {PALETTES.map((p) => (
        <button
          key={p.id}
          type="button"
          className={clsx(classes.tweaksSegBtn, {
            [classes.on]: palette === p.id,
          })}
          onClick={() => setPalette(p.id)}
        >
          {p.label}
        </button>
      ))}
    </div>

    <div className={classes.tweaksLabel}>CRT-ТЕЛЕВИЗОР</div>
    <Toggle label="Скан-лайны" value={crt} onChange={setCrt} />
    <Toggle label="Мерцание" value={flicker} onChange={setFlicker} />
    <Toggle label="Сетка-пол" value={floor} onChange={setFloor} />
  </div>
);
