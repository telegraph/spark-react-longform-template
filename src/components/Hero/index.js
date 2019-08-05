/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          Lorum
          <br />
          Ipsum
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis eros sit amet aliquet tristique. Quisque ut odio vel nisi sodales placerat vel quis ligula.
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
      // Art goes here (svg or img)
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
