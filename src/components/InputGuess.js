import * as React from 'react'

export default class InputGuess extends React.PureComponent {
 
  render() {
    return (<div>
      <h4>Guess a Letter</h4>
  
      <form onSubmit={this.handleSubmit}>
        <label>
            Guess letter:
          <input type="text" name="guess" onChange={this.handleChange} />
        </label>
      </form>
    </div>)
  }
}