import React from 'react';
import Welcome from '../components/Welcome';

class WelcomeContainer extends React.Component {

  onSubmit (username, channel, api) {
    console.log(username, channel, api);
  }

  render () {
    return <Welcome onSubmit={this.onSubmit} />;
  }

}

export default WelcomeContainer;
