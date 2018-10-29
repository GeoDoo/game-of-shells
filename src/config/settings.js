import { durations, messages } from './settings.json'

export default {
  extendTestDuration(duration) {
    return duration + 1000
  },
  get ballPlacingDuration() {
    return durations.ballPlacing
  },
  get shufflingDuration() {
    return durations.shuffling
  },
  get iterationDuration() {
    return durations.iteration
  },
  get shufflingAndBallPlacingDuration() {
    return durations.shuffling + durations.ballPlacing
  },
  get startMessage() {
    return messages.start
  }
}