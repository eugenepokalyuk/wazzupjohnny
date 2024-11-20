import { FC, forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui/enums.ts';

import classes from './Input.module.scss';

// @ts-expect-error
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?:string;
  label?:string;
  size?:Size;
  variant?:Variant;
  wide?:boolean;
}

export const Input:FC<Props> = forwardRef<HTMLInputElement, Props>(
  (
    {
      error,
      label,
      size = Size.MD,
      variant = Variant.Default,
      className,
      wide = false,
      ...props
    },
    ref,
  ) => (
    <div
      className={clsx(
        classes.input_container,
        className,
        classes[size],
        classes[variant],
        { [classes.wide]: wide },
      )}
    >
      {label && <label className={classes.label}>{label}</label>}
      <input
        ref={ref}
        className={clsx(classes.input, { [classes.error]: error })}
        {...props}
      />
      {error && <span className={classes.error_message}>{error}</span>}
    </div>
  ),
);
