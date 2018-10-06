import React from 'react'

const Button = ({
  text,
  onClick,
  disabled
}) => <button testkey="start-game" onClick={onClick} disabled={disabled}>{text}</button>

export default Button