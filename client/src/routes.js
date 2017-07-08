import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App/App';
import SetupContainer from './Setup/SetupContainer';

const Routes = (props) => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/setup" component={SetupContainer} />
    </div>
  </Router>
);

export default Routes;
