import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { Locale, LOCALES, useTranslation } from '@shared/i18n';

import classes from './LanguageSwitcher.module.scss';

/** Switches the locale by swapping the leading `/ru` or `/en` URL segment. */
export const LanguageSwitcher: FC = () => {
  const { locale } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const switchTo = (next: Locale) => {
    if (next === locale) return;

    const rest = location.pathname.replace(/^\/(ru|en)(?=\/|$)/, '');

    navigate(`/${next}${rest || '/'}${location.search}`);
  };

  return (
    <div className={classes.switcher} role="group" aria-label="Language">
      {LOCALES.map((item) => (
        <button
          key={item}
          type="button"
          className={clsx(classes.lang, { [classes.active]: item === locale })}
          onClick={() => switchTo(item)}
          aria-pressed={item === locale}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
