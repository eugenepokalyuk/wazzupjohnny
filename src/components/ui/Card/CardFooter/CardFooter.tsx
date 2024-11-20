import { FC } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui';

import classes from './CardFooter.module.scss';
import { BaseCardProps as Props } from '../types.ts';

export const CardFooter:FC<Props> = ({
                                       className,
                                       onClick,
                                       size = Size.MD,
                                       variant = Variant.Default,
                                       children,
                                       ...props
                                     }) => (
  <div
    className={clsx(
      classes.cardFooter,
      classes[size],
      classes[variant],
      className,
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);
