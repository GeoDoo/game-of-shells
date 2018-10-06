import React from 'react'

const Button = ({
  text,
  onClick
}) => <button testkey="start-game" onClick={onClick}>{text}</button>

export default Button