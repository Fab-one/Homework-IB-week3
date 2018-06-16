import * as React from 'react'
import StartGame from './StartGame'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'

class StartGameContainer extends React.PureComponent {
  startGame() {
    console.log('The word is', showGuess)
  }

  render() {
    return <StartGame />
  }
}

const mapStateToProps = (state) => {
  return {
    randomWord: state
  }
}

export default connect(mapStateToProps)(StartGameContainer)