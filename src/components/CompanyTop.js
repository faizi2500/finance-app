import React from 'react';
import PropTypes from 'prop-types';
import './company.css';
import { FaMicrophone, FaCog, FaArrowLeft } from 'react-icons/fa';

const CompanyTop = ({ symbol }) => (
  <div className="top-banner-parent">
    <div className="flex-company-banner">
      <FaArrowLeft />
      <h4>{symbol}</h4>
      <div className="right-side-banner">
        <FaMicrophone />
        <FaCog />
      </div>
    </div>
  </div>
);

CompanyTop.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CompanyTop;
