import React, { Component } from 'react';
import Axios from 'axios';

import WelcomeContainer from '../Welcome/WelcomeContainer';
import ApplicationContainer from '../Application/ApplicationContainer';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSetUp: undefined
    };
  }

  componentDidMount () {
    Axios.get('/api/issetup')
      .then((response) => {
        this.setState({ isSetUp: response.data });
      });
  }

  render () {
    if(this.state.isSetUp === undefined) {
      return (
        <div>
          <div className="loader"></div>
        </div>
      )
    } else if(this.state.isSetUp === true) {
      return <ApplicationContainer />;
    } else {
      return <WelcomeContainer />;
    }
  }
}

export default App;
