import { FC } from 'react';

import classes from './Interview.module.scss';

export const Interview: FC = () => (
  <div className={classes.box}>
    <h1>{'Привет! Меня зовут Евгений. Я занимаюсь фронтенд разработкой'}</h1>
  </div>
);
