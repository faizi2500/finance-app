import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';

const Top = () => (
  <div className="top-body">
    <div className="holder">
      <p className="top-heading">Gainers</p>
      <div className="icons">
        <FaMicrophone />
        <FaCog />
      </div>
    </div>
  </div>
);

export default Top;
