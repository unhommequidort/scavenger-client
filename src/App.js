import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";

// const SecretRoute = ({ component: Component, ...rest }) => {
//   <Route {...rest} render={(props) => (

//   )}
// }

class App extends Component {
  state = {
    data: null
  };

  // callBackendAPI = async () => {
  //   const response = await fetch("/auth/login", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email: "me@me.com",
  //       password: "password123"
  //     })
  //   });
  //   const body = await response;

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }

  //   return body;
  // };

  // componentDidMount() {
  //   this.callBackendAPI().then(res => {
  //     return res.json();
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Landing} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
