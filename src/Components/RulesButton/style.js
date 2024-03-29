import styled from "styled-components";
import { Modal } from 'antd'

export const RuleBtn = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  padding: 10px 20px;
  width: 100px;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
    bottom: 70px;
  }
`;

export const RuleModal = styled(Modal)`
  // centered
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 5px;
  border-radius: 50px;
  width: 360px;
  height: 400px;

  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ant-modal-close {
    font-size: 20px;
    padding: 18px;
    margin-right: 10px;
    position: absolute;
    right: 8px;
    top: 16px;
    border-radius: 50%;
    overflow: hidden;
    background: #ffffff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
  }
`;

export const ModalTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 15px;
  position: absolute;
  top: 30px;
  left: 30px;

  @media (max-width: 768px) {
  }
`;

export const RuleImg = styled.img`
  width: 100%;
  margin-top: 30px;

  @media (max-width: 768px) {
  }
`;