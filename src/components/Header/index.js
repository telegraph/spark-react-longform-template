import React from 'react';

// import ProgressBar from '../ProgressBar';

import TelegraphLogo from '../../assets/telegraph-logo.svg';
import TelegraphLogoMobile from '../../assets/telegraph_diamond_black.svg';

import './style.scss';

const Header = (props) => (
  <div className="header">
    <div className="header-bar">

      <a href="https://www.telegraph.co.uk/" className="desktop-only">
        <img className="the-logo" src={TelegraphLogo} alt="The Telegraph" />
      </a>

      <a href="https://www.telegraph.co.uk/" className="mobile-only">
        <img className="the-logo-mobile" src={TelegraphLogoMobile} alt="The Telegraph" />
      </a>

      <div className="btyb-wrapper">
        <span className="btyb">Brought to you by</span>
        <a rel="noopener noreferrer" href="https://business.natwest.com/business.html" target="_blank" >
          logo
        </a>
      </div>
    </div>
  </div>
);

export default Header;
