import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // Import HashRouter
import App from './App';
import './index.css';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component with HashRouter
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
