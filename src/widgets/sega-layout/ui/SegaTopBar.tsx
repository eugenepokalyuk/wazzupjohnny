import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { useAppPaths, useTranslation } from '@shared/i18n';
import { SettingsIcon, StarIcon } from '@shared/ui';
import { LanguageSwitcher } from '@features/language-switcher';

import classes from '@shared/styles/sega.module.scss';

interface Props {
  onOpenTweaks: () => void;
}

export const SegaTopBar: FC<Props> = ({ onOpenTweaks }) => {
  const paths = useAppPaths();
  const { t } = useTranslation();

  const nav = [
    { to: paths.home, label: t.nav.home, end: true },
    { to: paths.projects, label: t.nav.projects, end: false },
    { to: paths.articles, label: t.nav.articles, end: false },
  ];

  return (
    <header className={classes.topbar}>
      <Link to={paths.home} className={classes.tbLogo}>
        <StarIcon className={classes.tbIcon} />
        <span className={classes.tbLogoText}>{'WAZZUPJOHNNY'}</span>
      </Link>

      <nav className={classes.tbNav}>
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              clsx(classes.tbLink, { [classes.tbLinkActive]: isActive })
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={classes.tbRight}>
        <LanguageSwitcher />

        <button
          type="button"
          className={classes.tbTweaks}
          onClick={onOpenTweaks}
          aria-label={t.tweaks.open}
          title={t.tweaks.open}
        >
          <SettingsIcon className={classes.tbIcon} />
        </button>
      </div>
    </header>
  );
};
