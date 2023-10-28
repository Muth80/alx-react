import React from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <Notifications /> {/* Add the Notifications component before the div.App element */}
      <Header /> {/* Use the Header component here */}
      <React.Fragment>
        <div className="App-body">
          <Login /> {/* Use the Login component here */}
        </div>
        <div className="App-footer">
          <Footer /> {/* Use the Footer component here */}
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;

