import React from 'react'
import { shallow } from 'enzyme'
import Ball from './Ball'

describe('Ball', () => {
  let imagePath
  let ball
  beforeAll(() => {
    imagePath = 'some/path/to/image.png'
    ball = shallow(
      <Ball
        imagePath={imagePath}
      />
    )
  })

  it('should accept an image', () => {
    expect(ball.props().src).toBe(imagePath)
  })
})