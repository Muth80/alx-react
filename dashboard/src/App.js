import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications'; // Import Notifications component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerWrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-header-text">School dashboard</h1>
        </div>
      </header>
      <div className="App-body">
        <p className="App-body-text">Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </div>
      <Footer isIndex={true} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2019 - Holberton School</p>
    </footer>
  );
}

export default App;
