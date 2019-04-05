import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer'
import 'semantic-ui-css/semantic.min.css'


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
