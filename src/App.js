import React from 'react';
import { Switch, Route } from 'react-router';
import Main from './pages/Main';
import Company from './pages/Company';

const App = () => (
  <>
    <Switch>
      <Route path="/company:name">
        <Company />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </>
);

export default App;
