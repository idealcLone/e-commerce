import React from 'react';
import classes from './Radio.module.scss';

type PropsType = {
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Radio: React.FC<PropsType> = ({ name, options, onChange }) => {
  return (
    <div className={classes['radio__items']}>
      {options.map((option) => (
        <div key={option} className={classes['radio__item']}>
          <input type="radio" name={name} />
        </div>
      ))}
    </div>
  );
};
