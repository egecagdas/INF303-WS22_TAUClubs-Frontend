import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

class Login extends Component {
  cookies = new Cookies();
  state = {
    credentials: { username: "", email: "", password: "" },
    isLoggedIn: false,
  };

  login = (event) => {
    let uninterceptedAxiosInstance = axios.create();

    uninterceptedAxiosInstance
      .post("http://127.0.0.1:8000/dj-rest-auth/login/", this.state.credentials)
      .then((response) => {
        console.log(response.data.key);
        this.cookies.set("token", response.data.key);
        this.state.isLoggedIn = true;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // changeText = () => {
  //   if (isLoggedIn) this.setState({ text });
  // };

  // Aşağıdaki kod gereksizse silebilirsiniz

  // login = (event) => {
  //   fetch("http://127.0.0.1:8000/dj-rest-auth/login/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(this.state.credentials),
  //   })
  //     .then(console.log(this.state.credentials))
  //     .then((response) => {
  //       console.log("here")
  //     })
  //     // .then((response) => {
  //     //   // Save the authentication key in local storage
  //     //   // localStorage.setItem("authKey", data.authKey);
  //     //   // Redirect the user to the home page
  //     //   // this.props.history.push("/");
  //     //   console.log(response);
  //     // })
  //     // .then((data) => {
  //     //   this.props.userLogin(data.token);
  //     // })
  //     .catch((error) => console.error(error));
  // };

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
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

        {/* <Link to="/Event"> */}
        <button onClick={this.login}>Login</button>
        {/* </Link> */}
      </div>
    );
  }
}

export default Login;
