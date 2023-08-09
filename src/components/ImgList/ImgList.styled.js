import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  margin-top: 3.63rem;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftBtn = styled.button`
  border-radius: 2.28125rem;
  border: 3px solid var(--gray-3, #828282);
  background: #fff;

  margin-top: 12.56rem;
  margin-left: 9.31rem;

  color: #828282;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 1.25rem;
  font-weight: 700;

  padding: 1rem 2.44rem;

  cursor: pointer;

  @media screen and (max-width: 1800px) {
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1120px) {
    margin-bottom: 23rem;
  }
`;

export const RightBtn = styled.button`
  border-radius: 2.28125rem;
  border: 3px solid var(--gray-3, #828282);
  background: #fff;

  margin-top: 12.56rem;
  margin-right: 9.31rem;

  color: #828282;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 1.25rem;
  font-weight: 700;

  padding: 1rem 2.44rem;

  cursor: pointer;

  @media screen and (max-width: 1800px) {
    margin-right: 0;
    margin-top: 2rem;
  }

  @media screen and (max-width: 1120px) {
    margin-top: 28rem;
  }
`;

export const ImgGroup = styled.section`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MainImgGroup = styled.div`
  position: relative;
  z-index: 3;
`;

export const MainImg = styled.img`
  width: 29rem;
  height: 28.9375rem;

  border-radius: 0.625rem;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
`;

export const SideImgGroup = styled.div`
  display: flex;
  position: absolute;
  gap: 9rem;
  z-index: 2;
  margin-top: 2.13rem;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SideImg = styled.img`
  width: 23.625rem;
  height: 23.625rem;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;

export const EdgeImgGroup = styled.div`
  display: flex;
  position: absolute;
  gap: 40.12rem;

  margin-top: 5.13rem;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EdgeImg = styled.img`
  width: 18.0625rem;
  height: 18.0625rem;
  border-radius: 0.625rem;

  background-size: cover;
`;
