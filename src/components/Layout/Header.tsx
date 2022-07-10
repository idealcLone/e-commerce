import React, { useState } from 'react';

import classes from './Header.module.scss';
import { Select } from '../UI/Select';
import { SearchBar } from '../UI/SearchBar';
import classNames from 'classnames';

const options = [
  'All categories',
  'Bakery',
  'Fruit and vegetables',
  'Meat and fish',
  'Drinks',
  'Kitchen',
  'Special nutrition',
  'Baby',
  'Pharmacy',
];
const categories = [
  'Bakery',
  'Fruit and vegetables',
  'Meat and fish',
  'Drinks',
  'Kitchen',
  'Special nutrition',
  'Baby',
  'Pharmacy',
];

export const Header: React.FC = () => {
  const [category, setCategory] = useState<string>(options[0]);
  const [searchText, setSearchText] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <header className={classes['header']}>
      <div className={classes['header__upper']}>
        <div className={classes['header__contacts']}>
          <a href="#" className={classes['header__chat']}>
            Chat with us
          </a>
          <div className={classes['header__phone']}>+7 708 563 88 64</div>
          <div className={classes['header__email']}>eldar.mussagali@gmail.com</div>
        </div>

        <nav className={classes['nav']}>
          <ul className={classes['nav__list']}>
            <li className={classes['nav__item']}>
              <a href="#" className={classes['nav__link']}>
                Blog
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href="#" className={classes['nav__link']}>
                About Us
              </a>
            </li>
            <li className={classes['nav__item']}>
              <a href="#" className={classes['nav__link']}>
                Careers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes['header__main']}>
        <h1 className={classes['header__title']}>Freshnesecom</h1>
        <div className={classes['search']}>
          <Select
            value={category}
            options={options}
            name="category"
            onChange={handleSelectChange}
            className={classes['search__select']}
          />
          <div className={classes['search__divider']} />
          <SearchBar
            placeholder="Search products, categories ..."
            value={searchText}
            name="searchText"
            onChange={handleInputChange}
            className={classes['search__input']}
          />
        </div>
        <div className={classes['header__actions']}>
          <div className={classes['user']}>
            <img
              src="../assets/icons/user-icon.svg"
              alt="User Icon"
              className={classes['user__icon']}
            />
          </div>
          <div className={classes['cart']}>
            <img
              src="../assets/icons/cart-icon.svg"
              alt="Cart Icon"
              className={classes['cart__icon']}
            />
            <div className={classes['cart__count']}>4</div>
          </div>
        </div>
      </div>
      <div className={classes['categories']}>
        <ul className={classes['categories__list']}>
          {categories.map((ctg) => (
            <li key={ctg} className={classNames('u-headline-5', classes['categories__item'])}>
              <span>{ctg}</span>
              <img src="../assets/icons/./arrow-down.svg" alt="Arrow down" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
