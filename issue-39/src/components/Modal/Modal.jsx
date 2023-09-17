import React from "react";
import "./Modal.css";

function Modal({setShowModal}) {
  const offModal = () => {
    setShowModal(false);
  }
  return (
    <section className="modal">
      <div className="field_modal">
        <div className="cheer">
          <h1>화이팅!!♥♥♥</h1>
          <h3>당신의 꿈을 응원합니다!</h3>
        </div>
        <img className="img_lion" src="img/lion.svg" alt="" />
        <div className="field_button_close">
          <button className="button_common close" onClick={offModal}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
          <p>(그냥 닫기 버튼입니다.)</p>
        </div>
      </div>
    </section>
  );
}

export default Modal;
