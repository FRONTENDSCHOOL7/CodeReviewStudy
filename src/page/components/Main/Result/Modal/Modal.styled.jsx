import { styled } from "styled-components";

import media from "style/media";
import { licat } from "style/images";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile`
    background-color: rgba(0, 0, 0, 0.4);
  `}

  dialog {
    background: #fff url(${licat}) no-repeat center 130px/400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 600px;
    height: 600px;
    padding: 25px;

    border-radius: 20px;

    border: none;

    ${media.md`
        background: #fff url(${licat}) no-repeat center 110px/300px;
        width: 430px;
        height: 500px;
    `};

    ${media.mobile`
      background: white;
      width: 330px;
      height: 450px;
    `};
  }
`;

export const Message = styled.div`
  color: var(--color-main);
  font-family: var(--font-tvnBold);
  p {
    &:first-child::after {
      font-size: 80px;
      content: "화이팅!!♥♥♥";

      ${media.md`
      font-size: 60px;
      `}
    }

    ${media.mobile`
      &:first-child::after{
        content: '화이팅!!';
      }
    `}

    &:nth-child(2) {
      font-size: 30px;
    }
  }
`;

export const BackButton = styled.div`
  p {
    font-family: var(--font-GMedium);
    color: #747474;
    font-size: 13px;
    margin-top: 20px;
  }
`;
