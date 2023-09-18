import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import * as S from "./Home.styled";

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Main />
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
