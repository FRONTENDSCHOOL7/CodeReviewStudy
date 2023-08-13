import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="inner-container">
        {/* 회사 이름 , 소셜미디어 링크 */}
        <header className="footer-header">
          <h2 className="title">Jungle Cinema</h2>
          {/* 소셜미디어 링크 */}
          <ul className="social-group" aria-labelledby="소셜 링크 그룹">
            <li>
              <a href="#!" aria-label="트위터" role="button">
                <img src="footerImgs/icon-twitter.svg" alt="트위터 이미지" />
              </a>
            </li>
            <li>
              <a href="#!" aria-label="인스타그램" role="button">
                <img
                  src="footerImgs/icon-instagram.svg"
                  alt="인스타그램 이미지"
                />
              </a>
            </li>
            <li>
              <a href="#!" aria-label="페이스북" role="button">
                <img src="footerImgs/icon-facebook.svg" alt="페이스북 이미지" />
              </a>
            </li>
          </ul>
        </header>
        {/* 회사 정보 */}
        <article className="company">
          <h6 className="a11y-hidden">정글 시네마 회사 정보</h6>
          <div>
            <b className="line">(주) 정글 시네마</b>
            <span className="line">
              <b>대표</b> 라이언
            </span>
            <span className="line">
              <b>사업자 번호</b> 000-0000-0000
            </span>
            <span className="line">광고 영화 및 비디오물 제작업</span>
            <address>
              <b>주소</b> 서울특별시
            </address>
          </div>
          <img src="footerImgs/jungle.png" alt="The Jungle logo" />
        </article>
      </div>
    </footer>
  );
};

export default Footer;
