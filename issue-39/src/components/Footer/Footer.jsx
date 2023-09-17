import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <img src="img/weniv.svg" alt="" />
      <p className='footer_explain'>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br/> 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </footer>
  );
}

export default Footer;