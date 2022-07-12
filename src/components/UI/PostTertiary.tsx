import React from 'react';
import classes from './PostTertiary.module.scss';
import classNames from 'classnames';
import { IPost } from '../../types';

export const PostTertiary: React.FC<IPost> = ({ title, author, date }) => {
  return (
    <div className={classes['post']}>
      <div className={classes['post__info']}>
        <div className={classNames(classes['post__title'], 'u-headline-5')}>{title}</div>
        <div className={classNames(classes['post__created'], 'u-body-2')}>
          <div className={classes['post__author']}>{author}</div>
          <div className={classes['post__date']}>{date}</div>
        </div>
      </div>
      <img
        src="../assets/img/post-3.png"
        alt="PostPrimary Image"
        className={classes['post__img']}
      />
    </div>
  );
};
