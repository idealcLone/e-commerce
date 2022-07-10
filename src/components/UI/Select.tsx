import React from 'react';
import classNames from 'classnames';
import classes from './Select.module.scss';

type PropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  name: string;
  label?: string;
  className?: string;
};

export const Select: React.FC<PropsType> = ({
  value,
  onChange,
  options,
  label,
  name,
  className,
}) => {
  return (
    <select
      className={
        className
          ? classNames('u-btn', className, classes['select'])
          : classNames('u-btn', classes['select'])
      }
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
