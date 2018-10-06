export const stringButNotEmptyString = (props, propName, componentName) => {
  if (typeof props[propName] !== 'string' || props[propName] === '') {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. It should be a string and not empty.'
    )
  }
}