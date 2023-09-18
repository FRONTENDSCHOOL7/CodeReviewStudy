import styled from 'styled-components';
import finger from '../../images/finger.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 84px;
  gap: 27px;

  @media (max-width: 767px) {
    padding-top: 62px;
    gap: 18px;
  }
`;

export const Words = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: gmarketMedium;
  font-size: 24px;
  color: #fff;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 14px;
    white-space: pre-wrap;
  }
`;

export const InputTag = styled.input`
  width: 228px;
  height: 57px;
  margin: 0 17px;

  font-family: gmarketMedium;
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  border-radius: 7px;
  border: none;

  @media (max-width: 767px) {
    width: 156px;
    height: 37px;

    font-size: 14px;
    margin: 0 4px;
  }

  &::placeholder {
    color: #babcbe;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  margin-top: 88px;

  @media (max-width: 767px) {
    margin-top: 49px;
  }
`;

export const Btn = styled.button`
  padding: 21px 49px;
  background: #fcee21;

  font-family: gmarketBold;
  text-align: center;
  font-size: 24px;
  color: #5b2386;
  font-weight: 700;

  border-radius: 56px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 18px 36.5px;
    border-radius: 13px;
  }
`;

export const FingerImg = styled.img`
  padding-top: 14px;
  padding-left: 7px;

  @media (max-width: 767px) {
    padding-top: 30px;
  }
`;
