// const IMAGES = 'app/home/FETCH-IMAGES';

// const initial = [];
// const fetchImages = (payload) => (
//   {
//     type: IMAGES,
//     payload,
//   }
// );

// export const getImages = (list) => async (dispatch) => {
//   const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//   };
//   list.map(async (element) => {
//     const imageCall = await fetch(`https://financialmodelingprep.com/api/v3/profile/${element.ticker}?apikey=70b9bd945b8252537780413eb681a7d1`, requestOptions);
//     const response = await imageCall.json();
//     if (response) {
//       dispatch(fetchImages(response));
//     }
//   });
// };

// const reducer = (state = initial, action) => {
//   switch (action.type) {
//     case IMAGES:
//       return [action.payload, ...state];
//     default:
//       return state;
//   }
// };

// export default reducer;
