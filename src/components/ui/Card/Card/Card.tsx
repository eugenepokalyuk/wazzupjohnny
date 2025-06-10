import { FC } from 'react';
import clsx from 'clsx';

import { Form, Size, Variant } from '@components/ui';

import classes from './Card.module.scss';
import { MainCardProps } from '../types.ts';

export const Card: FC<MainCardProps> = ({
  className,
  onClick,
  size = Size.MD,
  variant = Variant.Default,
  isForm = false,
  formProps,
  children,
  ...props
}) => (
  <div
    className={clsx(classes.card, classes[size], classes[variant], className)}
    onClick={onClick}
    {...props}
  >
    {isForm && formProps ? <Form {...formProps}>{children}</Form> : children}
  </div>
);
