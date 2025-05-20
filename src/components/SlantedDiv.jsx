import React from 'react';
import './SlantedDiv.css';

const SlantedDiv = ({ children,theme }) => {
  return <div className={`slanted-div p-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>{children}</div>;
};

export default SlantedDiv;