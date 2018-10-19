import React from 'react'

const Button = ({
  testkey,
  text,
  onClick,
  disabled
}) => <button testkey={testkey} onClick={onClick} disabled={disabled}>{text}</button>

export default Button