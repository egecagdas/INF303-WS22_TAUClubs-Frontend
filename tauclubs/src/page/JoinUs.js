import "./login.css";
import "../App.css";
import * as React from "react";
import Register from "../components/register";

const JoinUs = () => {
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
        <div className="container d-flex justify-content-center ">
          <article className="pl-0">
            <p>
              <t> New Member Form </t>
            </p>
          </article>
          <div class="formconteiner w-100">
            <div>
              {/* <label for="Name"><b>Name</b></label>
                <input type="text" placeholder="Name" name="Name" required />

                <label for="Surname"><b>Surname</b></label>
                <input type="text" placeholder="Surname" name="Surname" required /> */}

              {/* <label for="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Email" name="email" required />

              <label for="psw">
                <b>Password</b>
              </label>
              <input type="password" placeholder="****" name="psw" required /> */}

              <Register />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};
export default JoinUs;
