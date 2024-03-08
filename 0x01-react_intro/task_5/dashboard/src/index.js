import React from 'react';
import ReactDOM from 'react-dom/client';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

const App = () => <div>Hello, React with Webpack!</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
