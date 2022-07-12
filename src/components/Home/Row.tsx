import React from 'react';

import classes from './Row.module.scss';

type PropsType = {
  children: React.ReactNode;
};

export const Row: React.FC<PropsType> = ({ children }) => {
  return <div className={classes['row']}>{children}</div>;
};
