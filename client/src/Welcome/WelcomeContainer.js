import React from 'react';
import Welcome from './Welcome';
import Axios from 'axios';
import './Welcome.css';

class WelcomeContainer extends React.Component {

  onSubmit (username, channel, api) {
    // All fields must be filled in
    if(username.length === 0 ||
      channel.length === 0 ||
      api.length === 0) {
        alert("Please fill in all the fields.");
      }
    Axios.get(`/api/checkcredentials?username=${username}&channel=${channel}&key=${api}`)
      .then((response) => {
        if(response.data === true) {
          console.log("API key works.");
          window.location = '/setup';
        } else {
          console.error("Bad API key.");
          // Animate warning alert using CSS transition
          document.querySelector('.api-error').style.margin = '30px auto 0 auto';
          document.querySelector('.api-error').style.opacity = 1;
          // Hide alert after some time
          setTimeout(() => {
            document.querySelector('.api-error').style.margin = '0px auto 0 auto';
            document.querySelector('.api-error').style.opacity = 0;
          }, 3000);
        }
      });
  }

  render () {
    return <Welcome onSubmit={this.onSubmit} />;
  }

}

export default WelcomeContainer;
