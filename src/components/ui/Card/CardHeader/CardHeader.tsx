import { FC } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui';

import classes from './CardHeader.module.scss';
import { BaseCardProps as Props } from '../types.ts';

export const CardHeader:FC<Props> = ({
                                       className,
                                       onClick,
                                       size = Size.MD,
                                       variant = Variant.Default,
                                       children,
                                       ...props
                                     }) => (
  <div
    className={clsx(
      classes.cardHeader,
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
