import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";

// const SecretRoute = ({ component: Component, ...rest }) => {
//   <Route {...rest} render={(props) => (

//   )}
// }

class App extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/user/:id" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
