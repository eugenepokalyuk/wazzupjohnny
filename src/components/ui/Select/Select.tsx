import { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { DownArrowIcon, UpArrowIcon } from '@components/ui';

import classes from './Select.module.scss';

interface Option {
  value:string;
  label:string;
}

interface Props {
  options:Option[];
  onChange?:(value:string) => void;
  className?:string;
}

export const Select:FC<Props> = ({ options, onChange, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<Option|null>(null);

  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option:Option) => {
    setSelectedOption(option);

    setIsOpen(false);

    onChange?.(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={clsx(classes.select_container, className)} ref={selectRef}>
      <div className={clsx(classes.select_wrapper, className)} onClick={toggleDropdown}>
        <div className={classes.selected_option}>
          {selectedOption ? selectedOption.label : 'All Roles'}
        </div>

        <div className={classes.icon}>
          {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
        </div>
      </div>

      {isOpen && (
        <ul className={classes.options_list}>
          {options.map((option) => (
            <li
              key={option.value}
              className={classes.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
