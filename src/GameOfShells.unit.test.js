import React from 'react'
import { shallow } from 'enzyme'
import GameOfShells from './GameOfShells'

describe('GameOfShells', () => {
  it('should render without crashing', () => {
    shallow(<GameOfShells />)
  })
})