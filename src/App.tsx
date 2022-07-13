import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { routes } from './consts/routes';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};
