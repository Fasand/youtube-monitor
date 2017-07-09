import React from 'react';
import Welcome from './Welcome';
import Axios from 'axios';
import './Welcome.css';

class WelcomeContainer extends React.Component {

  onSubmit (username, channel, api) {
    console.log(username, channel, api);
    Axios.get(`/api/checkapikey?key=${api}`)
      .then((response) => {
        if(response.data === true) {
          console.log("API key works.");
        } else {
          console.error("Bad API key.");
          // Animate warning alert using CSS transition
          document.querySelector('.api-error').style.margin = '30px auto 0 auto';
          document.querySelector('.api-error').style.opacity = 1;
        }
      });
  }

  render () {
    return <Welcome onSubmit={this.onSubmit} />;
  }

}

export default WelcomeContainer;
