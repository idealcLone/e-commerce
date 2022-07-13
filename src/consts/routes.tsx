import React from 'react';
import { Home } from '../pages/Home';
import { Category } from '../pages/Category';

type RouteType = {
  path: string;
  name: string;
  component: React.ReactNode;
};

export const routes: RouteType[] = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: <Category />,
  },
];
