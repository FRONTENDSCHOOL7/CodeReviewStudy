import React from "react";
import * as S from "./Footer.styled.jsx";

const Footer = () => {
  return (
    <S.Footer>
      <S.LogoImg />
      <S.FooterText>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        <br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </S.FooterText>
    </S.Footer>
  );
};

export default Footer;
