import { FC } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui';

import classes from './Loader.module.scss';

interface LoaderProps {
  size?:Size;
  variant?:Variant;
}

export const Loader:FC<LoaderProps> = ({
                                         size = Size.MD,
                                         variant = Variant.Default,
                                         ...props
                                       }) => (
  <div
    className={clsx(classes.loader, classes[size], classes[variant])}
    {...props}
  >
    <div className={classes.spinner}></div>
  </div>
);
