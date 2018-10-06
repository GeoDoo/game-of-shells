import React from 'react'
import Board from './components/Board'
import Button from './components/Button'
import Table from './components/Table'
import Shell from './components/Shell'
import Ball from './components/Ball'

class GameOfShells extends React.Component {
  state = {
    isUserInteractionDisabled: false
  }

  shuffle = () => {
    this.setState({
      isUserInteractionDisabled: true
    })
    setTimeout(() => {
      this.setState({
        isUserInteractionDisabled: false
      })
    }, 15000)
  }

  render() {
    const { isUserInteractionDisabled } = this.state
    return (
      <div className="container">
        <Board>
          <Button
            text="Start game"
            onClick={this.shuffle}
            disabled={isUserInteractionDisabled}
          />
        </Board>
        <div className="game-area">
          <Table />
          <Shell 
            imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
            onClick={() => {}}
          />
          <Shell 
            imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
            onClick={() => {}}
          />
          <Shell 
            imagePath='https://pics.clipartpng.com/midle/Sea_Shell_PNG_Clip_Art-1449.png'
            onClick={() => {}}
          />
          <Ball
            imagePath='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Transparent_Pearl_Clipart.png?m=1434276670'
          />
        </div>
      </div>
    )
  }
} 

export default GameOfShells