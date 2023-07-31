import React from 'react';
import './Footer.scss';
import line from '../../images/footerLine.svg';
import twitterSVG from '../../images/icon-twitter.svg';
import instagramSVG from '../../images/icon-instagram.svg';
import facebookSVG from '../../images/icon-facebook.svg';

export default function Footer() {
  const moveSite = (site) => {
    if (site === 'blog') window.open('https://blog.naver.com/paul-lab', '_blank');
    if (site === 'instagram') window.open('https://www.instagram.com/weniv_official/', '_blank');
    if (site === 'facebook') window.open('https://www.facebook.com/Jejucoding', '_blank');
  };

  return (
    <footer>
      <div className='wrapperTop'>
        <div className='top'>
          <h2>Jungle Cinema</h2>
          <div className='imgGroup'>
            <img
              className='footerSVG'
              src={twitterSVG}
              alt='twitter'
              onClick={() => {
                moveSite('blog');
              }}
            />
            <img
              className='footerSVG'
              src={instagramSVG}
              alt='instagram'
              onClick={() => {
                moveSite('instagram');
              }}
            />
            <img
              className='footerSVG'
              src={facebookSVG}
              alt='facebook'
              onClick={() => {
                moveSite('facebook');
              }}
            />
          </div>
        </div>
      </div>
      <img src={line} alt='' />
      <div className='wrapperBottom'>
        <p className='footerInfo'>
          <span>(주) 정글 시네마</span> | <span>대표</span> 라이언 | <span>사업자 번호</span> 000-0000-0000 | 광고 영화 및 비디오물 제작업 | 주소 서울특별시
        </p>
        <p className='footerLogo'>ⓒ The Jungle</p>
      </div>
    </footer>
  );
}
