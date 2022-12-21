import React, { Component } from "react";

class Login extends Component {
  state = {
    credentials: { email: "", password: "" },
  };

  // cookies = new Cookies();
  login = (event) => {
    fetch("http://127.0.0.1:8000/dj-rest-auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then(console.log(this.state.credentials))
      .then((data) => data.json())
      // .then((response) => {
      //   // Save the authentication key in local storage
      //   // localStorage.setItem("authKey", data.authKey);
      //   // Redirect the user to the home page
      //   // this.props.history.push("/");
      //   console.log(response);
      // })
      // .then((data) => {
      //   this.props.userLogin(data.token);
      // })
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
          <b>Email:</b>
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
          <b>Password:</b>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={this.state.credentials.password}
            onChange={this.inputChanged}
          />
        </label>
        <br />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
