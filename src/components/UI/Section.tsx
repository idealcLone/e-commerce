import React from 'react';
import classes from './Section.module.scss';
import { Button } from './Button';

type PropsType = {
  title: string;
  buttonText: string;
  buttonAction: () => void;
  children: React.ReactNode;
};

export const Section: React.FC<PropsType> = ({ title, buttonText, buttonAction, children }) => {
  return (
    <section className={classes['section']}>
      <div className={classes['section__title']}>
        <h3 className="u-headline-4">{title}</h3>
        <Button onClick={buttonAction} variant="transparent" size="sm" arrowRight>
          {buttonText}
        </Button>
      </div>
      {children}
    </section>
  );
};
