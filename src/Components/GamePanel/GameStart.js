import React from 'react'
import PropTypes from 'prop-types'
import triangle from '../../static/images/bg-triangle.svg'
import GameButton from '../GameButton/GameButton'
import {
  UpperTriangleLayout,
  LowerTriangleLayout,
  TriangleImg,
} from './style'

const GameStart = ({setUserChoice}) => {
  const handleUserChoice = (choice) => {
    setUserChoice(choice)
  }

  return (
    <>
      <TriangleImg src={triangle} alt="triangle" />
      <UpperTriangleLayout>
        <GameButton type="paper" handleUserChoice={handleUserChoice} />
        <GameButton type="scissors" handleUserChoice={handleUserChoice} />
      </UpperTriangleLayout>
      <LowerTriangleLayout>
      <GameButton type="rock" handleUserChoice={handleUserChoice} />
      </LowerTriangleLayout>
    </>
  )
}

GameStart.propsTypes = {
  setUserChoice: PropTypes.func.isRequired,
}

export default GameStart