import React from 'react'

const Button = ({
  test,
  text,
  onClick,
  disabled
}) => <button test={test} onClick={onClick} disabled={disabled}>{text}</button>

export default Button