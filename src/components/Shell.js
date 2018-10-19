import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'

const Shell = ({
  test,
  ball,
  imagePath,
  onClick
}) => <div test={test} className="shell"><img src={imagePath} onClick={onClick} alt="Shell" width={240} />{ball}</div>

Shell.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Shell