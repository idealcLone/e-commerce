import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';

type PropsType = {
  variant: string;
  onClick: () => void;
  children: React.ReactNode;
  arrowRight?: boolean;
  arrowLeft?: boolean;
  size?: string;
  className?: string;
};

export const Button: React.FC<PropsType> = ({
  variant,
  onClick,
  size = 'md',
  className,
  children,
  arrowLeft,
  arrowRight,
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
      {arrowLeft && <img src="../assets/icons/btn-arrow-left.svg" alt="Button arrow left" />}
      {children}
      {arrowRight && <img src="../assets/icons/btn-arrow-right.svg" alt="Button arrow right" />}
    </button>
  );
};
