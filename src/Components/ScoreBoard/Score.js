import React from 'react'
import { useScoreStore } from '../../Store/scoreStore.js'
import {
  ScoreContainer,
  ScoreTitle,
  ScoreNum,
} from './style'

const Score = () => {
  const { scoreNum } = useScoreStore()

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreNum>{scoreNum}</ScoreNum>
    </ScoreContainer>
  )
}

export default Score