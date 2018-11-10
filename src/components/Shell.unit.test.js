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
        position={{left: '0px'}}
      />
    )
  })

  it('should accept an image', () => {
    expect(shell.find('img').first().props().src).not.toBe('')
  })

  it('should handle clicks', () => {
    shell.simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
  
  it('should accept a ball', () => {
    shell.setProps({
      hasBall: true
    })
    expect(shell.find('[test="ball"]').length).toBe(1)
  })

  it('should be able to position itself relative to its container', () => {
    expect(shell.props().style.left).toBe('0px')
  })
})