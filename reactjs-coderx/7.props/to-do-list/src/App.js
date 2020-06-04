import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todoitem from './component/Todoitem'

function App() {
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

        <Todoitem title="Todo 1" />
        <Todoitem title="Todo 2" />
        <Todoitem title="Todo 3" />
        <Todoitem title="Todo 4" />
        <Todoitem title="Todo 5" />

      </header>
    </div>
  );
}

export default App;
