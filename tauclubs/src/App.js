import logo from './logo.svg';
import './App.css';
import User from './components/user';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Button from "@mui/material/Button";
import BottomNavigation from './components/BottomNavigation'

function App() {
    const test = 34;
    const isAuth = true;
  return (
    <div>
      <header className="header">
          <header className="card-header">


              <div className="navbar d-flex justify-content-between ">
                  <h1 className="sitename m-0">

                      TAUCLUBS
                  </h1>
                  <nav>
                      <ul className="d-flex">
                          <li><a href="#home">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#rooms">Rooms</a></li>
                          <li><a href="blogs.html">Blog</a></li>
                          <li><a href="#contact">Contact</a></li>
                      </ul>
                  </nav>
              </div>


          </header>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
          <h4> App Component </h4>
          <Navbar/>
          <hr/>
          <User
          name = "Mustafa Murat Coşkun"
          department = "Bilişim"
          />
          <User
          name = "Oğuz Artıram"
          salary = "6000"
          department = "Bilişim"
          />



      </header>


    </div>
  );
}

export default App;
