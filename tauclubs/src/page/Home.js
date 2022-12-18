import '../App.css';
import logo from '../logo.svg';
import User from '../components/user';
import Navbar from '../components/Navbar';
//import Home from './components/Home'
import Button from "@mui/material/Button";
import BottomNavigation from '../components/BottomNavigation'

const Home = () => {

    //const test = 34;
    //const isAuth = true;
  return (
    <div>
      <header className="header">
          <header className="card-header align-items-center p-5">


              <div className="navbar d-flex justify-content-between ">
                  <h1 className="sitename m-0">
                    
                    <b>TAU</b>
                    <c>Clubs</c>
                      
                  </h1>
                  <nav>
                      <ul className="d-flex">
                          <li><a href="#Event">Event</a></li>
                          
                          <li><a href="Clubs">Clubs</a></li>
                          
                          <li><a href="#Sign in">Sign in</a></li>
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
        <div className="d-flex justify-content-between align-items-center p-5 " >
          <article>
              
              <p>Find your Club</p>
              <p>Find  <t>yourself</t></p>  
              
          </article>
          <div> 
                <button className="myButton">Join us</button>
                <button className="myButton">Join </button>
          </div>
        </div>  
        
      </header>
    </div>
  );
}
export default Home;


