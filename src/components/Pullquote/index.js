import React from 'react';
import makeVisible from '../../hooks/makeVisible';
import './style.scss';

export default function Pullquote({ quote, specialQuote, children }) {
  const [bodyContent, isVisible] = makeVisible();

  return (
    <div className={`pullquote ${quote ? 'pullquote--withquote' : ''} ${specialQuote ? 'pullquote--special' : ''} ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      {children}
    </div>
  );
}
