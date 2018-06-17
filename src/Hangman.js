import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StartGameContainer from './components/StartGameContainer'
import InputGuessContainer from './components/InputGuessContainer';


export default class Hangman extends Component {
  state = null

  render() {
    
    return (
      <div>
        
        <Link to="/">Go back</Link>
        <StartGameContainer />
        <InputGuessContainer />

      </div>
    )
  }
}
