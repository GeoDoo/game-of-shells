import React from 'react'
import PropTypes from 'prop-types'

const Shell = ({
  imagePath,
  onClick
}) => <img testkey="shell" src={imagePath} onClick={onClick} />

Shell.propTypes = {
  imagePath: PropTypes.string.isRequired
}

export default Shell