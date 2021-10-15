import React from 'react';
import PropTypes from 'prop-types';

const FinanceHeading = ({ symbol }) => (
  <div className="finance-heading-container">
    <div className="finance-heading">
      {symbol}
      {' '}
      -
      {' '}
      Financial Indicators
    </div>
  </div>
);

FinanceHeading.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default FinanceHeading;
