import React, { Component } from "react";

class SetState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    console.log("prevState", this.state);
    this.setState((prevSate) => {
      return { count: prevSate.count + 1 };
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Click</button>
      </>
    );
  }
}
export default SetState;
