import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  let text
  let onClickSpy
  let button
  beforeAll(() => {
    text = 'text'
    onClickSpy = jest.fn()
    button = shallow(
      <Button
        text={text}
        onClick={onClickSpy}
      />
    )
  })

  it('should accept text', () => {
    expect(button.text()).toBe(text)
  })

  it('should handle clicks', () => {
    button.simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should be able to disable itself', () => {
    button.setProps({ disabled: true })
    expect(onClickSpy).not.toBeCalled
  })
})