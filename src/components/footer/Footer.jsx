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
          <h2 className="a11y-hidden">정글 시네마 회사 정보</h2>
          <dl>
            <dt className="line company-name">(주) 정글 시네마</dt>
            <dt>대표</dt>
            <dd className="line">라이언</dd>
            <dt>사업자 번호</dt>
            <dd className="line">000-0000-0000</dd>
            <dt className="line company-info">광고 영화 및 비디오물 제작업</dt>
            <dt>주소</dt>
            <dd>
              <address>서울특별시</address>
            </dd>
          </dl>

          <img src="footerImgs/jungle.png" alt="The Jungle logo" />
        </article>
      </div>
    </footer>
  );
};

export default Footer;
