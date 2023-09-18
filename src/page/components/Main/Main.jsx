import React, { useState, useRef } from "react";

import Intro from "./Intro/Intro";
import Question from "./Question/Question";
import Result from "./Result/Result";

import * as S from "./Main.styled";

const Main = () => {
  const [resultVal, setResultVal] = useState(null);

  const fieldRef = useRef(null);
  const timeRef = useRef(0);

  const onSubmit = (event) => {
    event.preventDefault();

    const tranningTime = Math.ceil(
      10000 / parseInt(timeRef.current.value) / 24
    );

    const fainalResultVal = {
      field: fieldRef.current.value,
      time: tranningTime,
    };
    if (!fieldRef.current.value || !timeRef.current.value) {
      alert("입력되지 않았습니다.");
    } else {
      setResultVal(fainalResultVal);
    }
  };

  return (
    <S.Main>
      <Intro />
      <Question fieldRef={fieldRef} timeRef={timeRef} onSubmit={onSubmit} />
      {resultVal && <Result resultVal={resultVal} />}
    </S.Main>
  );
};

export default Main;
