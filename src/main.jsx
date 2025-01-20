// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import Tailwind CSS styles
import App from './App'; // Import App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);