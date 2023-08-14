import React from 'react';
import CreateImg from '../components/CreateImg/CreateImg';
import ImgList from '../components/ImgList/ImgList';
import RerverseImgList from '../components/reverseImgList/RerverseImgList';
import styled from 'styled-components';

const Mainpage = () => {
  return (
    <Container>
      <CreateImg />
      <ImgList />
      <RerverseImgList />
    </Container>
  );
};

export default Mainpage;

const Container = styled.main`
  @media screen and (max-width: 1800px) {
    margin-top: 15rem;
  }

  @media screen and (max-width: 1120px) {
    margin-top: 0;
  }
`;
