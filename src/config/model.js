import { shells, messages } from './data.json'

export default {
  get shells() {
    return shells
  },
  get placingBallMessage() {
    return messages.placingBall
  }
}