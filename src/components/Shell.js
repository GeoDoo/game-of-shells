import React from 'react'
import shellImg from '../assets/images/shell.png'
import ballImg from '../assets/images/ball.png'

const Shell = ({
  test,
  hasBall,
  onClick
}) => (
  <div test={test} className="shell">
    <img 
      className="shell-image"
      src={shellImg}
      onClick={onClick}
      alt="Shell"
      width={240}
    />
    {hasBall && 
      <img 
        test='ball' 
        id="ball" 
        className="animated slideInDown" 
        src={ballImg}
        alt="Ball" 
        width={80} 
      />
    }
  </div>
)

export default Shell