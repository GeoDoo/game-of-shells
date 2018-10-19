import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'

const Ball = ({
  test,
  imagePath
}) => <img test={test} id="ball" src={imagePath} alt="Ball" width={80} />

Ball.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Ball