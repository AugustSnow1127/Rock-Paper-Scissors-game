import React from 'react'
import PropTypes from 'prop-types'
import rock from '../../static/images/icon-rock.svg'
import paper from '../../static/images/icon-paper.svg'
import scissors from '../../static/images/icon-scissors.svg'

import { GameButtonContainer, InnerButtonWhiteCircle, ButtonIcon } from './style'

const iconMap = {
  rock: <ButtonIcon src={rock} alt="rock" />,
  paper: <ButtonIcon src={paper} alt="paper" />,
  scissors: <ButtonIcon src={scissors} alt="scissors" />,
}

const GameButton = ({ type, handleUserChoice, chose }) => {
  return ( 
    <GameButtonContainer chose={chose} className={type} onClick={() => handleUserChoice(type)}>
      <InnerButtonWhiteCircle icon={iconMap[type]} onClick={() => handleUserChoice(type)} />
    </GameButtonContainer>
  )
}

GameButton.propsTypes = {
  type: PropTypes.string.isRequired,
  handleUserChoice: PropTypes.func,
  chose: PropTypes.bool,
}

GameButton.defaultProps = {
  handleUserChoice: () => {},
  chose: false,
}

export default GameButton