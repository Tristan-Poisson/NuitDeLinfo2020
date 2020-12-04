import React, { Component } from 'react';
import logo from './Logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenue
          </p>
          <button onClick={() => this.props.history.push('/form')}>
            Form
          </button>
        </header>
      </div>
    );
  }
}

export default App;
