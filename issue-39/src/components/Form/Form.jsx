import { useState } from "react";
import "./Form.css";

function Form({ setInputGoal, setInputTime, setShowResult, setShowLoading }) {
  const [saveInputGoal, setSaveInputGoal] = useState("");
  const [saveInputTime, setSaveInputTime] = useState("");

  const handleGoal = (e) => {
    setSaveInputGoal(e.target.value);
    console.log(e.target.value);
  };
  const handleTime = (e) => {
    setSaveInputTime(e.target.value);
    console.log(e.target.value);
  };
  const submitButton = () => {
    if (saveInputGoal === "" && saveInputTime === "") alert("입력되지 않았습니다.");
    else if (saveInputTime > 24) alert("잘못된 값입니다. 24이하의 값을 입력해 주세요.");
    else {
      setInputGoal(saveInputGoal);
      setInputTime(saveInputTime);
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setShowResult(true);
      }, 3000);
    }
  };
  return (
    <form className="form">
      <p className="form_text">
        나는
        <input
          className="input_gola"
          type="text"
          placeholder="예)프로그래밍"
          value={saveInputGoal}
          onChange={handleGoal}
        />
        전문가가 될 것이다.
      </p>
      <p className="form_text">
        그래서 앞으로 매일 하루에
        <input className="input_time" type="number" placeholder="예)5" value={saveInputTime} onChange={handleTime} />
        시간씩 훈련할 것이다.
      </p>
      <div className="field_button">
        <button className="button_common submit" type="button" onClick={submitButton}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
        <img className="img_pointer" src="img/click.svg" alt="" />
      </div>
    </form>
  );
}

export default Form;
