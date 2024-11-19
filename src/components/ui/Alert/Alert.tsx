import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import classes from './Alert.module.scss';

interface Props {
  className?:string;
  variant?:'default';
  children:ReactNode;
}

export const Alert:FC<Props> = ({ className, variant = 'default', children }) => {
  return (
    <div
      className={clsx(classes.alert, classes[variant], className)}
    >
      {children}
    </div>
  );
};
