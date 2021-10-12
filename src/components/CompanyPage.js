import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import CompanyTop from './CompanyTop';

const CompanyPage = () => {
  const companyData = useSelector((state) => state.companyReducer);
  const companyInfo = companyData[0];
  let obj = {};
  if (companyInfo) {
    companyInfo.map((info) => {
      const {
        symbol,
        companyName,
        image,
        exchangeShortName,
        sector,
      } = info;
      console.log(companyName);
      obj = {
        symbol,
        companyName,
        image,
        exchangeShortName,
        sector,
      };
      return obj;
    });
  }
  console.log(obj);
  return (
    <>
      <CompanyTop name={obj.companyName} />
      {/* <ul>
        <li>{symbol}</li>
        <li>{image}</li>
        <li>{exchangeShortName}</li>
        <li>{sector}</li>
      </ul> */}
    </>
  );
};

// CompanyPage.propTypes = {
//   symbol: PropTypes.string.isRequired,
//   companyName: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   exchangeShortName: PropTypes.string.isRequired,
//   sector: PropTypes.string.isRequired,
// };

export default CompanyPage;

// ({
//   symbol,
//   companyName,
//   image,
//   exchangeShortName,
//   sector,
// })
