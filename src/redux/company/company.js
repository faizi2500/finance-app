const COMPANY_FINANCES = 'app/company/FETCH_FINANCES';
// const COMPANY_DETAILS = 'app/company/FETCH_DETAILS';

const initialState = {};

const companyFinances = (payload) => ({
  type: COMPANY_FINANCES,
  payload,
});

// const companyDetails = (payload) => ({
//   type: COMPANY_DETAILS,
//   payload,
// });

// export const fetchCompanyDetails = (symbol) => async (dispatch) => {
//   const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//   };
//   // const newArray = [];
//   // newArray.push(responseFinancials[0]);
//   dispatch(companyDetails(responseFinancials));
// };

export const fetchCompanyFinancials = (symbol) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const details = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${symbol}?apikey=80374e700444bba4ab5b199f0786e0ea`, requestOptions);
  const finances = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=80374e700444bba4ab5b199f0786e0ea`, requestOptions);
  const responseFinancials = await finances.json();
  const responseData = await details.json();
  // const dataRequired = required.shift();
  const obj = {
    responseFinancials,
    responseData,
  };
  // const newArray = [];
  // newArray.push(responseData[0]);
  dispatch(companyFinances(obj));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_FINANCES:
      return {
        payload: action.payload,
      };
    // case COMPANY_DETAILS:
    //   return {
    //     ...state,
    //     payload: action.payload,
    //   };
    default:
      return state;
  }
};

export default reducer;
