import React from 'react';
import classes from './List.module.scss';
import classNames from 'classnames';

type PropsType = {
  items: string[];
  title: string;
  direction?: string;
  className?: string;
};

export const List: React.FC<PropsType> = ({ items, title, direction = 'vertical', className }) => {
  return (
    <div className={classNames(classes['list'], classes[`list--${direction}`], className)}>
      <h3 className={classNames('u-headline-4', classes['list__title'])}>{title}</h3>
      <ul className={classes['list__items']}>
        {items.map((item) => (
          <li key={item} className={classNames('u-body', classes['list__item'])}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
