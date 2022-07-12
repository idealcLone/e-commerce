import React from 'react';
import classes from './Posts.module.scss';
import { PostPrimary } from '../UI/PostPrimary';
import { PostSecondary } from '../UI/PostSecondary';
import { PostTertiary } from '../UI/PostTertiary';

export const Posts: React.FC = () => {
  return (
    <div className={classes['posts']}>
      <PostPrimary
        title="Our chef tips for a great and tasty dinner ready in 20 minutes"
        author="Author"
        type="Dinner tips"
        date="17.6.2020"
      />
      <PostSecondary
        title="Which vegetable your family will love and want’s eat each day"
        author="Author"
        type="Vegetable"
        date="15.6.2020"
      />
      <div className={classes['posts__tertiary']}>
        <PostTertiary
          title="Salad is kinda good start to your morning routines"
          author="Author"
          type="Vegetable"
          date="15.6.2020"
        />
        <PostTertiary
          title="Salad is kinda good start to your morning routines"
          author="Author"
          type="Vegetable"
          date="15.6.2020"
        />
        <PostTertiary
          title="Salad is kinda good start to your morning routines"
          author="Author"
          type="Vegetable"
          date="15.6.2020"
        />
      </div>
    </div>
  );
};
