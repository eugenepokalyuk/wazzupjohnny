import { FC, PropsWithChildren, useMemo } from 'react';

import { Locale } from './config';
import { I18nContext } from './I18nContext';
import { ru } from './dictionaries/ru';
import { en } from './dictionaries/en';
import { Dictionary } from './types';

const DICTIONARIES: Record<Locale, Dictionary> = { ru, en };

interface Props {
  locale: Locale;
}

/** Provides the active locale and its dictionary to the tree. */
export const I18nProvider: FC<PropsWithChildren<Props>> = ({ locale, children }) => {
  const value = useMemo(() => ({ locale, t: DICTIONARIES[locale] }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
