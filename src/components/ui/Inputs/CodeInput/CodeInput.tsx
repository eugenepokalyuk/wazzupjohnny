import { ChangeEvent, FC, KeyboardEvent, useRef } from 'react';
import clsx from 'clsx';

import { Size, Variant } from '@components/ui/enums.ts';
import classes from './CodeInput.module.scss';

interface Props {
  length: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  size?: Size;
  variant?: Variant;
  className?: string;
}

export const CodeInput: FC<Props> = ({
  length,
  value,
  onChange,
  error,
  size = Size.MD,
  variant = Variant.Default,
  className,
  ...props
}) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/, '');

    if (newValue) {
      const newValueArray = value.split('');
      newValueArray[index] = newValue;
      onChange(newValueArray.join(''));

      if (index < length - 1 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className={clsx(
        classes.input_container,
        className,
        size ? classes[size] : '',
        variant ? classes[variant] : '',
      )}
    >
      <div className={classes.input_box}>
        {Array.from({ length }, (_, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className={clsx(classes.input, { [classes.error]: error })}
            value={value[i] || ''}
            onChange={(e) => handleChange(i, e)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            {...props}
          />
        ))}
      </div>

      {error && <span className={classes.error_message}>{error}</span>}
    </div>
  );
};
