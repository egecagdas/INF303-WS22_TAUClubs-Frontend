import "../App.css";
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Club() {
  let { id } = useParams();

  let [club, setClub] = useState({});

  useEffect(() => {
    let data;
    axios
      .get("http://localhost:8000/clubs/" + id + "/")
      .then((res) => {
        data = res.data;
        console.log(data);
        setClub(data);
        console.log(club);
      })
      .catch((err) => {});
  }, []);

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
                  <a href="#Sign in">Sign in</a>
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
              <div className="clubInfo d-flex align-items-center shadow justify-content-center">
                {/* <div className="clubInfo"> */}

                <div>
                  <section className="clubName">{club.name}</section>
                  <section className="clubDescription">
                    {club.description}
                  </section>

                  <div className="text-align-center px-5 py-2">
                    <a href="#" class="btn btn-dark btn-block">
                      Follow
                    </a>
                  </div>
                  <div className="text-align-center px-5 py-2">
                    <a href="#" class="btn btn-dark btn-block">
                      Be a member
                    </a>
                  </div>
                  <div className="text-align-center px-5 py-2">
                    <a
                      href="https://www.instagram.com/infxofficial/"
                      target="_blank"
                      className="btn icon"
                    >
                      <i class="fa-brands fa-instagram"></i>
                      <span className="pl-2">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div>
                <div className="mb-3">
                  <ul class="d-flex">
                    <li className="mr-1">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action"
                      >
                        Category 1
                      </a>
                    </li>
                    <li className="mr-1">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action"
                      >
                        Category 1
                      </a>
                    </li>
                    <li className="mr-1">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action"
                      >
                        Category 1
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <PostList club_id={id} clubname={club.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Club;

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
