import "../App.css";
import logo from "../logo.svg";
import User from "../components/user";
import Navbar from "../components/Navbar";
//import Home from './components/Home'
import Button from "@mui/material/Button";
import BottomNavigation from "../components/BottomNavigation";
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ClubList from "../components/ClubList";
import PostListAll from "../components/PostListAll";

const Events = () => {
  //const test = 34;
  //const isAuth = true;

  let [user, setUser] = useState({});
  let [clubs, setClubs] = useState({});
  let [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let data;
    axios
      .get("http://localhost:8000/dj-rest-auth/user/")
      .then((res) => {
        data = res.data;
        console.log(data);
        setUser(data);
        console.log(user);
        setLoggedIn(true);
      })
      .catch((err) => {});
  }, []);

  // useEffect(() => {
  //   let data;
  //   axios
  //     .get("http://localhost:8000/posts/get_followed_clubs/")
  //     .then((res) => {
  //       data = res.data;
  //       console.log(data);
  //       setClubs(data);
  //       console.log(clubs);
  //     })
  //     .catch((err) => {});
  // }, []);

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
        <div className="container my-4">
          <div className="row gx-10">
            <div className="col-md-3">
              <box
                className="EventInfo d-flex align-items-center shadow justify-content-center mb-4"
                style={{ visibility: isLoggedIn ? "visible" : "hidden" }}
              >
                {/* <div className="clubInfo"> */}

                <div>
                  <section className="userName">{user.email}</section>
                  <section className="userDescription">
                    {"Student-User"}
                  </section>
                </div>
              </box>
              <box
                className="EventInfo d-flex align-items-center shadow justify-content-center"
                style={{ visibility: isLoggedIn ? "visible" : "hidden" }}
              >
                <div>
                  <section className="Follow">{"Followed Clubs"}</section>
                  <ul>
                    {/* {this.clubs.map((club) => (
                      <li className="text-center">{club}</li>
                    ))} */}
                  </ul>
                </div>
              </box>
            </div>
            <div className="col-md-9">
              {/* <div className="card mb-2 m-auto shadow">
                      <div className="row d-flex justify-content-center">
                            <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam quo ab doloribus doloremque. Fugiat!</p>
                                    </div>  
                                
                            </div>
                      </div>  
                </div> */}
              <PostListAll />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};
export default Events;
