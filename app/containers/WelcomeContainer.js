import React from 'react';
import Welcome from '../components/Welcome';

class WelcomeContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  onSubmit (username, channel) {
    console.log(username, channel);
  }

  render () {
    return <Welcome onSubmit={this.onSubmit} />;
  }

}

export default WelcomeContainer;
