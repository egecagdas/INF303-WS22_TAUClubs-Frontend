import "../App.css";
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ClubList from "../components/ClubList";

function Clubs() {
  //   let { id } = useParams();

  //   let [clubs, setClubs] = useState({});

  //   useEffect(() => {
  //     let data;
  //     axios
  //       .get("http://localhost:8000/clubs/")
  //       .then((res) => {
  //         data = res.data;
  //         setClubs(data);
  //       })
  //       .catch((err) => {});
  //   }, []);

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
                  <a href="#Event">Event</a>
                </li>

                <li>
                  <a href="/Clubs">Clubs</a>
                </li>

                <li>
                  <a href="#Login">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </nav>

      <main>
        <div className="container my-4">
          <div className="row gx-10">
            <div className="col-xl-12">
              <span className="title">Clubs</span>
              <div className="">
                <ClubList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Clubs;

{
  /* <div className="card mb-2 shadow">
                            <div className="row">
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title">Card Title</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam quo ab doloribus doloremque. Fugiat!</p>
                                    </div>  
                                </div>
                            </div>
                        </div>  
                      </div> */
}
