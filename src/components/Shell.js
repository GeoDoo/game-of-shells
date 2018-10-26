import React from 'react'
import { stringButNotEmptyString } from '../helpers/customPropTypes'
import ballImg from '../assets/images/ball.png'

const Shell = ({
  test,
  hasBall,
  imagePath,
  onClick
}) => (
  <div test={test} className="shell">
    <img className="shell-image" src={imagePath} onClick={onClick} alt="Shell" width={240} />
    {hasBall && 
      <img 
        test='ball' 
        id="ball" 
        className="animated slideInDown" 
        src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Transparent_Pearl_Clipart.png?m=1434276670'
        alt="Ball" 
        width={80} 
      />
    }
  </div>
)

Shell.propTypes = {
  imagePath: (props, propName, componentName) => stringButNotEmptyString(props, propName, componentName)
}

export default Shell