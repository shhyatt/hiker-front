import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import WantToHike from './components/WantToHike'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
        <Route exact path='/' component={SearchContainer} />
        <Route path='/wanttohike' component={WantToHike} />
        </header>
      </div>
    );
  }
}

export default App;
