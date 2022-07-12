import React from 'react';
import { Card } from '../UI/Card';
import classes from './Products.module.scss';

export const Products: React.FC = () => {
  return (
    <div className={classes['products']}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};
