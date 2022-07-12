import React from 'react';
import classes from './PostPrimary.module.scss';
import classNames from 'classnames';
import { IPost } from '../../types';

export const PostPrimary: React.FC<IPost> = ({ title, author, date, type }) => {
  return (
    <div className={classes['post']}>
      <img
        src="../assets/img/post-1.png"
        alt="PostPrimary Image"
        className={classes['post__img']}
      />
      <div className={classNames(classes['post__type'], 'u-headline-6')}>{type}</div>
      <div className={classNames(classes['post__title'], 'u-headline-3')}>{title}</div>
      <div className={classes['post__info']}>
        <div className={classes['author']}>
          <img
            src="../assets/icons/post-avatar.svg"
            alt="PostPrimary author avatar"
            className={classes['author__avatar']}
          />
          <span className={classNames(classes['author__name'], 'u-body-2')}>{author}</span>
        </div>
        <div className={classNames(classes['post__date'], 'u-body-2')}>{date}</div>
      </div>
    </div>
  );
};
