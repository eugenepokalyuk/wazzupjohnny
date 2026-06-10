import { FC } from 'react';
import clsx from 'clsx';

import { useTranslation } from '@shared/i18n';
import classes from '@shared/styles/sega.module.scss';

import { useTheme } from '../model/useTheme';
import { PALETTES } from '../model/palettes';

interface ToggleProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
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

interface Props {
  onClose: () => void;
}

export const Tweaks: FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  const { palette, setPalette, crt, setCrt, flicker, setFlicker, floor, setFloor } =
    useTheme();

  return (
    <div className={classes.tweaks}>
      <div className={classes.tweaksHead}>
        <b>{t.tweaks.title}</b>
        <button
          type="button"
          className={classes.tweaksClose}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div className={classes.tweaksLabel}>{t.tweaks.palette}</div>
      <div className={classes.tweaksSeg}>
        {PALETTES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={clsx(classes.tweaksSegBtn, { [classes.on]: palette === p.id })}
            onClick={() => setPalette(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className={classes.tweaksLabel}>{t.tweaks.crt}</div>
      <Toggle label={t.tweaks.scanlines} value={crt} onChange={setCrt} />
      <Toggle label={t.tweaks.flicker} value={flicker} onChange={setFlicker} />
      <Toggle label={t.tweaks.floor} value={floor} onChange={setFloor} />
    </div>
  );
};
