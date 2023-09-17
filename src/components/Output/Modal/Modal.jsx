import React from 'react';
import { Btn, LicatImg, ModalBackUp, ModalContainer, SubText, Title } from './Modal.styled';
import licat from '../../../images/licat.svg';

export default function Modal({ setModalState }) {
  const onCloseModal = () => {
    setModalState(false);
  };

  const handleNoneClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalBackUp onClick={() => onCloseModal()}>
      <ModalContainer onClick={(e) => handleNoneClick(e)}>
        <Title>화이팅!!♥♥♥</Title>
        <SubText>당신의 꿈을 응원합니다!</SubText>
        <LicatImg src={licat} alt='licatImg' />
        {window.innerWidth > 768 ? (
          <Btn onClick={() => onCloseModal()}>종료하고 진짜 훈련하러 가기 GO!GO!</Btn>
        ) : (
          <Btn onClick={() => onCloseModal()}>
            종료하고 진짜
            <br /> 훈련하러 가기 GO!GO!
          </Btn>
        )}
      </ModalContainer>
    </ModalBackUp>
  );
}
