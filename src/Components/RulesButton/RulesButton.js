import React from 'react'
import { RuleBtn, RuleModal, ModalTitle } from './style'
import ruleImage from '../../static/images/image-rules.svg'
import iconClose from '../../static/images/icon-close.svg'

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
      
      {isShowRule && (
        <RuleModal
          open
          cancelButtonProps={{ style: { display: 'none' } }}
          okButtonProps={{ style: { display: 'none' } }}
          centered
          width={360}
          onCancel={handleOpenModal}
          zIndex={1000}
          closeIcon={<img src={iconClose} alt="close" />}
        >
          <ModalTitle>Rules</ModalTitle>
          <img src={ruleImage} alt="rules" />
        </RuleModal>
      )}
    </>
  )
}

export default RulesButton