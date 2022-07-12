import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';

type PropsType = {
  variant: string;
  onClick: () => void;
  children: React.ReactNode;
  size?: string;
  className?: string;
};

export const Button: React.FC<PropsType> = ({
  variant,
  onClick,
  size = 'lg',
  className,
  children,
}) => {
  return (
    <button
      className={classNames(
        'u-btn',
        className,
        classes['btn'],
        classes[`btn--${size}`],
        classes[`btn--${variant}`]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
