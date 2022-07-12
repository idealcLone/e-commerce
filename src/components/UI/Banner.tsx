import React from 'react';
import classes from './Banner.module.scss';
import classNames from 'classnames';
import { Button } from './Button';

export const Banner: React.FC = () => {
  const handleButtonClick = () => {};
  return (
    <div className={classes['banner']}>
      <h4 className={classNames('u-headline-6', classes['banner__subfocus'])}>Banner subfocus</h4>
      <h3 className={classNames('u-headline-3', classes['banner__heading'])}>Banner heading</h3>
      <Button onClick={handleButtonClick} variant="stroked" size="md" arrowRight>
        Read recipes
      </Button>
    </div>
  );
};
