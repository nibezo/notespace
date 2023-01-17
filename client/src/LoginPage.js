import './style.css';
import { useState } from 'react';
let username,
  password = '';

function getUsername(event) {
  username = event.target.value;
}

function getPassword(event) {
  password = event.target.value;
}

function loginUser() {
  console.log(`Login is ${username}, password is ${password}`);
}

const LoginPage = () => {
  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="app">
      <div className="input-element-wrapper">
        <input
          className="login-field"
          type="text"
          placeholder="login"
          autoComplete="off"
          maxLength="13"
          spellCheck="false"
          onInput={getUsername}
        ></input>
      </div>

      <div className="input-element-wrapper">
        <input
          className="password-field"
          type={state ? 'text' : 'password'}
          placeholder="password"
          autoComplete="off"
          maxLength="16"
          spellCheck="false"
          onInput={getPassword}
        ></input>
        <button className="btn" onClick={toggleBtn}>
          <img
            alt="eye"
            src={
              state
                ? require('./img/open-eye.png')
                : require('./img/close-eye.png')
            }
          />
        </button>
      </div>
      <div className="input-element-wrapper">
        <button className="btn-login" onClick={loginUser}>
          sign up / log in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
