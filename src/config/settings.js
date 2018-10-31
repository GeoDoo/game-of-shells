import { durations } from './settings.json'

export default {
  extendTestDuration(duration) {
    return duration + 1000
  },
  get numberOfIterations() {
    return parseInt(durations.shuffling / durations.iteration, 10)
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
  }
}