import { shells, messages } from './data.json'

export default {
  get shells() {
    return shells
  },
  get placingBallMessage() {
    return messages.placingBall
  },
  get shufflingMessage() {
    return messages.shuffling
  },
  get chooseShellMessage() {
    return messages.chooseShell
  },
  get winMessage() {
    return messages.win
  },
  get loseMessage() {
    return messages.lose
  }
}