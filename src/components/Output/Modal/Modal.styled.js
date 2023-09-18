import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 30px;

  width: 800px;
  height: 800px;

  font-family: tvn;
  font-size: 96px;
  color: #5b2386;
  font-weight: 700;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);

  position: absolute;

  @media (max-width: 767px) {
    width: 330px;
    height: 500px;
  }
`;

export const ModalBackUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Title = styled.p`
  font-size: 96px;

  padding-top: 76px;
  padding-bottom: 4px;

  @media (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 0;
    color: #5b2386;
    font-size: 64px;
  }
`;
export const SubText = styled.p`
  font-size: 36px;

  padding-bottom: 33px;

  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

export const LicatImg = styled.img`
  padding-bottom: 74px;

  @media (max-width: 767px) {
    width: 300px;
    height: 200px;
    padding-bottom: 25px;
  }
`;

export const Btn = styled.button`
  color: #5b2386;
  text-align: center;
  font-family: gmarketBold;
  font-size: 24px;
  font-weight: 700;
  border: none;

  padding: 21px 49px;
  border-radius: 56px;
  background: #fcee21;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 18px 45px;
    border-radius: 13px;
  }
`;
