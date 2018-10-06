import React from 'react'
import Board from './components/Board'
import Button from './components/Button'
import Table from './components/Table'
import Shell from './components/Shell'
import Ball from './components/Ball'

const GameOfShells = () => (
  <div className="container">
    <Board>
      <Button
        text="Start game"
        onClick={() => {}}
      />
    </Board>
    <div className="game-area">
      <Table />
      <Shell 
        imagePath=''
        onClick={() => {}}
      />
      <Shell 
        imagePath=''
        onClick={() => {}}
      />
      <Shell 
        imagePath=''
        onClick={() => {}}
      />
      <Ball />
    </div>
  </div>
)

export default GameOfShells