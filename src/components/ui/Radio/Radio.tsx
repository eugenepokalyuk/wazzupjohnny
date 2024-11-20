import { FC } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui/enums';

import classes from './Radio.module.scss';

interface Props {
  label:string;
  checked:boolean;
  onChange:() => void;
  size?:Size;
  variant?:Variant;
}

export const Radio:FC<Props> = ({
                                  label,
                                  checked,
                                  onChange,
                                  size = Size.MD,
                                  variant = Variant.Default,
                                  ...props
                                }) => (
  <div
    className={clsx(classes.radio_card, classes[size], classes[variant])}
    onClick={onChange}
    {...props}
  >
    <input
      type="radio"
      checked={checked}
      onChange={onChange}
      className={classes.radio_input}
    />
    <span className={classes.custom_radio}></span>
    <span className={classes.radio_label}>{label}</span>
  </div>
);
