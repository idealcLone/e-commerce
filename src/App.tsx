import React from 'react';
import { Home } from './pages/Home';
import { Header } from './components/Layout/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};
