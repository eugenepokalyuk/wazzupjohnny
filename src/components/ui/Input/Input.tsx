import { FC, InputHTMLAttributes } from 'react';

import classes from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?:string;
}

export const Input:FC<Props> = ({ label, ...props }) => {
  return (
    <div className={classes.input_container}>
      {label && <label className={classes.input_label}>{label}</label>}
      <input className={classes.input} {...props} />
    </div>
  );
};
