import React from 'react';
import YouTube from 'react-youtube';
import WelcomeContainer from '../containers/WelcomeContainer';
import DashboardContainer from '../containers/DashboardContainer';

class App extends React.Component {
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
