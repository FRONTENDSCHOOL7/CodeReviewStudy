import styled from 'styled-components';

export const Article = styled.article`
  @media screen and (max-width: 1800px) {
    display: none;
  }
`;

export const ImgGroup = styled.section`
  display: flex;
  justify-content: center;
  transform: scaleY(-1);
`;

export const MainImgGroup = styled.div`
  position: relative;
  top: -2.19rem;
  z-index: 3;
`;

export const MainImg = styled.img`
  width: 29rem;
  height: 28.9375rem;
  border-radius: 0.625rem;
`;

export const SideImgGroup = styled.div`
  display: flex;
  position: absolute;
  gap: 9rem;
  z-index: 2;
  bottom: -0.9rem;
`;

export const SideImg = styled.img`
  width: 23.625rem;
  height: 23.625rem;
  border-radius: 0.625rem;
`;

export const EdgeImgGroup = styled.div`
  display: flex;
  position: absolute;
  gap: 40.12rem;
  bottom: -3.5rem;
`;

export const EdgeImg = styled.img`
  width: 18.0625rem;
  height: 18.0625rem;
  border-radius: 0.625rem;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  border-radius: 0.625rem;

  background: linear-gradient(180deg, #fff 50%, rgba(255, 255, 255, 0.4) 100%);
  z-index: 0;
`;
