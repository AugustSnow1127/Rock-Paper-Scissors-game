import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  top: 80px;
  width: 500px;
  height: 500px;
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
  width: 100%;
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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