import React, { Component } from 'react'
import Shell from './Shell'
import { shells } from '../config/db.json'

class ShellsContainer extends Component {
  state = {
    shellsOrder: [0, 1, 2] 
  }

  render() {
    const { isBallPlaced } = this.props
    return (
      <div id="shells-container">
        {shells.map(
          shell => {
            if (shell.id === 'shell-2' && isBallPlaced) {
              return (
                <Shell
                  key={shell.id}
                  test={shell.id}
                  hasBall
                  onClick={() => {}}
                />
              ) 
            } else {
              return (
                <Shell
                  key={shell.id}
                  test={shell.id}
                  onClick={() => {}}
                />
              )
            }
          }
        )}
      </div>
    )
  }
}

export default ShellsContainer