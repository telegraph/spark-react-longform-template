import React from 'react';
import './style.scss';

const Button = (props) => (
  <div className="button">
    <a href={`${props.link}`} target="_blank" rel="noopener noreferrer">Find out more</a>
  </div>
);
export default Button;
