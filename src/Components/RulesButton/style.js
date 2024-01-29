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
`;

export const RuleModal = styled(Modal)`
  .ant-modal-close-icon {
    font-size: 20px;
    padding: 18px;
    margin-right: 10px;

    background: #ffffff;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 15px;
`;