import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { Urls } from '@services/Route/urls';

import classes from './sega.module.scss';
import { PaletteSwatches } from './PaletteSwatches';
import { PaletteId } from './theme';
import { SettingsIcon, StarIcon } from '@components/ui';

interface Props {
  palette: PaletteId;
  setPalette: (p: PaletteId) => void;
  onOpenTweaks: () => void;
  /** When provided, shows the arcade CREDIT counter (home only). */
  credits?: number;
}

const NAV = [
  { to: Urls.Home, label: 'HOME' },
  { to: Urls.Projects, label: 'PROJECTS' },
  { to: Urls.Articles, label: 'ARTICLES' },
];

export const SegaTopBar: FC<Props> = ({
  palette,
  setPalette,
  onOpenTweaks,
  credits,
}) => (
  <header className={classes.topbar}>
    <Link to={Urls.Home} className={classes.tbLogo}>
      <StarIcon />

      {'WAZZUPJOHNNY'}
    </Link>

    <nav className={classes.tbNav}>
      {NAV.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end
          className={({ isActive }) =>
            clsx(classes.tbLink, { [classes.tbLinkActive]: isActive })
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>

    <div className={classes.tbRight}>
      <PaletteSwatches palette={palette} setPalette={setPalette} />

      {credits !== undefined && (
        <div className={classes.tbCoins}>CREDIT {credits}</div>
      )}

      <button
        type="button"
        className={classes.tbTweaks}
        onClick={onOpenTweaks}
        aria-label="Open tweaks"
      >
        <SettingsIcon className={classes.tbIcon} />
      </button>
    </div>
  </header>
);
