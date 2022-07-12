import React from 'react';
import classes from './Card.module.scss';
import { Button } from './Button';

export const Card: React.FC = () => {
  const handleButtonClick = () => {};
  return (
    <div className={classes['card']}>
      <img src="../assets/img/card.png" alt="Card" className={classes['card__img']} />
      <h4 className={classes['card__title']}>Product Title</h4>
      <p className={classes['card__description']}>Space for a small product description</p>
      <div className={classes['card__footer']}>
        <div className={classes['card__price']}>1.48 USD</div>
        <Button onClick={handleButtonClick} variant="green" size="sm">
          Buy now
        </Button>
      </div>
    </div>
  );
};
