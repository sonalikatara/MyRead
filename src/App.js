import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><i class="fa fa-book"></i></h1>
          <h1 className="App-title">Welcome to MyRead</h1>
        </header>
        <p className="App-intro">
          Arrange your books in shelves.
        </p>
      </div>
    );
  }
}

export default App;
