import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import FirstScreen from './browser/FirstScreen.js';
import SecondScreen from './browser/SecondScreen.js';
import NavBar from './browser/NavBar.js';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();


const Routes = (props) => (
  <Router history={history}>
    <div>
      <NavBar />
      <main className="container main">
        <Switch>
          <Route exact path='/' component={FirstScreen} />
          <Route path='/laptops' component={SecondScreen} />
          <Route path='/health+fitness+beauty' component={SecondScreen} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default Routes;
