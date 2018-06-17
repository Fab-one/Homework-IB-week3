import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Main from './Main';
import Hangman from './Hangman'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman</h1>
        </header>
        <main> 
          <Route exact path="/" component={Main} />
          <Route path="/hangman" component={Hangman} />  
        </main>
      </div>
    );
  }
}

export default App;
