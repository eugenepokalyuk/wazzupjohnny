import { FC } from 'react';
import clsx from 'clsx';

import classes from './Avatar.module.scss';

interface Props {
  src?: string;
  fallback: string;
  className?: string;
}

export const Avatar: FC<Props> = ({ src, fallback, className, ...props }) => (
  <div className={clsx(classes.avatar, className)} {...props}>
    {src ? (
      <img
        className={classes.avatarImage}
        src={src}
        alt="Avatar"
        draggable={false}
      />
    ) : (
      <div className={classes.avatarFallback}>{fallback}</div>
    )}
  </div>
);
