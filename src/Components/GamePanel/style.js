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
`;

export const TriangleImg = styled.img`
  position: absolute;
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

export const EmptyCircle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #18213b;
`;

export const GameEndContainer = styled.div`
  // border: 1px solid red;
  width: 130%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 75%;

  &.userChoice {
    order: 1;
  }

  &.houseChoice {
    order: 3;
  }
`;

export const ChoiceTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
`;

export const GameResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  
  order: 2;
`;

export const GameResult = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`;

export const RestartButton = styled.button`
  background: #fff;
  color: #c76e82;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;