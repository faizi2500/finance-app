import React from 'react';
import PropTypes from 'prop-types';

const CompanyBanner = ({ name }) => (
  <>
    <h1>{name}</h1>
  </>
);

CompanyBanner.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CompanyBanner;
