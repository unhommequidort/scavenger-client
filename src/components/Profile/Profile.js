import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      email: "",
      first_name: "",
      last_name: ""
    };
  }

  componentDidMount() {
    // axios.defaults.withCredentials = true;
    axios(`/user/${this.props.match.params.id}`, {
      method: "get",
      withCredentials: true
    })
      .then(res => {
        console.log(res);
        const { user } = res.data;
        console.log(user);
        this.setState({
          user_id: user.user_id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name
        });
      })
      .catch(error => {
        console.log("hello error");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>User profile</h2>
        Email: {this.state.email}
      </div>
    );
  }
}

export default Profile;
