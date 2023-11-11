import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      error: '',
    }; 
  } 

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;

    // Simulate a login check (You should replace this with your actual login logic)
    if (username === 'yourUsername' && password === 'yourPassword') {
      this.setState({ loggedIn: true, error: '' });
    } else {
      this.setState({ loggedIn: false, error: 'Invalid username or password' });
    }
  };

  render() {
    const { username, password, loggedIn, error } = this.state;

    // If the user is logged in, display a success message
    if (loggedIn) {
      return <div>Welcome, {username}! You are now logged in.</div>;
    }

    return (
      <div>
        <h2>Login Page</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
        </div>
        <div style={{ color: 'red' }}>{error}</div>
      </div>
    );
  }
}

export default LoginPage;
