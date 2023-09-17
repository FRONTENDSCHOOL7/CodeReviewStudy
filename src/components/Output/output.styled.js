import styled from 'styled-components';
import { Words } from '../Input/Input.styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 147px;

  @media (max-width: 767px) {
    padding-top: 64px;
  }
`;

export const WordsBox = styled.div`
  padding-bottom: 127px;

  @media (max-width: 767px) {
    padding-bottom: 55px;
  }
`;

export const OutputWords = styled(Words)`
  padding-bottom: 17px;

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const StrongText = styled.strong`
  padding: 0 12px;

  font-family: gmarket;
  font-size: 72px;
  color: #fff;
  font-weight: 700;

  @media (max-width: 767px) {
    color: #fff;
    font-family: gmarket;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  column-gap: 18px;
`;

export const GoBtn = styled.button`
  background: #fcee21;
  padding: 21px 49px;

  font-family: gmarket;
  font-size: 24px;
  color: #5b2386;
  font-weight: 700;

  border-radius: 56px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 13px 17.5px;
  }
`;

export const ShareBtn = styled(GoBtn)`
  background-color: #fff;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 13px 19px;
  }
`;
