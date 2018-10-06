import { stringButNotEmptyString } from './customPropTypes'

describe('stringButNotEmptyString', () => {
  it('should accept only strings', () => {
    const props = {
      test: {}
    }
    const propName = 'test'
    const componentName = 'Test'
    expect(stringButNotEmptyString(props, propName, componentName)).toBeInstanceOf(Error)
  })

  it('should not accept an empty string', () => {
    const props = {
      test: ''
    }
    const propName = 'test'
    const componentName = 'Test'
    expect(stringButNotEmptyString(props, propName, componentName)).toBeInstanceOf(Error)
  })
})