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
