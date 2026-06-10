import { createContext } from 'react';

import { Locale } from './config';
import { Dictionary } from './types';

export interface I18nValue {
  locale: Locale;
  t: Dictionary;
}

export const I18nContext = createContext<I18nValue | null>(null);
