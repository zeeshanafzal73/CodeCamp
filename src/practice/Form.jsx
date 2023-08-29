import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: true,
      gender :""
    };
  }
  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  };
  render() {
    return (
      <div>
        <form action="" style={{ textAlign: "center" }}>
          <input
            type="text"
            name="firstName"
            placeholder="FirstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <p>
            {this.state.firstName} {this.state.lastName}
          </p>
          <label htmlFor="isChecked">isChecked</label>
          <input
            type="checkbox"
            name="isChecked"
            checked={this.state.isChecked}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="radiobutton">
            <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange} />
            Male
          </label>
          <label htmlFor="radiobutton">
            <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange} />
            female
          </label>
        </form>
      </div>
    );
  }
}
