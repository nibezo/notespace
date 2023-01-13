import React from 'react';
import './App.css';
import DataFetching from './DataFetching';
let username, password = '';

function getUsername(event) {
  username = event.target.value;
}

function getPassword(event) {
  password = event.target.value;
}

function loginUser() {
  alert(`${username} logged in, password is ${password}`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Please, login or register. </code>
        </p>
        <input
          id="username"
          type="text"
          onInput={getUsername}
          autoComplete="off" 
        />
        <input
          id="password"
          type="password"
          onInput={getPassword}
          autoComplete="off"
        />
        <button className="App-button" onClick={loginUser}>
          Stay in touch!
        </button>
      </header>
      <DataFetching />
    </div>
  );
}

export default App;
