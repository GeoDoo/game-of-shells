import React from 'react'
import shellImg from '../assets/images/shell.png'
import ballImg from '../assets/images/ball.png'

const Shell = ({
  test,
  id,
  hasBall,
  position,
  onClick
}) => (
  <div test={test} onClick={onClick} id={id} className="shell" style={position}>
    <img 
      className="shell-image"
      src={shellImg}
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