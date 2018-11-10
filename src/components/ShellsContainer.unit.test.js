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
    const newState = shellsContainer.state().shellsOrder
    expect(newState).not.toEqual(initialShellsOrder)
    shellsContainer.setProps({
      iterations: 2
    })
    const anotherState = shellsContainer.state().shellsOrder
    expect(anotherState).not.toEqual(newState)
  })

  it('should enable shells to be chosen', () => {
    const onShellClick = jest.fn()
    shellsContainer.setProps({
      pickShell: onShellClick
    })

    shellsContainer.find('[test="shell-1"]').simulate('click')
    expect(onShellClick).toHaveBeenCalled()
  })
})