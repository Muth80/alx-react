import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

const App = () => {
  return (
    <div>
      <h1>React Intro</h1>
      <Component1 />
      <Component2 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));