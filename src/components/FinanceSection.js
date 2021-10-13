import React from 'react';
import PropTypes from 'prop-types';

const FinanceSection = ({ eachObj, indexValue }) => {
  const name = Object.keys(eachObj);
  const stringified = JSON.stringify(name);
  // const arrayForm = name.split();
  const splicedData = stringified.slice(0, -5);
  const finalIndicator = splicedData.charAt(2).toUpperCase() + splicedData.slice(3);
  console.log(finalIndicator);
  const value = Object.values(eachObj);
  const nameOfClass = (indexValue % 2) ? 'evenFinancial' : 'oddFinancial';
  return (
    <div className={nameOfClass}>
      <div className="financialDes">
        <h3>{finalIndicator}</h3>
        <p>{value}</p>
      </div>
      <hr />
    </div>
  );
};

FinanceSection.propTypes = {
  eachObj: PropTypes.instanceOf(Object).isRequired,
  indexValue: PropTypes.number.isRequired,
};

export default FinanceSection;
