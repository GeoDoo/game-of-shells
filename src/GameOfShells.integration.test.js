import React from 'react'
import { mount } from 'enzyme'
import settings from './config/settings.json'
import GameOfShells from './GameOfShells'

describe('GameOfShells', () => {
  let gameOfShells
  beforeEach(() => {
    gameOfShells = mount(<GameOfShells />)
  }) 

  it('should display a message to the user that the game started after he starts the game', () => {
    gameOfShells.find('[test="start-game"]').last().simulate('click')

    expect(gameOfShells.state().message).toBe(settings.messages.start)
  })

  it('should hide the ball inside a shell', () => {
    expect(gameOfShells.find('[test="ball"]').last().length).toBe(0)
    gameOfShells.find('[test="start-game"]').last().simulate('click')
    
    expect(gameOfShells.find('[test="ball"]').last().length).toBe(1)
  })

  it('should prevent user interaction during the shuffle of shells', done => {
    gameOfShells.find('[test="start-game"]').last().simulate('click')
    
    expect(gameOfShells.state().isUserInteractionDisabled).toBe(true)
    setTimeout(() => {
      expect(gameOfShells.state().isUserInteractionDisabled).toBe(false)
      done()
    }, settings.duration)
  }, settings.duration + 1000)
})