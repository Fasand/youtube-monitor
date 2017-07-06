import React, { Component } from 'react';
import WelcomeContainer from './containers/WelcomeContainer';
import DashboardContainer from './containers/DashboardContainer';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render () {
    if(!this.state.isLoggedIn) {
      return <WelcomeContainer />;
    } else {
      return <DashboardContainer />;
    }
  }
}

export default App;
