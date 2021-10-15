import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Route } from 'react-router-dom';
import store from '../../redux/configureStore';
import Company from '../../pages/Company';
import CompanyTop from '../CompanyTop';
import CompanyBanner from '../CompanyBanner';
import FinanceHeading from '../FinanceHeading';
import FinanceSection from '../FinanceSection';

test('Second company page render', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Route>
          <Company />
        </Route>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

test('company page banner render', () => {
  const price = 25;
  const vol = 12452;
  const home = renderer
    .create(
      <Provider store={store}>
        <Route>
          <CompanyBanner
            name="Metal Steel"
            image="https://financialmodelingprep.com/image-stock/GRVI.png"
            exchange="NASDAQ"
            sector="Steel"
            price={price}
            description="Steel based company"
            volAvg={vol}
            website="https://mahroze.com/"
          />
        </Route>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

test('company page financial section render', () => {
  const financialObj = {
    priceEarningsRatioTTM: 1,
  };
  let onlyObj;
  Object.entries(financialObj).map((each) => {
    let keyIndex = '';
    let valueIndex = 0;
    each.forEach((val, index) => {
      if (index === 0) {
        keyIndex = val;
      }
      valueIndex = val;
    });
    onlyObj = {
      [keyIndex]: valueIndex,
    };
    return onlyObj;
  });
  const i = 0 + 1;
  const home = renderer
    .create(
      <Provider store={store}>
        <Route>
          <FinanceSection eachObj={onlyObj} indexValue={i} />
        </Route>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

test('company page heading render', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Route>
          <FinanceHeading symbol="AAPL" />
        </Route>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

test('Each company page render', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Route>
          <CompanyTop symbol="AAPL" />
        </Route>
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});
