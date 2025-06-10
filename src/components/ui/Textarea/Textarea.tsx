import { FC, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui';

import classes from './Textarea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Size;
  variant?: Variant;
  error?: string;
  wide?: boolean;
  rows?: number;
}

export const Textarea: FC<TextAreaProps> = ({
  size = Size.MD,
  variant = Variant.Default,
  error,
  className,
  wide = false,
  rows = 3,
  ...props
}) => (
  <div className={clsx(classes.textarea_container, className)}>
    <textarea
      className={clsx(classes.textarea, classes[size], classes[variant], {
        [classes.error]: error,
        [classes.wide]: wide,
      })}
      rows={rows}
      {...props}
    />
    {error && <span className={classes.error_message}>{error}</span>}
  </div>
);
