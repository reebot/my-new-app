import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
      </header>
    </div>
  );
}

export default App;
