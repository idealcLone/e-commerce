import React, { useState } from 'react';
import classes from './Category.module.scss';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { normalizeString } from '../utils/string';
import { GridIcon } from '../assets/icons/GridIcon';
import { ListIcon } from '../assets/icons/ListIcon';

export const Category: React.FC = () => {
  const params = useParams();
  const name = normalizeString(params.category || '');

  const [layoutMode, setLayoutMode] = useState('grid');

  const handleChangeLayoutMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLayoutMode(e.target.value);
  };

  return (
    <div className={classes['category']}>
      <div className={classNames('u-body-2', classes['category__location'])}>
        <span>Homepage</span>
        <span>/</span>
        <span>{name}</span>
      </div>
      <div className={classNames('u-body-2', classes['category__header'])}>
        <h1 className={classNames('u-headline-1', classes['category__title'])}>{name}</h1>
        <div className={classes['category__right']}>
          <div className={classes['category__view']}>
            <input
              id="grid-view"
              type="radio"
              className={classes['category__view']}
              name="layout-mode"
              onChange={handleChangeLayoutMode}
              defaultChecked
            />
            <label htmlFor="grid-view">
              <GridIcon />
              <span>Grid view</span>
            </label>
          </div>
          <div className={classes['category__view']}>
            <input
              id="list-view"
              type="radio"
              className={classes['category__view']}
              onChange={handleChangeLayoutMode}
              name="layout-mode"
            />
            <label htmlFor="list-view">
              <ListIcon />
              <span>List view</span>
            </label>
          </div>
          <div className={classes['category__count']}>
            <span>117</span>
            <span>Products</span>
          </div>
        </div>
      </div>
      <div className={classes['filters']}></div>
    </div>
  );
};
