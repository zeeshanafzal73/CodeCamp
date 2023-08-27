import React, { Component } from "react";

class LogInOut extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>{isLoggedIn ? "You are logged in" : "You are not logged in"}</h1>
          <button onClick={() => this.setState({ isLoggedIn: true })}>
            Login
          </button>
          <button onClick={() => this.setState({ isLoggedIn: false })}>
            Logout
          </button>
        </div>
      </>
    );
  }
}

export default LogInOut;
