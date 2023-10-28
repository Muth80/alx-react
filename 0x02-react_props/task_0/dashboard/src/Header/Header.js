import React from 'react';
import logo from './logo.jpg';

function Header() {
  return (
    <header className="App-header">
      <div className="headerWrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text">School dashboard</h1>
      </div>
    </header>
  );
}

export default Header;

