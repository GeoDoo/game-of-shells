import React from 'react'
import Button from './components/Button'
import Shell from './components/Shell'
import settings from './config/settings.json'
import { shells } from './config/db.json'
import './assets/css/app.css'

class GameOfShells extends React.Component {
  state = {
    isUserInteractionDisabled: false,
    message: '',
    isBallPlaced: false,
  }

  shuffle = () => {
    this.setState({
      isUserInteractionDisabled: true,
      message: settings.messages.start,
      isBallPlaced: true,
    })

    setTimeout(() => {
      this.setState({
        isUserInteractionDisabled: false,
      })
    }, settings.duration)
  }

  renderShells() {
    const { isBallPlaced } = this.state
    return shells.map(
      shell => {
        if (shell.id === 'shell-2' && isBallPlaced) {
          return (
            <Shell
              key={shell.id}
              test={shell.id}
              hasBall
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
          ) 
        } else {
          return (
            <Shell
              key={shell.id}
              test={shell.id}
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
          )
        }
      }
    )
  }

  render() {
    const { isUserInteractionDisabled, message } = this.state
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
          <div id="shells-container">
            {this.renderShells()}
          </div>
        </div>
      </div>
    )
  }
} 

export default GameOfShells