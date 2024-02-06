import React from 'react'
import GameStart from './GameStart.js'
import GameEnd from './GameEnd.js'
import { MainContainer } from './style'

const GamePanel = () => {
  const [userChoice, setUserChoice] = React.useState(null)
  const [houseChoice, setHouseChoice] = React.useState(null)
  const [result, setResult] = React.useState(null)

  const restartGame = () => {
    setUserChoice(null)
    setHouseChoice(null)
    setResult(null)
  }
  
  return (
    <MainContainer>
      {/* Game Step 1: User choice */}
      {!userChoice && (
        <GameStart setUserChoice={setUserChoice} />
      )}

      {/* Game Step 2: House choice */}
      {userChoice && (
        <GameEnd
          userChoice={userChoice}
          houseChoice={houseChoice}
          result={result}
          setHouseChoice={setHouseChoice}
          setResult={setResult}
          restartGame={restartGame}
        />
      )}
    </MainContainer>
  )
}

export default GamePanel