import React from 'react'
import { mount } from 'enzyme'
import model from './config/model'
import settings from './config/settings'
import GameOfShells from './GameOfShells'

describe('GameOfShells', () => {
  let gameOfShells
  beforeEach(() => {
    gameOfShells = mount(<GameOfShells />)
  }) 

  it('should display a message to the user that the game started after he starts the game', () => {
    gameOfShells.find('[test="start-game"]').last().simulate('click')

    expect(gameOfShells.state().message).toBe(model.placingBallMessage)
  })

  it('should hide the ball inside a shell', () => {
    expect(gameOfShells.find('[test="ball"]').last().length).toBe(0)
    gameOfShells.find('[test="start-game"]').last().simulate('click')
    
    expect(gameOfShells.find('[test="ball"]').last().length).toBe(1)
  })

  it('should prevent user from messing around with the controls of the game like starting a game or picking a shell during the shuffle of shells', done => {
    expect(gameOfShells.state().isPickShellDisabled).toBe(true)
    gameOfShells.find('[test="start-game"]').last().simulate('click')
    
    expect(gameOfShells.state().isStartGameDisabled).toBe(true)
    setTimeout(() => {
      expect(gameOfShells.state().isStartGameDisabled).toBe(false)
      expect(gameOfShells.state().isPickShellDisabled).toBe(false)
      done()
    }, settings.shufflingAndBallPlacingDuration)
  }, settings.extendTestDuration(settings.shufflingAndBallPlacingDuration))
})