// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
      </nav>
      <h1>App Page</h1>
    </div>
  );
}

export default App;