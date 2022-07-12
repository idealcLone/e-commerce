import React from 'react';
import { Products } from '../components/Home/Products';
import classes from './Home.module.scss';
import { Banners } from '../components/Home/Banners';
import { Row } from '../components/Home/Row';
import { List } from '../components/UI/List';
import { categories } from '../consts/lists';
import { Button } from '../components/UI/Button';
import { Quotes } from '../components/Home/Quotes';
import { Section } from '../components/UI/Section';
import { Posts } from '../components/Home/Posts';

export const Home: React.FC = () => {
  const handleButtonClick = () => {};
  const handleQuotesHeadingClick = () => {};
  const handleFeaturedProductsClick = () => {};
  const handlePostsClick = () => {};

  return (
    <div className={classes['home']}>
      <Row>
        <div className={classes['home__list']}>
          <List title="Category menu" items={categories.slice(0, 5)} />
          <Button onClick={handleButtonClick} variant="gray" size="md" arrowRight>
            More categories
          </Button>
        </div>
        <Banners />
      </Row>
      <Row>
        <div className={classes['home__list']}>
          <List title="Best selling products" items={categories.slice(0, 5)} />
          <Button onClick={handleButtonClick} variant="gray" size="md" arrowRight>
            More categories
          </Button>
        </div>
        <Products count={3} />
      </Row>
      <Row>
        <div className={classes['home__list']}>
          <List title="Best from Farmers" items={categories.slice(0, 5)} />
          <Button onClick={handleButtonClick} variant="gray" size="md" arrowRight>
            More categories
          </Button>
        </div>
        <Products count={3} />
      </Row>
      <Section
        title="Our customers say"
        buttonText="See more"
        buttonAction={handleQuotesHeadingClick}
      >
        <Quotes />
      </Section>
      <Section
        title="Featured products"
        buttonText="See more"
        buttonAction={handleFeaturedProductsClick}
      >
        <Row>
          <Products count={4} />
        </Row>
      </Section>
      <Section title="Read our Blog posts" buttonText="Go to Blog" buttonAction={handlePostsClick}>
        <Posts />
      </Section>
    </div>
  );
};
