import React, { FC } from 'react';
import clsx from 'clsx';

import classes from './Text.module.scss';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  variant?: 'text' | 'lead' | 'heading';
  className?: string;
  children: React.ReactNode;
}

export const Text: FC<TextProps> = ({
  as = 'p',
  variant = 'text',
  className,
  children,
}) => {
  const Element = as;

  return (
    <Element
      className={clsx(classes.text, variant && classes[variant], className)}
    >
      {children}
    </Element>
  );
};
