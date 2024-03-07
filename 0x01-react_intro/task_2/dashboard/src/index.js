import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<div id="root-notifications">
<Notifications /> // Render Notifications component
</div>
<App />
</React.StrictMode>
);