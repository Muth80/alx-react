import React, { Component } from 'react'; // Import Component 
import './App.css';
import Notifications from './Notifications/Notifications';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </header>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">OK</button>
        </body>
        <footer className="App-footer">
          <p>{getFooterCopy(true)} © {getFullYear()}</p>
        </footer>
      </div>
    );
  }
}

export default App;

