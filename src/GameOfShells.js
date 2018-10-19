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

  render() {
    const { isUserInteractionDisabled, message, isBallPlaced } = this.state
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
            <Shell
              test="shell-1"
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
            {isBallPlaced 
              ? 
              <Shell
                test="shell-2"
                ball={
                  <Ball
                    test="ball"
                    imagePath='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Transparent_Pearl_Clipart.png?m=1434276670'
                  />
                }
                imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
                onClick={() => {}}
              />
            : 
              <Shell
                test="shell-2"
                imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
                onClick={() => {}}
              />
            }
            <Shell
              test="shell-3"
              imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    )
  }
} 

export default GameOfShells