import React, { Component } from "react";
class Register extends Component {
  state = {
    credentials: { email: "", password1: "", password2: "" },
  };

  register = (event) => {
    fetch("http://127.0.0.1:8000/dj-rest-auth/registration/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(this.state.credentials);
      })
      .catch((error) => console.error(error));
  };
  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <div>
        <h1>Register user form</h1>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <label>
          Password1:
          <input
            type="password"
            name="password1"
            value={this.state.credentials.password1}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <label>
          Password2:
          <input
            type="password"
            name="password2"
            value={this.state.credentials.password2}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Register;
