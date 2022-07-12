import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './Quotes.module.scss';
import { Quote } from './Quote';
import { Button } from '../UI/Button';

export const Quotes: React.FC = () => {
  const quotesRef = useRef<HTMLDivElement>(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  const trackInit = useCallback(() => {
    const quotes = Array.from(quotesRef.current?.children as HTMLCollectionOf<HTMLElement>);
    const quoteWidth = quotes[0].getBoundingClientRect().width;
    quotes.forEach((quote, index) => {
      quote.style.left = `${(quoteWidth + 32) * index}px`;
    });
  }, []);

  useEffect(() => {
    trackInit();
  }, [trackInit]);

  const handleMove = (step: number) => {
    const quotes = Array.from(quotesRef.current?.children as HTMLCollectionOf<HTMLElement>);
    const quote = quotes[currentQuote + step];
    const moveAmount = quote.style.left;
    quotesRef.current!.style.transform = `translateX(-${moveAmount})`;
    setCurrentQuote(currentQuote + step);
  };

  const handleRightMove = () => {
    handleMove(1);
  };

  const handleLeftMove = () => {
    handleMove(-1);
  };

  const handleButtonClick = () => {};

  return (
    <div className={classes['quotes']}>
      {currentQuote > 0 && (
        <div className={classes['quotes__left']}>
          <img
            src="../assets/icons/./slider-arrow-left.svg"
            alt="Arrow left"
            className={classes['quotes__arrow-left']}
            onClick={handleLeftMove}
          />
        </div>
      )}
      <div className={classes['quotes__list']} ref={quotesRef}>
        <Quote />
        <Quote />
        <Quote />
        <Quote />
        <Quote />
        <Quote />
      </div>
      {currentQuote < 3 && (
        <div className={classes['quotes__right']}>
          <img
            src="../assets/icons/./slider-arrow-right.svg"
            alt="Arrow right"
            className={classes['quotes__arrow-right']}
            onClick={handleRightMove}
          />
        </div>
      )}
    </div>
  );
};
