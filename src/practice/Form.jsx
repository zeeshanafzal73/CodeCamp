import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isActive: false,
      isVergin: false,
    };
  }
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checked"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit}
          style={{ textAlign: "center" }}
        >
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="firstName"
            />
          </label>
          <br />
          <br />
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="lastName"
            />
          </label>
          <br />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="age"
          />
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            male
          </label>
          <br />
          <br />
          <label htmlFor="female">
            <input
              type="checkbox"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            female
          </label>
          <br />
          <br />
          <label for="isActive">
            <input
              type="checkbox"
              name="isActive"
              id="isActive"
              checked={this.state.isActive}
              onChange={this.handleChange}
            />
            isActive
          </label>
          <br />
          <br />
          <label for="isVergin">
            <input
              type="checkbox"
              name="isVergin"
              id="isVergin"
              checked={this.state.isVergin}
              onChange={this.handleChange}
            />
            isVergin
          </label>
          <br />
          <br />

          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">-----please select-----</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select><br /><br />
          <label>FirstName: {this.state.firstName}</label>
          <br />
          <br />
          <label>LastName: {this.state.lastName}</label>
          <br />
          <br />
          <label>age: {this.state.age}</label>
          <br />
          <br />
          <label>gender: {this.state.gender}</label>
          <br />
          <br />
          <label htmlFor="isActive">
            isActive: {this.state.isActive ? "Yes" : "No"}
          </label>
          <br />
          <br />
          <label htmlFor="isVergin">
            isVergin: {this.state.isVergin ? "Yes" : "No"}
          </label>
          <br />
          <br />
          <label for="destination">destination: {this.state.destination}</label><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
