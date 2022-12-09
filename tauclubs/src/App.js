import logo from './logo.svg';
import './App.css';
import User from './components/user';
import Navbar from './components/Navbar';

function App() {
    const test = 34;
    const isAuth = true;
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         TAUCLUBS

        </p>
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
