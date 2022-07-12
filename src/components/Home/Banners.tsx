import React from 'react';
import { Banner } from '../UI/Banner';
import classes from './Banners.module.scss';

export const Banners: React.FC = () => {
  return (
    <div className={classes['banners']}>
      <Banner />
      <Banner />
    </div>
  );
};
