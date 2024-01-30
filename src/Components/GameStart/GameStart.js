import React from 'react'
import triangle from '../../static/images/bg-triangle.svg'
import rock from '../../static/images/icon-rock.svg'
import paper from '../../static/images/icon-paper.svg'
import scissors from '../../static/images/icon-scissors.svg'
import {
  MainContainer,
  UpperTriangleLayout,
  LowerTriangleLayout,
  TriangleImg,
  GameButton,
} from './style'

const GameStart = () => {
  return (
    <MainContainer>
      <TriangleImg src={triangle} alt="triangle" />
      <UpperTriangleLayout>
        <GameButton icon={<img src={paper} alt="paper" />} />
        <GameButton icon={<img src={scissors} alt="scissors" />} />
      </UpperTriangleLayout>
      <LowerTriangleLayout>
      <GameButton icon={<img src={rock} alt="rock" />} />
      </LowerTriangleLayout>
    </MainContainer>
  )
}

export default GameStart