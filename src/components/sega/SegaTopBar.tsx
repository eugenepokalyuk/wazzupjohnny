import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { Urls } from '@services/Route/urls';
import { SettingsIcon, StarIcon } from '@components/ui';

import classes from './sega.module.scss';

interface Props {
  onOpenTweaks: () => void;
}

const NAV = [
  { to: Urls.Home, label: 'HOME' },
  { to: Urls.Projects, label: 'PROJECTS' },
  { to: Urls.Articles, label: 'ARTICLES' },
];

export const SegaTopBar: FC<Props> = ({ onOpenTweaks }) => (
  <header className={classes.topbar}>
    <Link to={Urls.Home} className={classes.tbLogo}>
      <StarIcon className={classes.tbIcon} />
      <span className={classes.tbLogoText}>WAZZUPJOHNNY</span>
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

    <button
      type="button"
      className={classes.tbTweaks}
      onClick={onOpenTweaks}
      aria-label="Темы и настройки"
      title="Темы и настройки"
    >
      <SettingsIcon className={classes.tbIcon} />
    </button>
  </header>
);
