import React, { Component } from "react";

export default class FetchDataApi extends Component {
  constructor() {
    super();
    this.state = {
      Char: [],
      context: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ Char: json, isLoading: false });
      });
  }

  render() {
    const context = this.state.Char.map((item) => {
      return {
        userId: item.userId,
        id: item.id,
        title: item.title,
        body: item.body,
      };
    });
    const check = this.state.isLoading ? (
      "Loading..."
    ) : (
      <div>
        <h1>Data from API:</h1>
        {context.map((item) => (
          <div key={item.id}>
            <p>User ID: {item.userId}</p>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
    return <>{check}</>;
  }
}
