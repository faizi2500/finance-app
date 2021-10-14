import reducer from '../../redux/home/home';

const mockStore = {
  countriesReducer: [
    {
      changes: 1.97,
      changesPercentage: '39.32135',
      companyName: 'Grove, Inc.',
      price: '6.98',
      ticker: 'GRVI',
    },
    {
      changes: 1.97,
      changesPercentage: '26.165258',
      companyName: 'NRx Pharmaceuticals, Inc.',
      price: '11.91',
      ticker: 'NRXP',
    },
  ],
};

describe('Test', () => {
  test('Initial State', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});

describe('Mock Companies Reducer', () => {
  test('Test Companies Reducer With Mock Data', () => {
    const COUNTRIES = 'app/home/FETCH-COUNTRIES';
    const store = mockStore;
    const action = {
      type: COUNTRIES,
      payload: {
        countriesReducer: [
          {
            changes: 1.97,
            changesPercentage: '39.32135',
            companyName: 'Grove, Inc.',
            price: '6.98',
            ticker: 'GRVI',
          },
          {
            changes: 1.97,
            changesPercentage: '26.165258',
            companyName: 'NRx Pharmaceuticals, Inc.',
            price: '11.91',
            ticker: 'NRXP',
          },
        ],
      },
    };
    expect(reducer(store, action)).toEqual(action.payload);
  });
});
