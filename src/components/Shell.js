import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'

const Shell = ({
  testkey,
  imagePath,
  onClick
}) => <img testkey={testkey} src={imagePath} onClick={onClick} alt="Shell" width={250} />

Shell.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Shell