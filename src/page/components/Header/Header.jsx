import React from "react";

import * as S from "./Header.styld";

const Header = () => {
  return (
    <S.Header>
      <h1 className="hidden">1만 시간의 법칙</h1>
      <S.TitleImg />
    </S.Header>
  );
};

export default Header;
