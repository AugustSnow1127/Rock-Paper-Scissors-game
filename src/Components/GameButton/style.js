import styled from "styled-components";
import { Button } from "antd";

export const GameButtonContainer = styled(Button)`
  &.scissors {
    background: hsl(39, 89%, 49%);
    box-shadow: 0px 10px hsl(39, 89%, 30%);
  }
  &.paper {
    background: hsl(230, 89%, 62%);
    box-shadow: 0px 10px hsl(230, 89%, 30%);
  }
  &.rock {
    background: hsl(349, 71%, 52%);
    box-shadow: 0px 10px hsl(349, 71%, 30%);
  }

  width: 200px !important;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:after {
    display: none;
  }

  ${({ chose }) =>
    chose &&
    `
      scale: 1.1;
    `
  }

  @media (max-width: 768px) {
    width: 150px !important;
    height: 150px;
  }
`;

export const InnerButtonWhiteCircle = styled(Button)`
  width: 150px !important;
  height: 150px;
  border-radius: 50%;
  border: none;
  background: hsl(0, 0%, 90%);
  box-shadow: 0px -5px hsl(0, 0%, 80%);
  cursor: pointer;
  &:after {
    display: none;
  }

  @media (max-width: 768px) {
    width: 110px !important;
    height: 110px;
  }
`;

export const ButtonIcon = styled.img`
  @media (max-width: 768px) {
  }
`;