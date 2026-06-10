import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Link.module.scss';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  icon?: ReactNode;
  newTab?: boolean;
  children: ReactNode;
}

export const Link: FC<Props> = ({ to, className, icon, children, newTab, ...props }) => {
  const newTabProps = newTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const unionProps = {
    ...newTabProps,
    ...props,
    className: clsx(classes.link, className),
  };

  return (
    <RouterLink to={to} {...unionProps}>
      {children}

      {icon && <span className={classes.icon}>{icon}</span>}
    </RouterLink>
  );
};
