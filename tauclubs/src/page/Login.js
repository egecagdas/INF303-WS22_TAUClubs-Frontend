import "./login.css";
import "../App.css";
import * as React from "react";
import LoginForm from "../components/login";
import { Link } from "react-router-dom";
// import LoginForm from "../components/logincopy";

function Login() {
  return (
    <body>
      <nav className="header">
        <header className="card-header align-items-center p-5">
          <div className="container navbar d-flex justify-content-between ">
            <h1 className="sitename m-0">
              <a className="px-0" href="/">
                <b>TAU</b>
                <c>Clubs</c>
              </a>
            </h1>
            <nav>
              <ul className="d-flex">
                <li>
                  <a href="/Event">Event</a>
                </li>

                <li>
                  <a href="/Clubs">Clubs</a>
                </li>

                <li>
                  <a href="/Login">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </nav>

      <main>
        <div className="container d-flex justify-content-between ">
          <article className="pl-0">
            <p>
              <t> Login </t>
            </p>
          </article>
          <div class="formconteiner w-100">
            {/* <div>
              <label for="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Email" name="email" required />

              <label for="psw">
                <b>Password</b>
              </label>
              <input type="password" placeholder="****" name="psw" required />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" />
                Remember me
              </label>
            </div> */}

            {/* <div>
              <span class="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div> */}

            <LoginForm />
            <p className="mt-2">Don't Have an Account?
              <Link to="/JoinUs">
                <a className='px-1' href="JoinUs">
                  Join Us
                </a>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Login;
