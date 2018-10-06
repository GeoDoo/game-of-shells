import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'

const Shell = ({
  imagePath,
  onClick
}) => <img testkey="shell" src={imagePath} onClick={onClick} />

Shell.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Shell