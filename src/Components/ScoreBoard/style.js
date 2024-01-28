import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  padding: 20px;
  top: 50px;
  position: absolute;
`;

export const Logo = styled.img`
  width: 150px;
  height: 100px;
`;

export const ScoreContainer = styled.div`
  background: white;
  width: 150px;
  height: 110px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ScoreTitle = styled.h2`
  color: hsl(229, 64%, 46%);
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ScoreNum = styled.h1`
  color: hsl(229, 25%, 31%);
  font-size: 4rem;
  font-weight: 700;
`;