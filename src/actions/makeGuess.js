export const MAKE_GUESS = 'MAKE_GUESS'

export default (guess) => {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}