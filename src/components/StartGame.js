import * as React from 'react'
import { randomWord } from '../lib/game'
import { showGuess } from '../lib/game'

export default function StartGame() {
  const word = randomWord()
  const wordArray = word.split('')

  console.log('The word is:', wordArray)
  return (<div>
    <h1>Game on!  </h1>
    <h2>
      {showGuess}
    </h2>
  </div>)
}