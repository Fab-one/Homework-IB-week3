import { MAKE_GUESS } from '../actions/makeGuess'
import { NEW_GAME } from '../actions/newGame'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
  case NEW_GAME :
    return state = []
  case MAKE_GUESS :
    return state.concat(payload)
  default :
    return state
  }
}