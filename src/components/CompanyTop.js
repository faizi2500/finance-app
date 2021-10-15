import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './company.css';
import { FaMicrophone, FaCog, FaArrowLeft } from 'react-icons/fa';

const CompanyTop = ({ symbol }) => (
  <div className="top-banner-parent">
    <div className="flex-company-banner">
      <NavLink to="/">
        <FaArrowLeft />
      </NavLink>
      <h4 className="navTitle">{symbol}</h4>
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
