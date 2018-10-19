import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'

const Ball = ({
  testkey,
  imagePath
}) => <img testkey={testkey} id="ball" src={imagePath} alt="Ball" width={80} />

Ball.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Ball