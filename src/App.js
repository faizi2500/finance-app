import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { listAPIcall } from './redux/home/home';
import Main from './pages/Main';
import Company from './pages/Company';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAPIcall());
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
};

export default App;
