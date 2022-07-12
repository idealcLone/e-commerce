import React from 'react';
import { IPost } from '../../types';
import classes from './PostSecondary.module.scss';
import classNames from 'classnames';

export const PostSecondary: React.FC<IPost> = ({ title, type, author, date }) => {
  return (
    <div className={classes['post']}>
      <img
        src="../assets/img/post-2.png"
        alt="PostPrimary Image"
        className={classes['post__img']}
      />
      <div className={classNames(classes['post__type'], 'u-headline-6')}>{type}</div>
      <div className={classNames(classes['post__title'], 'u-headline-4')}>{title}</div>
      <div className={classNames(classes['post__info'], 'u-body-2')}>
        <div className={classes['post__author']}>{author}</div>
        <div className={classes['post__date']}>{date}</div>
      </div>
    </div>
  );
};
