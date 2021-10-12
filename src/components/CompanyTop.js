import React from 'react';
import PropTypes from 'prop-types';
import { FaMicrophone, FaCog, FaArrowLeft } from 'react-icons/fa';

const CompanyTop = ({ name }) => (
  <>
    <FaArrowLeft />
    <h4>{name}</h4>
    <FaMicrophone />
    <FaCog />
  </>
);

CompanyTop.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CompanyTop;
