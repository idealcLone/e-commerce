import React from 'react';
import { Products } from '../components/Home/Products';
import classes from './Home.module.scss';
import { Banners } from '../components/Home/Banners';
import { Row } from '../components/Home/Row';
import { List } from '../components/UI/List';
import { categories } from '../consts/lists';
import { Button } from '../components/UI/Button';
import { Quotes } from '../components/Home/Quotes';

export const Home: React.FC = () => {
  const handleButtonClick = () => {};
  return (
    <div className={classes['home']}>
      <div className={classes['home__hero']}>
        <Row>
          <div className={classes['home__list']}>
            <List title="Category menu" items={categories.slice(0, 5)} />
            <Button onClick={handleButtonClick} variant="gray" size="md">
              More categories
            </Button>
          </div>
          <Banners />
        </Row>
        <Row>
          <div className={classes['home__list']}>
            <List title="Best selling products" items={categories.slice(0, 5)} />
            <Button onClick={handleButtonClick} variant="gray" size="md">
              More categories
            </Button>
          </div>
          <Products />
        </Row>
        <Row>
          <div className={classes['home__list']}>
            <List title="Best from Farmers" items={categories.slice(0, 5)} />
            <Button onClick={handleButtonClick} variant="gray" size="md">
              More categories
            </Button>
          </div>
          <Products />
        </Row>
      </div>
      <Quotes />
    </div>
  );
};
