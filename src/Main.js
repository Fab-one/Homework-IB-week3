import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Hangman extends Component {
  render() {
    return (
      <div>
        <h3> Welcome to Fabian's Hangman game! </h3>
        <Link to="/hangman">Let's play a game of Hangman!</Link>
      </div>
    )
  }
}

