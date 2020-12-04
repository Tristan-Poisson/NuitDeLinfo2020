import React, { Component } from "react";
import logo from "./Logo.png";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>L'application pour surfer en toute sérénité !</h2>

          <p>
            CleanWaves vous aide à trouver les bons spots et les bons horraires
            pour surfer en évitant de vous bainer dans de l'eau contaminée par
            des déchets ou des bactéries.
            <br />
            En remplissant le formulaire de CleanWave après vos sessions, vous
            aidez l'association Surfrider à mieux connaître les pratiques des
            surfeurs et mieux vous protéger.
          </p>

          <button onClick={() => this.props.history.push("/form")}>Form</button>
        </header>
      </div>
    );
  }
}

export default App;
