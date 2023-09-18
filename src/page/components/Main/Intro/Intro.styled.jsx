import { styled } from "styled-components";

import { quotes } from "style/images";

import media from "style/media";

export const IntroContainer = styled.section`
  margin-bottom: 102px;

  ${media.md`
  margin-bottom:80px;
  `}

  ${media.mobile`
  margin-bottom:62px;
  `}
`;

export const IntroSaying = styled.p`
  margin-bottom: 76px;

  color: #f5df4d;
  font-size: 36px;
  font-family: var(--font-tvnBold);

  ${media.md`
    font-size: 28px;
  `}

  ${media.mobile`
    margin-bottom: 62px;
    font-size: 22px;
  `}
`;

export const Quotes = styled.div`
  width: 493px;
  margin: auto;
  background: url(${quotes}) no-repeat center/contain;

  span {
    font-size: 24px;
    font-family: var(--font-GBold);
  }

  font-size: 18px;
  font-family: var(--font-GMidium);
  line-height: 32px;

  ${media.md`
    font-size: 16px;
      span{
      font-size: 19px;
      }
  `}

  ${media.mobile`
    width: 300px;
    font-size: 14px;
    line-height: 26px;
      span{
        font-size: 14px;
      }
  `}
`;
