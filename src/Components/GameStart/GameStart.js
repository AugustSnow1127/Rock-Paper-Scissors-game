import React from 'react'
import triangle from '../../static/images/bg-triangle.svg'
import GameButton from '../GameButton/GameButton'
import {
  MainContainer,
  UpperTriangleLayout,
  LowerTriangleLayout,
  TriangleImg,
} from './style'

const GameStart = () => {
  return (
    <MainContainer>
      <TriangleImg src={triangle} alt="triangle" />
      <UpperTriangleLayout>
        <GameButton type="paper" />
        <GameButton type="scissors" />
      </UpperTriangleLayout>
      <LowerTriangleLayout>
      <GameButton type="rock" />
      </LowerTriangleLayout>
    </MainContainer>
  )
}

export default GameStart