import React from 'react'
import ScoreBoard from '../Components/ScoreBoard/ScoreBoard.js'
import RockPaperScissors from '../Components/RockPaperScissors/RockPaperScissors.js'
import RulesButton from '../Components/RulesButton/RulesButton.js'
import {
  HomeContainer,
} from './style'

const Home = () => {
  return (
    <HomeContainer>
      <ScoreBoard />
      <RockPaperScissors />
      <RulesButton />
    </HomeContainer>
  )
}

export default Home