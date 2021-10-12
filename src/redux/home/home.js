const COUNTRIES = 'app/home/FETCH-COUNTRIES';
// const IMAGES = 'app/home/FETCH-IMAGES';
const initialState = [];
// const initialLink = 'https://financialmodelingprep.com/api/v3/profile/';
// const endLink = '?apikey=80374e700444bba4ab5b199f0786e0ea'

const fetchData = (payload) => (
  {
    type: COUNTRIES,
    payload,
  }
);

export const listAPIcall = () => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const finalData = await fetch('https://financialmodelingprep.com/api/v3/gainers?apikey=70b9bd945b8252537780413eb681a7d1', requestOptions);
  const data = await finalData.json();
  dispatch(fetchData(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
