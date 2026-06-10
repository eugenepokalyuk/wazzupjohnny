import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { DEFAULT_LOCALE, I18nProvider, isLocale } from '@shared/i18n';

import { AnimatedRoutes } from './AnimatedRoutes';

/** Reads `:locale` from the URL, validates it and provides the dictionary. */
export const LocaleRoute: FC = () => {
  const { locale } = useParams<{ locale: string }>();

  if (!isLocale(locale)) {
    return <Navigate to={`/${DEFAULT_LOCALE}/`} replace />;
  }

  return (
    <I18nProvider locale={locale}>
      <AnimatedRoutes />
    </I18nProvider>
  );
};
