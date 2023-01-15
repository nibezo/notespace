const App = () => {
  return (
    <div className="app">
      <div className="input-element-wrapper">
        <input type="password" placeholder="Enter Password"></input>
        <button>
          <img src={require('./img/close-eye.png')}/>
        </button>
      </div>
    </div>
  )
};

export default App; 