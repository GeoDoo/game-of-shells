import React from 'react'
import Button from './components/Button'
import Shell from './components/Shell'
import Ball from './components/Ball'
import settings from './config/settings.json'
import './assets/css/app.css'

class GameOfShells extends React.Component {
  state = {
    isUserInteractionDisabled: false,
    message: '',
  }

  shuffle = () => {
    this.setState({
      isUserInteractionDisabled: true,
      message: settings.messages.start,
    })

    setTimeout(() => {
      this.setState({
        isUserInteractionDisabled: false,
      })
    }, settings.duration)
  }

  render() {
    const { isUserInteractionDisabled, message } = this.state
    return (
      <div className="container">
        <div id="board">
          <h1 testkey="game-title">Game of Shells</h1>
          <Button
            testkey="start-game"
            text="Start game"
            onClick={this.shuffle}
            disabled={isUserInteractionDisabled}
          />
          <div testkey="notifications" id="notifications">{message}</div>
        </div>
        <div id="table">
          <div id="shells-container">
            <Shell
              testkey="shell-1"
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
            <Shell
              testkey="shell-2"
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
            <Shell
              testkey="shell-3"
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
            <Ball
              testkey="ball"
              imagePath='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Transparent_Pearl_Clipart.png?m=1434276670'
            />
          </div>
        </div>
      </div>
    )
  }
} 

export default GameOfShells