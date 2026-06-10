import { useMemo } from 'react';

import { Locale } from './config';
import { useTranslation } from './useTranslation';

/** Relative route segments, mounted under the `/:locale/` parent route. */
export const ROUTE_SEGMENTS = {
  home: '',
  projects: 'projects/',
  articles: 'articles/',
  article: 'articles/:slug/',
} as const;

/** Absolute, locale-prefixed path builders. */
export const buildPath = {
  home: (locale: Locale) => `/${locale}/`,
  projects: (locale: Locale) => `/${locale}/projects/`,
  articles: (locale: Locale) => `/${locale}/articles/`,
  article: (locale: Locale, slug: string) => `/${locale}/articles/${slug}/`,
};

export interface AppPaths {
  home: string;
  projects: string;
  articles: string;
  article: (slug: string) => string;
}

/** Locale-aware paths bound to the currently active locale. */
export const useAppPaths = (): AppPaths => {
  const { locale } = useTranslation();

  return useMemo(
    () => ({
      home: buildPath.home(locale),
      projects: buildPath.projects(locale),
      articles: buildPath.articles(locale),
      article: (slug: string) => buildPath.article(locale, slug),
    }),
    [locale],
  );
};
