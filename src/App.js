import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avengersData from './Components/avengerData';

class App extends Component {
  constructor(){
    super();
    this.state = {avengersData};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Emily</h1>
        </header>
        <p className="App-intro">
          {this.state.avengersData.map(avengers => (<div key = {avengers.id}>{avengers.name}</div>))}
        </p>
      </div>
    );
  }
}

export default App;
