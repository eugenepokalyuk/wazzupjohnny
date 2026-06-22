import { FC } from 'react';

import { SegaError } from '@features/Sega';

export const Error: FC = () => (
  <SegaError
    title="GAME OVER"
    subtitle="CONTINUE? — такой страницы нет, но игра ещё не окончена"
    code="ERROR 404"
  />
);
