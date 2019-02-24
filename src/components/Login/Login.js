import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    const obj = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/auth/login", obj, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              onChange={this.handleEmailChange}
              value={this.state.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
