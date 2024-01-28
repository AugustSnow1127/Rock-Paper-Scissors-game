import React from 'react'
import logo from '../../static/images/logo.svg'
import Score from './Score'
import {
  MainContainer,
  Logo,
} from './style'

const ScoreBoard = () => {
  return (
    <MainContainer>
      <Logo src={logo} alt="logo" />
      <Score />
    </MainContainer>
  )
}

export default ScoreBoard