import { useContext } from 'react';

import { I18nContext, I18nValue } from './I18nContext';

export const useTranslation = (): I18nValue => {
  const ctx = useContext(I18nContext);

  if (!ctx) {
    throw new Error('useTranslation must be used within <I18nProvider>');
  }

  return ctx;
};

/** Replaces `{name}` placeholders in a template with the given values. */
export const format = (
  template: string,
  vars: Record<string, string | number>,
): string =>
  template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in vars ? String(vars[key]) : `{${key}}`,
  );
