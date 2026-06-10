import { useMediaQuery } from 'usehooks-ts';

export enum Breakpoints {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

// Можно расширять список брейкпоинтов
const breakpoints: Record<Breakpoints, string> = {
  mobile: '(max-width: 767px)', // до 767px — mobile
  tablet: '(min-width: 768px) and (max-width: 1023px)', // 768–1023 — tablet
  desktop: '(min-width: 1024px)', // от 1024 и выше — desktop
};

/**
 * Хук useMedia.
 * Принимает брейкпоинт и возвращает булево — совпадает ли текущий viewport с ним.
 * Можно вызвать для нескольких и комбинировать.
 */
export function useMedia(breakpoint: Breakpoints): boolean {
  const query = breakpoints[breakpoint];

  return useMediaQuery(query);
}
