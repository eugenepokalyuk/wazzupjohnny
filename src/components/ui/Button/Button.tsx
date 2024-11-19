import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { Loader } from '@components/ui';

import classes from './Button.module.scss';

interface Props {
  onClick?: () => void;
  className?: string;
  variant?: 'green' | 'black' | 'black-green-border' | 'blue' | 'white';
  size?: 'default' | 'medium' | 'icon';
  icon?: ReactNode;
  isLoading?: boolean;
  children: ReactNode;
  wide?: boolean;
}

export const Button: FC<Props> = ({
  onClick,
  className,
  variant = 'green',
  size = 'default',
  icon,
  isLoading = false,
  children,
  wide,
}) => {
  return (
    <button
      className={clsx(
        classes.button,
        classes[variant],
        classes[size],
        wide && classes.wide,
        className,
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader size="xs" color="black" />
      ) : (
        <>
          {icon && <span className={classes.icon}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
