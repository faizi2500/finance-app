import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Route } from 'react-router-dom';
import store from '../../redux/configureStore';
import App from '../../App';
import Main from '../../pages/Main';
import Each from '../Each';
import Home from '../Home';
import Top from '../Top';

test('renders correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Route>
          <App />
        </Route>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

test('Comapnies component renders correctly', () => {
  const tree = renderer
    .create(
      <Route>
        <Provider store={store}>
          <Main />
        </Provider>
      </Route>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Companies Data Passed', () => {
  const mockStore = [
    {
      changes: 1.97,
      changesPercentage: '39.32135',
      companyName: 'Grove, Inc.',
      price: '11.91',
      ticker: 'GRVI',
    },
    {
      changes: 2.47,
      changesPercentage: '"26.165258"',
      companyName: 'NRx Pharmaceuticals, Inc.',
      price: '6.98',
      ticker: 'NRXP',
    },
  ];
  const tree = renderer
    .create(
      <Route>
        <Provider store={store}>
          <Home nasdaq={mockStore} />
        </Provider>
      </Route>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Banner of home page displaying', () => {
  const tree = renderer
    .create(
      <Route>
        <Provider store={store}>
          <Top />
        </Provider>
      </Route>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('each company data shows', () => {
  const i = 1;
  const tree = renderer
    .create(
      <Route>
        <Provider store={store}>
          <Each name="AAPL" price="450" index={i} company="APPLE INC" />
        </Provider>
      </Route>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
