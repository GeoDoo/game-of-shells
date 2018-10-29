import React, { Component } from 'react'
import Shell from './Shell'
import shuffle from '../helpers/shuffle'
import { shells } from '../config/db.json'

class ShellsContainer extends Component {
  state = {
    shellsOrder: [0, 1, 2] 
  }

  componentDidUpdate(prevProps) {
    const { iterations } = this.props
    if (iterations !== prevProps.iterations) {
      const { shellsOrder } = this.state
      this.setState({
        shellsOrder: shuffle(shellsOrder)
      })
    }
  }

  mapToOrder() {
    const { shellsOrder } = this.state
    return shells.map((shell, index) => {
      return {
        id: shell.id,
        position: {left: `${shellsOrder[index]*240}px`}
      }
    })
  }

  render() {
    const { isBallPlaced } = this.props
    return (
      <div id="shells-container">
        {this.mapToOrder().map(
          shell => {
            // FIXME remove hardcoded id
            if (shell.id === 'shell-2' && isBallPlaced) {
              return (
                <Shell
                  key={shell.id}
                  test={shell.id}
                  hasBall
                  position={shell.position}
                  onClick={() => {}}
                />
              ) 
            } else {
              return (
                <Shell
                  key={shell.id}
                  test={shell.id}
                  position={shell.position}
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