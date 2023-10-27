import React from 'react'; // Import React
import logo from './logo.jpg'; // Import logo
import './App.css'; // Import CSS styles
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text">School dashboard</h1>
      </header>
      <div className="App-body">
        <p className="App-body-text">Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p className="App-footer-text">Copyright 2020 - Holberton School</p>
      </div>
      <Footer isIndex={true} />
    </div>
  );
}

function Footer({ isIndex }) {
  return (
    <footer>
      <p>{getFooterCopy(isIndex)}</p>
      <p>{getFullYear()}</p>
    </footer>
  );
}

export default App;
