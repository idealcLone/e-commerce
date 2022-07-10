import React from 'react';
import classNames from 'classnames';
import classes from './SearchBar.module.scss';

type PropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  label?: string;
  className?: string;
};

export const SearchBar: React.FC<PropsType> = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  className,
}) => {
  return (
    <div
      className={className ? classNames(className, classes['search-bar']) : classes['search-bar']}
    >
      {label && (
        <label htmlFor={name} className={classes['search-bar__label']}>
          {label}
        </label>
      )}
      <input
        className={classNames('u-body', classes['search-bar__input'])}
        type="search"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <img
        className={classes['search-bar__icon']}
        src="../assets/icons/search-icon.svg"
        alt="Search Icon"
      />
    </div>
  );
};
