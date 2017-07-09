import React from 'react';
import Welcome from './Welcome';
import Axios from 'axios';

class WelcomeContainer extends React.Component {

  onSubmit (username, channel, api) {
    console.log(username, channel, api);
    Axios.get(`/api/checkapikey?key=${api}`)
      .then((response) => {
        if(response.data === true) console.log("API key works.");
        else console.error("Bad API key.");
      });
  }

  render () {
    return <Welcome onSubmit={this.onSubmit} />;
  }

}

export default WelcomeContainer;
