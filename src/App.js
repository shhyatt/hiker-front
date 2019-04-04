import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './containers/SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchContainer />

        </header>
      </div>
    );
  }
}

export default App;
