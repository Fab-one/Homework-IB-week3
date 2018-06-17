import React, { Component } from 'react'
import StartGame from './StartGame'
import { connect } from 'react-redux'

class StartGameContainer extends Component {
  render() {
    StartGame()
    return (
      <div>
        <StartGame />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    randomWord: state
  }
}

export default connect(mapStateToProps)(StartGameContainer)