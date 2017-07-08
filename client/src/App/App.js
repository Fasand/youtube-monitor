import React, { Component } from 'react';
import WelcomeContainer from '../Welcome/WelcomeContainer';
import ApplicationContainer from '../Application/ApplicationContainer';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSetUp: false
    };
  }

  render () {
    if(!this.state.isSetUp) {
      return <WelcomeContainer />;
    } else {
      return <ApplicationContainer />;
    }
  }
}

export default App;
