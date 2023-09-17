import React, { useState } from 'react';
import {
  BtnBox,
  GoBtn,
  OutputWords,
  Section,
  ShareBtn,
  StrongText,
  WordsBox,
} from './output.styled';
import Modal from './Modal/Modal';

export default function Output({ job, time, view }) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      {modalState && <Modal setModalState={setModalState} />}
      {view && (
        <Section>
          <WordsBox>
            <OutputWords>
              당신은 <StrongText>{job}</StrongText>전문가가 되기 위해
            </OutputWords>
            <OutputWords>
              대략 <StrongText>{time}</StrongText>일 이상 훈련하셔야 합니다! :)
            </OutputWords>
          </WordsBox>
          <BtnBox>
            <GoBtn onClick={() => setModalState(true)}>훈련하러 가기 GO!GO!</GoBtn>
            <ShareBtn onClick={() => alert('공유 완료!')}>공유하기</ShareBtn>
          </BtnBox>
        </Section>
      )}
    </>
  );
}
