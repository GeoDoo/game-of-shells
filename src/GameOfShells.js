import React from 'react'
import Button from './components/Button'
import ShellsContainer from './components/ShellsContainer'
import { messages, duration } from './config/settings.json'
import './assets/css/app.css'

class GameOfShells extends React.Component {
  state = {
    isUserInteractionDisabled: false,
    message: '',
    isBallPlaced: false,
    iterations: 0,
  }

  shuffle = () => {
    this.setState({
      isUserInteractionDisabled: true,
      message: messages.start,
      isBallPlaced: true,
    })

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const { iterations } = this.state
        this.setState({
          iterations: iterations + 1,
        })
      }, i * 1500)
    }

    setTimeout(() => {
      this.setState({
        isUserInteractionDisabled: false,
      })
    }, duration)
  }

  render() {
    const { isUserInteractionDisabled, message, isBallPlaced, iterations } = this.state
    return (
      <div className="container">
        <div id="board">
          <h1 test="game-title">Game of Shells</h1>
          <Button
            test="start-game"
            text="Start game"
            onClick={this.shuffle}
            disabled={isUserInteractionDisabled}
          />
          <div test="notifications" id="notifications">{message}</div>
        </div>
        <div id="table">
          <ShellsContainer isBallPlaced={isBallPlaced} iterations={iterations} />
        </div>
      </div>
    )
  }
} 

export default GameOfShells