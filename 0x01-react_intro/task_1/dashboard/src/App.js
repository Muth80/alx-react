import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg'; // Replace 'holberton-logo.jpg' with the actual logo file name
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(true)} © {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
