import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'

const Ball = ({
  imagePath
}) => <img testkey="ball" src={imagePath} />

Ball.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Ball