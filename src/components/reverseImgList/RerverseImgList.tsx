import {
  Article,
  EdgeImg,
  EdgeImgGroup,
  GradientOverlay,
  ImgGroup,
  MainImg,
  MainImgGroup,
  SideImg,
  SideImgGroup,
} from './ReverseImgList.styled';

import { useRecoilValue } from 'recoil';
import { recoilImgList } from '../../store/store';

const ReverseImgList = () => {
  const imageList = useRecoilValue(recoilImgList);

  return (
    <>
      <Article>
        <ImgGroup>
          <MainImgGroup>
            <MainImg src={imageList[2]} alt='mainImage' />
            <GradientOverlay />
          </MainImgGroup>
          <SideImgGroup>
            <SideImg src={imageList[1]} alt='sideImage' />
            <GradientOverlay />
            <SideImg src={imageList[3]} alt='sideImage' />
            <GradientOverlay />
          </SideImgGroup>
          <EdgeImgGroup>
            <EdgeImg src={imageList[0]} alt='edgeImage' />
            <GradientOverlay />
            <EdgeImg src={imageList[4]} alt='edgeImage' />
            <GradientOverlay />
          </EdgeImgGroup>
        </ImgGroup>
      </Article>
    </>
  );
};

export default ReverseImgList;
