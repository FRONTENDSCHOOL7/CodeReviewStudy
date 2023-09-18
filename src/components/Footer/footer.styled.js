import styled from 'styled-components';

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding-top: 130px;
  padding-bottom: 116px;

  @media (max-width: 767px) {
    padding-top: 83px;
    padding-bottom: 32px;
  }
`;

export const WenivLogo = styled.img`
  @media (max-width: 767px) {
    width: 91px;
    height: 18px;
  }
`;

export const FooterText = styled.p`
  font-family: Noto Sans KR, sans-serif;
  text-align: center;
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  line-height: 18px;

  @media (max-width: 767px) {
    color: rgba(255, 255, 255, 0.7);
    font-size: 9px;
  }
`;
