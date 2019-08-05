/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import fbImg from '../../assets/socials/facebook.svg';
import twitterImg from '../../assets/socials/twitter.svg';
import mailImg from '../../assets/socials/mail.svg';

import './style.scss';

function Socials() {
  return (
    <div className="socials">
      <a className="addthis_button_facebook" href="#">
        <img src={fbImg} alt="facebook" />
      </a>
      <a className="addthis_button_twitter" href="#">
        <img src={twitterImg} alt="twitter" />
      </a>
      <a className="addthis_button_mailto" href="#">
        <img src={mailImg} alt="mail" />
      </a>
    </div>
  );
}

export default Socials;
