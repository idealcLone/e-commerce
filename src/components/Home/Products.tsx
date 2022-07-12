import React from 'react';
import { Card } from '../UI/Card';
import classes from './Products.module.scss';

type PropsType = {
  count: number;
};

export const Products: React.FC<PropsType> = ({ count }) => {
  return (
    <div className={classes['products']}>
      {[...Array(count).keys()].map((num) => (
        <Card key={num} />
      ))}
    </div>
  );
};
