import { FC } from 'react';

import classes from './Board.module.scss';
import { Courses } from './components/Courses/Courses';
import { Navigation } from './components/Navigation/Navigation';
import { Books } from './components/Books/Books';

export const Board: FC = () => (
  <div className={classes.box}>
    <Navigation />

    <Courses />

    <Books />
  </div>
);
