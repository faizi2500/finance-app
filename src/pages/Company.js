import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchCompanyFinancials, fetchCompanyDetails } from '../redux/company/company';

const Company = () => {
  const data = useLocation();
  const symbol = data.name;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyDetails(symbol));
    dispatch(fetchCompanyFinancials(symbol));
  }, []);
  return (
    <>
      <h1>
        Hello
      </h1>
    </>
  );
};

// Company.propTypes = {
// eslint-disable-next-line react/no-unused-prop-types
// name: PropTypes.string.isRequired,
// };

export default Company;
