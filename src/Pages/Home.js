import React from 'react'
import ScoreBoard from '../Components/ScoreBoard/ScoreBoard.js'
import GamePanel from '../Components/GamePanel/GamePanel.js'
import RulesButton from '../Components/RulesButton/RulesButton.js'
import {ScoreContextProvider} from '../Store/scoreStore.js'
import {
  HomeContainer,
} from './style'

const Home = () => {
  return (
    <ScoreContextProvider>
      <HomeContainer>
        <ScoreBoard />
        <GamePanel />
        {/* <RulesButton /> */}
      </HomeContainer>
    </ScoreContextProvider>
  )
}

export default Home