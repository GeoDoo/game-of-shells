import React from 'react'
import { shallow } from 'enzyme'
import ShellsContainer from './ShellsContainer'

describe('ShellsContainer', () => {
  let shellsContainer
  beforeAll(() => {
    shellsContainer = shallow(
      <ShellsContainer isBallPlaced />
    )
  })

  it('should handle the order of shells', () => {
    expect(shellsContainer.state().shellsOrder).toEqual([0, 1, 2])
  })

  it('should update the order of shells on every shuffle', () => {
    const initialShellsOrder = shellsContainer.state().shellsOrder
    shellsContainer.setProps({
      iterations: 1
    })
    expect(shellsContainer.state().shellsOrder).not.toEqual(initialShellsOrder)
  })
})