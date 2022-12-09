import logo from './logo.svg';
import './App.css';
import User from './components/user';

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
           <User/>

      </header>


    </div>
  );
}

export default App;
