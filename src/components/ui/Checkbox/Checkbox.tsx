import { FC } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui/enums';

import classes from './Checkbox.module.scss';

interface Props {
  label:string;
  checked:boolean;
  onChange:() => void;
  size?:Size;
  variant?:Variant;
}

export const Checkbox:FC<Props> = ({
                                     label,
                                     checked,
                                     onChange,
                                     size = Size.MD,
                                     variant = Variant.Default,
                                     ...props
                                   }) => (
  <div
    className={clsx(
      classes.checkbox_container,
      classes[size],
      classes[variant],
    )}
    onClick={onChange}
    {...props}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={classes.checkbox_input}
    />
    <span className={classes.custom_checkbox}></span>
    <span className={classes.checkbox_label}>{label}</span>
  </div>
);
