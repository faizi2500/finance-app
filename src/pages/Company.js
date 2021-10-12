import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchCompanyFinancials, fetchCompanyDetails } from '../redux/company/company';
import CompanyPage from '../components/CompanyPage';

const Company = () => {
  const data = useLocation();
  const url = window.location.pathname;
  const newString = url.substring(8);
  let symbol = data.name;
  if (typeof symbol === 'undefined') {
    symbol = newString;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (symbol) {
      dispatch(fetchCompanyDetails(symbol));
      dispatch(fetchCompanyFinancials(symbol));
    }
  }, [symbol]);

  // { companyInfo && companyInfo.map((info) => (
  //   console.log(info.symbol)
  // ))};
  return (
    <>
      <CompanyPage />
    </>
  );
};

export default Company;
// (<ul>
//   {companyInfo && companyInfo
//     .map((info) => {
//       const {
//         symbol,
//         companyName,
//         image,
//         exchangeShortName,
//         sector,
//       } = info;
//       return (
//         <li key={symbol}>
//           <CompanyPage
//             symbol={symbol}
//             companyName={companyName}
//             image={image}
//             exchangeShortName={exchangeShortName}
//             sector={sector}
//           />
//         </li>
//       );
//     })}
// </ul> )
