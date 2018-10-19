import React from 'react'
import { mount } from 'enzyme'
import GameOfShells from './GameOfShells'

describe('GameOfShells', () => {
  let gameOfShells
  beforeAll(() => {
    gameOfShells = mount(<GameOfShells />)
  }) 

  it('should prevent user interaction during the shuffle of shells', done => {
    gameOfShells.find('[testkey="start-game"]').at(1).simulate('click')
    
    expect(gameOfShells.state().isUserInteractionDisabled).toBe(true)
    setTimeout(() => {
      expect(gameOfShells.state().isUserInteractionDisabled).toBe(false)
      done()
    }, 15000)
  }, 20000)
})