const COMPANY_FINANCES = 'app/company/FETCH_FINANCES';
const COMPANY_DETAILS = 'app/company/FETCH_DETAILS';

const initialState = [];

const companyFinances = (payload) => ({
  type: COMPANY_FINANCES,
  payload,
});

const companyDetails = (payload) => ({
  type: COMPANY_DETAILS,
  payload,
});

export const fetchCompanyDetails = (symbol) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const finances = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=70b9bd945b8252537780413eb681a7d1`, requestOptions);
  const responseFinancials = await finances.json();
  dispatch(companyDetails(responseFinancials));
};

export const fetchCompanyFinancials = (symbol) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const details = await fetch(`https://financialmodelingprep.com/api/v3/financial-growth/${symbol}?limit=20&apikey=70b9bd945b8252537780413eb681a7d1`, requestOptions);
  const responseData = await details.json();
  const newArray = [];
  newArray.push(responseData[0]);
  dispatch(companyFinances(newArray));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_FINANCES:
      return [action.payload, ...state];
    case COMPANY_DETAILS:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default reducer;
