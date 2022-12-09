import logo from './logo.svg';
import './App.css';

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

          <h1> Welcome to your Club! </h1>

          <h2> {1+1} </h2>
          <h2> { "murat".toUpperCase()}</h2>
          <h2>{test + test}</h2>

          <div>
              {
                  isAuth ? <p>Kullanıcı kayıtlı</p>
                      :null
              }
          </div>

      </header>


    </div>
  );
}

export default App;
