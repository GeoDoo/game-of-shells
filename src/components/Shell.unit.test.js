import React from 'react'
import { shallow } from 'enzyme'
import Shell from './Shell'

describe('Shell', () => {
  let imagePath
  let onClickSpy
  let shell
  beforeAll(() => {
    imagePath = 'some/path/to/image.png'
    onClickSpy = jest.fn()
    shell = shallow(
      <Shell
        imagePath={imagePath}
        onClick={onClickSpy}
      />
    )
  })

  it('should accept an image', () => {
    expect(shell.find('img').first().props().src).toBe(imagePath)
  })

  it('should handle clicks', () => {
    shell.find('img').first().simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
  
  it('should accept a ball', () => {
    shell.setProps({
      hasBall: true
    })
    expect(shell.find('img').last().length).toBe(1)
  })
})