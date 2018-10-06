import React from 'react'
import { shallow } from 'enzyme'
import Board from './Board'

describe('Board', () => {
  it('should be able to wrap other components', () => {
    const board = shallow(
      <Board>
        <div>Hello</div>
        <div>World!</div>
      </Board>
    )

    expect(board.containsAllMatchingElements([
      <div>Hello</div>,
      <div>World!</div>,
    ])).toBe(true)
  })
})