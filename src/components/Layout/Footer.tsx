import React from 'react';
import classes from './Footer.module.scss';
import { List } from '../UI/List';
import { accountActions, connections, earnings, products, sections } from '../../consts/lists';
import { Button } from '../UI/Button';
import classNames from 'classnames';

export const Footer: React.FC = () => {
  const handleButtonClick = (tag: string) => {};
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__lists']}>
        <List title="Get in touch" items={sections} />
        <List title="Connections" items={connections} />
        <List title="Earnings" items={earnings} />
        <List title="Account" items={accountActions} />
      </div>
      <div className={classes['tags']}>
        <div className="u-headline-4">Product tags</div>
        <ul className={classes['tags__list']}>
          {products.map((product) => (
            <li key={product}>
              <Button onClick={() => handleButtonClick(product)} variant="gray" size="sm">
                {product}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(classes['copyright'], 'u-body')}>
        Copyright © 2020 petrbilek.com
      </div>
    </footer>
  );
};
