import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Link.module.scss';

interface Props {
  to:string;
  className?:string;
  icon?:ReactNode;
  onClick?:() => void;
  children:ReactNode;
}

export const Link:FC<Props> = ({
                                 to,
                                 className,
                                 icon,
                                 onClick,
                                 children,
                                 ...props
                               }) => (
  <RouterLink
    to={to}
    onClick={onClick}
    className={clsx(classes.link, className)}
    {...props}
  >
    {children}

    {icon && <span className={classes.icon}>{icon}</span>}
  </RouterLink>
);
