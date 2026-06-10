import { FC, PropsWithChildren } from 'react';

import { DEFAULT_LOCALE, I18nProvider } from '@shared/i18n';
import { ThemeProvider } from '@features/theme-switcher';

/**
 * App-wide providers. The default-locale I18nProvider guarantees translation
 * hooks always have a value (e.g. inside the ErrorBoundary); the locale route
 * nests its own I18nProvider with the locale read from the URL.
 */
export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <I18nProvider locale={DEFAULT_LOCALE}>{children}</I18nProvider>
  </ThemeProvider>
);
