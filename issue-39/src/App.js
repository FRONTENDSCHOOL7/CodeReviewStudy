import { Reset } from "styled-reset";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [inputGoal, setInputGoal] = useState("");
  const [inputTime, setInputTime] = useState("");

  return (
    <div className="app">
      <Reset></Reset>
      <Header></Header>
      <Intro></Intro>
      <Form setInputGoal={setInputGoal} setInputTime={setInputTime} setShowResult={setShowResult} setShowLoading={setShowLoading}></Form>
      {showLoading ? (
        <Loading></Loading>
      ) : (
        showResult && <Result inputGoal={inputGoal} inputTime={inputTime} setShowModal={setShowModal}></Result>
      )}
      <Footer></Footer>
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
    </div>
  );
}

export default App;
