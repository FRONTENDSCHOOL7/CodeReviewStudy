import React, { useState, useEffect } from "react";

import ButtonBox from "components/ButtonBox/ButtonBox";
import LoadingBox from "./LoadingBox/LoadingBox";
import Modal from "./Modal/Modal";

import * as S from "./Result.styled";

const Result = ({ resultVal }) => {
  const [start, setStart] = useState(false);
  const [modal, setModal] = useState(false);

  // loadgin spinner을 위한,
  useEffect(() => {
    setStart(true);
    setTimeout(() => {
      setStart(false);
    }, 1500);
  }, [resultVal]);

  const onModal = () => {
    setModal(!modal);
  };

  const copyPath = () => {
    alert("URL이 복사되었습니다");
  };

  const resultText = "훈련하러 가기 Go!Go!";

  return (
    <S.ResultContainer>
      <h2 className="hidden">결과</h2>
      {start ? (
        <LoadingBox />
      ) : (
        <>
          <S.FeildResult>
            당신은<span>{resultVal.field}</span>전문가가 되기 위해서
          </S.FeildResult>
          <S.TimeResult>
            대략<span>{resultVal.time}</span>일 이상 훈련하셔야 합니다 !:)
          </S.TimeResult>
          <S.ButtonGroup>
            <ButtonBox click={onModal} text={resultText} wt="auto"></ButtonBox>
            <ButtonBox
              click={copyPath}
              text="공유하기"
              wt="auto"
              color="white"
            ></ButtonBox>
          </S.ButtonGroup>
        </>
      )}
      {modal && <Modal onModal={onModal} />}
    </S.ResultContainer>
  );
};

export default Result;
