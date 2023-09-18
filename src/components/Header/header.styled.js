import styled from 'styled-components';
import leftQuote from '../../images/leftQuote.svg';
import rightQuote from '../../images/rightQuote.svg';

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 140px;

  @media (max-width: 767px) {
    padding-top: 41px;
  }
`;

export const Logo = styled.img`
  padding-top: 54px;

  @media (max-width: 767px) {
    padding-top: 41px;
    width: 267px;
    height: 53px;
  }
`;

export const LogoCircle = styled.img`
  position: absolute;

  @media (max-width: 767px) {
    width: 125px;
    height: 126px;
  }
`;

export const Title = styled.h1`
  padding-top: 125px;

  font-family: tvn;
  font-size: 36px;
  color: #f5df4d;
  font-weight: 700;

  @media (max-width: 767px) {
    padding-top: 69px;
    font-size: 22px;
  }
`;

export const QuoteBox = styled.div`
  padding-top: 78px;

  position: relative;

  @media (max-width: 767px) {
    padding-top: 62px;
  }

  &::after {
    content: '';
    background-image: url(${rightQuote});
    position: absolute;
    top: 91px;
    right: -51px;
    width: 37px;
    height: 32px;

    @media (max-width: 767px) {
      top: 85px;
      right: -50px;
    }
  }

  &::before {
    content: '';
    background-image: url(${leftQuote});
    position: absolute;
    top: 91px;
    left: -51px;
    width: 37px;
    height: 32px;

    @media (max-width: 767px) {
      top: 85px;
      left: -50px;
    }
  }
`;

export const Quote = styled.h2`
  padding-bottom: 18px;

  font-family: gmarketMedium;
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const StrongSpan = styled.span`
  font-family: gmarketBold;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
