import "../App.css";
import logo from "../logo.svg";
import User from "../components/user";
import Navbar from "../components/Navbar";
//import Home from './components/Home'
import Button from "@mui/material/Button";
import BottomNavigation from "../components/BottomNavigation";
import { Link } from "react-router-dom";
import Register from "../components/register";

const Home = () => {
  //const test = 34;
  //const isAuth = true;
  return (
    <div>
      <header className="header">
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
                  <a href="Event">Event</a>
                </li>

                <li>
                  <a href="Clubs">Clubs</a>
                </li>

                <li>
                  <a href="Login">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div className="d-flex justify-content-between align-items-center p-5 ">
          <article>
            <p>Find your Club</p>
            <p>
              Find <t>yourself</t>
            </p>
          </article>
          <b1>
            <div>
              <Link to="/Clubs">
                <button className="myButton">Find your Clubs </button>
              </Link>
            </div>
            <div>
              <Link to="/JoinUs">
                <button className="myButton" href="JoinUs">
                  Join Us
                </button>
              </Link>
            </div>
          </b1>
        </div>
      </header>
    </div>
  );
};
export default Home;
