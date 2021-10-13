import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyFinancials } from '../redux/company/company';
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
      // dispatch(fetchCompanyDetails(symbol));
      dispatch(fetchCompanyFinancials(symbol));
    }
  }, [symbol]);
  const companyData = useSelector((state) => state.companyReducer.payload);
  const [newState, setState] = useState(companyData);
  // let count = 1;
  setTimeout(() => {
    setState(companyData);
  }, 2000);
  return (
    <>
      <CompanyPage info={newState} symbol={symbol} />
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
