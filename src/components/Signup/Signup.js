import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const obj = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/auth/signup", obj, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        // redirect to user page
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
      <div className="Signup">
        <h2>Sign Up</h2>
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
