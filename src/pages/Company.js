import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyFinancials } from '../redux/company/company';
import CompanyPage from '../components/CompanyPage';
import '../components/company.css';

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
      dispatch(fetchCompanyFinancials(symbol));
    }
  }, [symbol]);
  const companyData = useSelector((state) => state.companyReducer.payload);
  const [newState, setState] = useState(companyData);
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
