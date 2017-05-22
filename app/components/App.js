import React from 'react';
import YouTube from 'react-youtube';
import Welcome from './Welcome';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // videoId: "YImhZQteBIY"
    };
  }

  componentDidMount () {
    setTimeout(() => this.changeVideoId("dQw4w9WgXcQ"), 7000);
  }

  changeVideoId (newId) {
    this.setState({
      videoId: newId
    });
  }

  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0
      }
    };

    return <Welcome />;

    // return (
    //   <YouTube
    //     videoId={this.state.videoId}
    //     opts={opts}
    //     onReady={this._onReady}
    //   />
    // );

  }
}

export default App;
