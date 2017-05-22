import React from 'react';

class Welcome extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      channel: ''
    };

    // Bind handlers to this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    if (e.target.id == 'username') {
      this.setState({
        username: e.target.value
      });
    } else if (e.target.id == 'channel') {
      this.setState({
        channel: e.target.value
      });
    } else return;
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.channel);
  }

  render () {
    return (
      <div className="container">
        <h1 className="text-center" style={{marginTop: '10%'}}>Set up your account</h1>
        <form className="form-horizontal col-md-6 col-md-offset-3" style={{marginTop: '5%'}} onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="username">Nickname</label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="channel">Channel link</label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="channel"
                  placeholder="https://www.youtube.com/user/Username"
                  value={this.state.channel}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-3 col-md-offset-9">
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }

}

export default Welcome;
