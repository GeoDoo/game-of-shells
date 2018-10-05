import React from 'react'

const Button = ({
  text,
  onClick,
  disabled
}) => <button onClick={onClick} disabled={disabled}>{text}</button>

export default Button