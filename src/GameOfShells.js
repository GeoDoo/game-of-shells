import React from 'react'
import Board from './components/Board'
import Button from './components/Button'

const GameOfShells = () => (
  <Board testkey="board">
    <Button
      testkey="start-game"
      text="Start game"
      onClick={() => {}}
    />
  </Board>
)

export default GameOfShells