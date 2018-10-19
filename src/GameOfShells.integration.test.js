import React from 'react'
import { mount } from 'enzyme'
import settings from './config/settings.json'
import GameOfShells from './GameOfShells'

describe('GameOfShells', () => {
  let gameOfShells
  beforeAll(() => {
    gameOfShells = mount(<GameOfShells />)
  }) 

  it('should display a message to the user that the game started after he starts the game', () => {
    gameOfShells.find('[testkey="start-game"]').last().simulate('click')
    
    expect(gameOfShells.state().message).toBe(settings.messages.start)
  })

  it('should prevent user interaction during the shuffle of shells', done => {
    gameOfShells.find('[testkey="start-game"]').at(1).simulate('click')
    
    expect(gameOfShells.state().isUserInteractionDisabled).toBe(true)
    setTimeout(() => {
      expect(gameOfShells.state().isUserInteractionDisabled).toBe(false)
      done()
    }, settings.duration)
  }, settings.duration + 1000)
})