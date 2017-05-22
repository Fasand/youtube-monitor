import React from 'react';

class Welcome extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        <h1 className="text-center" style={{marginTop:100}}>Welcome to YouTube Monitor</h1>
        
      </div>
    );
  }

}

export default Welcome;
