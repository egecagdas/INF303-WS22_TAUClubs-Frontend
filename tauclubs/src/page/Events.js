import '../App.css';
import logo from '../logo.svg';
import User from '../components/user';
import Navbar from '../components/Navbar';
//import Home from './components/Home'
import Button from "@mui/material/Button";
import BottomNavigation from '../components/BottomNavigation'
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ClubList from "../components/ClubList";

const Events = () => {

    //const test = 34;
    //const isAuth = true;
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
            <div className="col-md-3">
              <box className="EventInfo d-flex align-items-center shadow justify-content-center mb-4">
                {/* <div className="clubInfo"> */}

                <div>
                  <section className="userName">{'Ayşe'}</section>
                  <section className="userDescription">
                    {'Student-User'}
                  </section>

                  
                </div>
               
              </box>
              <box className="EventInfo d-flex align-items-center shadow justify-content-center">

                
                <div>
                  <section className="Follow">{"Followed Clubs"}</section>
                  <ul>
                    <li className='text-center'>{"Informatix"}</li>
                    <li className='text-center'>{"EMK"}</li>
                  </ul>

                  
                </div>
              </box>

              
            </div>
           <div className="col-md-9">
              
                It's me.. Hi! I'm the problem. It's me.
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

                <PostList/>

                  
           </div>
            
          </div>
           
        </div>
        

        
    </main>

    
  </body>
);
}
export default Events;
