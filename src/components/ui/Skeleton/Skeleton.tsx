import { FC } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui';

import classes from './Skeleton.module.scss';

interface SkeletonProps {
  size?:Size;
  variant?:Variant;
  className?:string;
  wide?:boolean;
}

export const Skeleton:FC<SkeletonProps> = ({
                                             size = Size.MD,
                                             variant = Variant.Default,
                                             className,
                                             wide = false,
                                             ...props
                                           }) => (
  <div
    className={clsx(
      classes.skeleton,
      classes[size],
      classes[variant],
      { [classes.wide]: wide },
      className,
    )}
    {...props}
  />
);
