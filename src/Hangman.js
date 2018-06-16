import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StartGameContainer from './components/StartGameContainer'

export default class Hangman extends Component {
  state = {}

  render() {
    
    return (
      <div>
        
        <Link to="/">Go back</Link>
        <StartGameContainer />
        
      </div>
    )
  }
}
