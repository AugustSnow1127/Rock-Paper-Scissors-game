import React from 'react'
import GameButton from '../GameButton/GameButton'
import PropTypes from 'prop-types'
import { useScoreStore } from '../../Store/scoreStore'
import {
  GameEndContainer,
  EmptyCircle,
  ChoiceContainer,
  ChoiceTitle,
  GameResultContainer,
  GameResult,
  RestartButton,
} from './style'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const resultMap = {
  win: 'YOU WIN',
  lose: 'YOU LOSE',
  draw: 'DRAW',
}

const useHouseChoice = (userChoice, setHouseChoice) => {
  React.useEffect(() => {
    if (!userChoice) return

    const choices = ['rock', 'paper', 'scissors']
    // delay house choice to make it more interesting
    delay(2000).then(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)]
      setHouseChoice(randomChoice)
    })

  }, [userChoice])
}

const useGameResult = (userChoice, houseChoice, setResult) => {
  const { setScoreNum } = useScoreStore()

  React.useEffect(() => {
    if (!userChoice || !houseChoice) return
    if (userChoice === houseChoice) {
      delay(2000).then(() => setResult('draw'))
    } else if (
      (userChoice === 'rock' && houseChoice === 'scissors') ||
      (userChoice === 'scissors' && houseChoice === 'paper') ||
      (userChoice === 'paper' && houseChoice === 'rock')
    ) {
      delay(2000).then(() => {
        setResult('win')
        setScoreNum((prev) => prev + 1)
      })
    } else {
      delay(2000).then(() => {
        setResult('lose')
        setScoreNum((prev) => prev - 1)
      })
    }
  }, [houseChoice, userChoice])
}

const GameEnd = ({
  userChoice,
  houseChoice,
  result,
  setHouseChoice,
  setResult,
  restartGame,
}) => {
  // House will pick a random choice after user has picked
  useHouseChoice(userChoice, setHouseChoice)

  // Set the result after house has picked
  useGameResult(userChoice, houseChoice, setResult)

  return (
    <GameEndContainer style={{justifyContent: result ? "center" : "space-between"}}>
      <ChoiceContainer className="userChoice">
        <ChoiceTitle>YOU PICKED</ChoiceTitle>
        {userChoice ? <GameButton type={userChoice} chose /> : <EmptyCircle />}
      </ChoiceContainer>
      <ChoiceContainer className="houseChoice">
        <ChoiceTitle>THE HOUSE PICKED</ChoiceTitle>
        {houseChoice ? <GameButton type={houseChoice} chose /> : <EmptyCircle />}
      </ChoiceContainer>

      {result && (
        <GameResultContainer>
          <GameResult style={{marginBottom: 10}}>{resultMap[result]}</GameResult>
          <RestartButton onClick={() => restartGame()}>PLAY AGAIN</RestartButton>
        </GameResultContainer>
      )}
    </GameEndContainer>
  )
}

GameEnd.propTypes = {
  userChoice: PropTypes.string.isRequired,
  houseChoice: PropTypes.string.isRequired,
  setHouseChoice: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
}

export default GameEnd