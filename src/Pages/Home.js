import React from 'react'
import ScoreBoard from '../Components/ScoreBoard/ScoreBoard.js'
import GameStart from '../Components/GameStart/GameStart.js'
import RulesButton from '../Components/RulesButton/RulesButton.js'
import {
  HomeContainer,
} from './style'

const Home = () => {
  return (
    <HomeContainer>
      <ScoreBoard />
      <GameStart />
      <RulesButton />
    </HomeContainer>
  )
}

export default Home