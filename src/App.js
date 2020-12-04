import React from 'react';
import logo from './Logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bonjour...?
        </p>
        <a>
         un bouton
        </a>
      </header>
    </div>
  );
}

export default App;
