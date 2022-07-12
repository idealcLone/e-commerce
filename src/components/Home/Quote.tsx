import React from 'react';
import classes from './Quote.module.scss';
import classNames from 'classnames';

export const Quote: React.FC = () => {
  return (
    <div className={classNames('quote', classes['quote'])}>
      <p className={classNames('u-headline-5', classes['quote__text'])}>
        “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You
        will get all what you need by writiing a text here “
      </p>
      <div className={classNames('u-headline-6', classes['quote__author'])}>Name Surname</div>
      <img
        src="../assets/img/quote-avatar.png"
        alt="Quote author avatar"
        className={classes['quote__avatar']}
      />
    </div>
  );
};
