import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

import { Loader, Size, Variant } from '@shared/ui';

import classes from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  icon?: ReactNode;
  isLoading?: boolean;
  wide?: boolean;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  tilt?: boolean;
}

export const Button: FC<Props> = ({
  size = Size.MD,
  variant = Variant.Default,
  icon,
  isLoading = false,
  wide = false,
  outline = false,
  onClick,
  disabled = false,
  tilt = false,
  children,
  ...props
}) => (
  <button
    className={clsx(
      props.className,
      classes.button,
      classes[size],
      classes[variant],
      { [classes.wide]: wide },
      { [classes.loading]: isLoading },
      { [classes.disabled]: disabled },
      { [outline ? classes.outline : classes.filled]: true },
      { [tilt ? classes.tilt : '']: true },
    )}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {icon && icon}

        {children}
      </>
    )}
  </button>
);
