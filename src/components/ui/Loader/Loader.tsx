import { FC } from 'react';
import clsx from 'clsx';
import classes from './Loader.module.scss';

interface LoaderProps {
  size?:'xs'|'small'|'medium';
  color?:'green'|'black';
}

export const Loader:FC<LoaderProps> = ({ size = 'medium', color = 'green' }) => {
  return (
    <div className={classes.loader}>
      <div className={clsx(classes.spinner, classes[size], classes[color])}></div>
    </div>
  );
};
