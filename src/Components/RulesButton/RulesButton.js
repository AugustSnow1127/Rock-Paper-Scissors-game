import React from 'react'
import { RuleBtn, RuleModal, ModalTitle } from './style'
import ruleImage from '../../static/images/image-rules.svg'

const RulesButton = () => {
  const [isShowRule, setIsShowRule] = React.useState(false)

  const handleOpenModal = () => {
    setIsShowRule((prev) => !prev);
  }

  return (
    <>
      <RuleBtn onClick={handleOpenModal}>
        Rules
      </RuleBtn>
      
      <RuleModal
        open={isShowRule}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        centered
        width={360}
        onCancel={handleOpenModal}
        zIndex={1000}
      >
        <ModalTitle>Rules</ModalTitle>
        <img src={ruleImage} alt="rules" />
      </RuleModal>
    </>
  )
}

export default RulesButton