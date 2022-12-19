import "./login.css";
import { useParams } from "react-router-dom";
import { Component } from "react";
import "../App.css";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



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
                            <a href="#Event">Event</a>
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
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>

            </main>
        

        </body>

    );

}
export default Login;