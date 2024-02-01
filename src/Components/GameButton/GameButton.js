import React from 'react'
import rock from '../../static/images/icon-rock.svg'
import paper from '../../static/images/icon-paper.svg'
import scissors from '../../static/images/icon-scissors.svg'
import PropTypes from 'prop-types'

import { GameButtonContainer, InnerButtonWhiteCircle } from './style'

const iconMap = {
  rock: <img src={rock} alt="rock" />,
  paper: <img src={paper} alt="paper" />,
  scissors: <img src={scissors} alt="scissors" />,
}

const GameButton = ({ type }) => {
  return ( 
    <GameButtonContainer ant-click-animating-without-extra-node="false" className={type}>
      <InnerButtonWhiteCircle ant-click-animating-without-extra-node="false" icon={iconMap[type]} />
    </GameButtonContainer>
  )
}

GameButton.propsTypes = {
  type: PropTypes.string.isRequired,
}

export default GameButton