import './style.css';
import { useState } from 'react';

const App = () => {
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
        ></input>
      </div>

      <div className="input-element-wrapper">
        <input
          className="password-field"
          type={state ? 'text' : 'password'}
          placeholder="password"
          autoComplete="off"
          maxLength="16"
        ></input>
        <button className="btn" onClick={toggleBtn}>
          <img
            alt='eye'
            src={
              state
                ? require('./img/open-eye.png')
                : require('./img/close-eye.png')
            }
          />
        </button>
      </div>

      <button className="btn-login">sign up / log in</button>
    </div>
  );
};

export default App;
