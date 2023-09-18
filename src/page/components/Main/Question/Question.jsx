import React from "react";

import InputBox from "components/InputBox/InputBox";
import ButtonBox from "components/ButtonBox/ButtonBox";

import * as S from "./Question.styled";
import { click } from "style/images";

const Question = ({ fieldRef, timeRef, onSubmit }) => {
  const submitText = "나는 며칠 동안 훈련을 해야 1만 시간이 될까?";

  return (
    <S.InputContainer>
      <h2 className="hidden">{submitText}</h2>
      <form>
        <S.Field>
          <p>나는</p>
          <InputBox
            type="text"
            placeholder="예)프로그래밍"
            refName={fieldRef}
          />
          <p>전문가가 될 것이다.</p>
        </S.Field>

        <S.Time>
          <p>그래서 앞으로 매일 하루에</p>
          <div>
            <InputBox type="number" placeholder="예)5시간" refName={timeRef} />
            <p>시간씩 훈련할 것이다.</p>
          </div>
        </S.Time>

        <S.Submit>
          <ButtonBox click={onSubmit} text={submitText}></ButtonBox>
          <img src={click} alt="손가락 이모지" />
        </S.Submit>
      </form>
    </S.InputContainer>
  );
};

export default Question;
