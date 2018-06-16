import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './Main';
import Hangman from './Hangman';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Hangman</h1>
          </header>
          <main>
          
            <Route exact path="/" component={Main} />
            <Route path="/hangman" component={Hangman} />
          
          </main>
        </div>
      </Provider>

    );
  }
}

export default App;
