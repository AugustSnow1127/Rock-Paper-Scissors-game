import React from 'react'
import {
  ScoreContainer,
  ScoreTitle,
  ScoreNum,
} from './style'

const Score = () => {
  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreNum>0</ScoreNum>
    </ScoreContainer>
  )
}

export default Score