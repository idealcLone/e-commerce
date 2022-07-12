import React from 'react';
import { Home } from './pages/Home';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
