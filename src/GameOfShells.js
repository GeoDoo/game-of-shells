import React from 'react'
import Button from './components/Button'
import ShellsContainer from './components/ShellsContainer'
import model from './config/model'
import settings from './config/settings'
import './assets/css/app.css'

class GameOfShells extends React.Component {
  state = {
    isStartGameDisabled: false,
    isPickShellDisabled: true,
    message: '',
    isBallPlaced: false,
    iterations: 0,
  }

  placeBall = () => {
    this.setState({
      isStartGameDisabled: true,
      message: model.placingBallMessage,
      isBallPlaced: true,
    })
  }

  shuffle = () => {
    for (let i = 0; i < settings.numberOfIterations; i++) {
      setTimeout(() => {
        const { iterations } = this.state
        this.setState({
          iterations: iterations + 1,
          message: model.shufflingMessage,
        })
      }, i * settings.iterationDuration)
    }  
  }

  enableUserInteraction = () => {
      this.setState({
        isStartGameDisabled: false,
        isPickShellDisabled: false,
        message: model.chooseShellMessage,
      })
  }

  play = () => {
    this.placeBall()

    setTimeout(() => {
      this.shuffle()
    }, settings.ballPlacingDuration)
    
    setTimeout(() => {
      this.enableUserInteraction()
    }, settings.shufflingAndBallPlacingDuration)
  }

  win = id => {
    const { isPickShellDisabled } = this.state
    return id === 'shell-2' && !isPickShellDisabled
  }

  pickShell = e => {
    if (this.win(e.target.parentNode.id)) {
      this.setState({
        message: model.winMessage,
      })
    }
  }

  render() {
    const { isStartGameDisabled, message, isBallPlaced, iterations } = this.state
    return (
      <div className="container">
        <div id="board">
          <h1 test="game-title">Game of Shells</h1>
          <Button
            test="start-game"
            text="Start game"
            onClick={this.play}
            disabled={isStartGameDisabled}
          />
          <div test="notifications" id="notifications">{message}</div>
        </div>
        <div id="table">
          <ShellsContainer isBallPlaced={isBallPlaced} iterations={iterations} isStartGameDisabled={isStartGameDisabled} pickShell={this.pickShell} />
        </div>
      </div>
    )
  }
} 

export default GameOfShells