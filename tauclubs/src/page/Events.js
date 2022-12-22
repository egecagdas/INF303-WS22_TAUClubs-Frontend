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
import PostListFollowed from "../components/PostListFollowed";

const Events = () => {
  //const test = 34;
  //const isAuth = true;

  let [user, setUser] = useState({});
  let [component, setComponent] = useState(<PostListAll />);
  let [clubs, setClubs] = useState([
    {
      id: 1,
      name: "You can follow clubs!",
      manager: "",
      members: [],
      pending_members: [],
      responsibleLecturer: "",
      clubMail: "",
      followers: [],
    },
  ]);
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

  useEffect(() => {
    let data;
    axios
      .get("http://localhost:8000/posts/get_followed_clubs/")
      .then((res) => {
        data = res.data;
        console.log(data);
        setClubs(data);
        console.log(clubs);
      })
      .catch((err) => {});
  }, []);

  const postAll = () => {
    setComponent(<PostListAll />);
  };

  const postFollowed = () => {
    setComponent(<PostListFollowed />);
  };

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
                    {clubs !== undefined &&
                      clubs.map((club) => (
                        <li className="text-center">{club.name}</li>
                      ))}

                    {/* {clubs.length ? (
                      () => {
                        {
                          this.clubs.map((club) => (
                            <li className="text-center">{club.name}</li>
                          ));
                        }
                      }
                    ) : (
                      <></>
                    )} */}
                  </ul>
                </div>
              </box>
            </div>
            <div className="col-md-9">
              <div>
                <button className="button" onClick={postAll}>
                  All Post
                </button>
                <button className="button" onClick={postFollowed}>
                  Post of followed clubs
                </button>
              </div>
              {component}
              {/* <PostListAll /> */}
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};
export default Events;
