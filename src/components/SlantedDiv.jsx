import React from 'react';
import './SlantedDiv.css';

const SlantedDiv = ({ children }) => {
  return <div className="slanted-div p-4">{children}</div>;
};

export default SlantedDiv;