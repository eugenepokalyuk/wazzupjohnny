import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DEFAULT_LOCALE } from '@shared/i18n';

import { LocaleRoute } from './LocaleRoute';

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}/`} replace />} />
    <Route path="/:locale/*" element={<LocaleRoute />} />
  </Routes>
);
