import * as React from 'react'
import InputGuess from './InputGuess'
import { connect } from 'react-redux'

class InputGuessContainer extends React.PureComponent {
  showGuess(props) {  
  }
  
  render() {  
    return <InputGuess />
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(InputGuessContainer)