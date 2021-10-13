import React from 'react';
import PropTypes from 'prop-types';
import { FaMicrophone, FaCog, FaArrowLeft } from 'react-icons/fa';

const CompanyTop = ({ symbol }) => (
  <>
    <FaArrowLeft />
    <h4>{symbol}</h4>
    <FaMicrophone />
    <FaCog />
  </>
);

CompanyTop.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CompanyTop;
