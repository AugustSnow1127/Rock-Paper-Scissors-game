import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  top: 80px;
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    top: -60px;  
  }
`;

export const TriangleImg = styled.img`
  position: absolute;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const UpperTriangleLayout = styled.div`
  height: 50%;
  width: 490px;
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 360px;
    top: 30px;
  }
`;

export const LowerTriangleLayout = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const CircleContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
`;

export const EmptyCircle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #18213b;

  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

export const GameEndContainer = styled.div`
  // border: 1px solid red;
  width: 60vw;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 75%;
  width: 100%;

  @media (max-width: 768px) {
    width: 50%;
    height: 50%;
  }

  &.userChoice {
    order: 1;
  }

  &.houseChoice {
    order: 3;
    margin-left: 100px;
  }
`;

export const ChoiceTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    order: 1;
    width: 240px;
    font-size: 1rem;
  }
`;

export const GameResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  order: 2;

  @media (max-width: 768px) {
    position: absolute;
    bottom: -100px;
    width: 120%;
  }
`;

export const GameResult = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
  }
`;

export const RestartButton = styled.button`
  background: #fff;
  color: #c76e82;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
  }
`;