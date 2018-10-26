import React from 'react'
import { shallow } from 'enzyme'
import Shell from './Shell'

describe('Shell', () => {
  let onClickSpy
  let shell
  beforeAll(() => {
    onClickSpy = jest.fn()
    shell = shallow(
      <Shell
        onClick={onClickSpy}
      />
    )
  })

  it('should accept an image', () => {
    expect(shell.find('img').first().props().src).not.toBe('')
  })

  it('should handle clicks', () => {
    shell.find('img').first().simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
  
  it('should accept a ball', () => {
    shell.setProps({
      hasBall: true
    })
    expect(shell.find('[test="ball"]').length).toBe(1)
  })
})