import React from 'react'
import PropTypes from 'prop-types'

const Ball = ({
  imagePath
}) => <img testkey="ball" src={imagePath} />

Ball.propTypes = {
  imagePath: PropTypes.string.isRequired
}

export default Ball