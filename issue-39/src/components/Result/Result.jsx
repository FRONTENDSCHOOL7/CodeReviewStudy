import React from "react";
import "./Result.css";

function Result({ inputGoal, inputTime, setShowModal }) {
  const resultGoalValue = inputGoal || "";
  const resultTimeValue = inputTime ? Math.floor(10000 / inputTime) : "";
  const showModal = () => {
    setShowModal(true);
  };
  // const handleCopy = (e) => {
  //   e.clipboardData.setData("url", window.location.href);
  //   alert("url이 복사되었습니다.");
  // }

  return (
    <div className="field_result">
      <p className="result_text">
        당신은<strong className="result_goal">{resultGoalValue}</strong>전문가가 되기 위해서
      </p>
      <p className="result_text">
        대략<strong className="result_time">{resultTimeValue}</strong>일 이상 훈련하셔야 합니다! :)
      </p>
      <div className="field_buttons">
        <button className="button_common train" onClick={showModal}>
          훈련하러 가기 GO!GO!
        </button>
        <button className="button_common share">공유하기</button>
      </div>
    </div>
  );
}

export default Result;
