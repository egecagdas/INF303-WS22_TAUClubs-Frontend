import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <label className="w-100">
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={this.state.credentials.email}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <label className="w-100">
          Password:
          <input
            type="password"
            name="password1"
            placeholder="Password"
            required
            value={this.state.credentials.password1}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <label className="w-100">
          Password again:
          <input
            type="password"
            name="password2"
            placeholder="Password again"
            required
            value={this.state.credentials.password2}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        {/* <Link to="/Login"> */}
        <button onClick={this.register}>Submit</button>
        {/* </Link> */}
      </div>
    );
  }
}

export default Register;
