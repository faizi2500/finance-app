import React from 'react';
import PropTypes from 'prop-types';
import CompanyTop from './CompanyTop';
import CompanyBanner from './CompanyBanner';

const CompanyPage = ({ info, symbol }) => {
  // console.log(info);
  const companyInformation = info.responseFinancials;
  // console.log('info', companyInformation);
  let newObj;
  if (companyInformation) {
    companyInformation.map((each) => {
      const {
        companyName,
        image,
        exchangeShortName,
        sector,
      } = each;
      newObj = {
        companyName,
        image,
        exchangeShortName,
        sector,
      };
      return newObj;
    });
  }
  console.log('obj', newObj);

  return (
    <>
      <CompanyTop symbol={symbol} />
      {(newObj)
        ? <CompanyBanner name={newObj.companyName} />
        : <p>Loading</p>}
    </>
  );
};

CompanyPage.defaultProps = {
  info: {
    status: false,
  },
};

CompanyPage.propTypes = {
  info: PropTypes.instanceOf(Object),
  symbol: PropTypes.string.isRequired,
};

export default CompanyPage;

// ({
//   symbol,
//   companyName,
//   image,
//   exchangeShortName,
//   sector,
// })
