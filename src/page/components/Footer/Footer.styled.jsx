import { styled } from "styled-components";

import { logo } from "style/images";

import media from "style/media";

export const Footer = styled.footer`
  text-align: center;
`;

export const FooterText = styled.p`
  font-family: var(--font-NotoRegular);
  font-size: 12px;
  line-height: normal;

  ${media.mobile`
    font-size: 9px;
  `}
`;

export const LogoImg = styled.img.attrs(() => ({
  src: logo,
  alt: "1만 시간의 법칙",
}))`
  width: 125px;
  margin-bottom: 20px;

  ${media.md`
    width: 110px;
  `}
  ${media.mobile`
    width: 91px;
  `}
`;
