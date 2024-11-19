import React, { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import classes from './Link.module.scss';
import clsx from 'clsx';

interface Props {
  to:string;
  className?:string;
  children:React.ReactNode;
  icon?:ReactNode;
  onClick?:() => void;
}

export const Link:FC<Props> = ({ to, className, children, icon, onClick }) => {
  return (
    <RouterLink
      to={to}
      onClick={onClick}
      className={clsx(classes.link, className)}
    >
      {children}
      {icon && <span className={classes.icon}>{icon}</span>}
    </RouterLink>
  );
};
