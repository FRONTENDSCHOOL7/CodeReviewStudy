import React from "react";

import ButtonBox from "components/ButtonBox/ButtonBox";

import * as S from "./Modal.styled";
const Modal = ({ onModal }) => {
  const backText = "종료하고 진짜 훈련하러 가기 GO!GO!";

  return (
    <S.Backdrop onClick={onModal}>
      <dialog
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.Message>
          <p></p>
          <p>당신의 꿈을 응원합니다!</p>
        </S.Message>
        <S.BackButton>
          <ButtonBox click={onModal} text={backText}></ButtonBox>
          <p>(그냥 닫기 버튼입니다.)</p>
        </S.BackButton>
      </dialog>
    </S.Backdrop>
  );
};

export default Modal;
