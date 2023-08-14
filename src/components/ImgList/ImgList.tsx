import {
  Article,
  EdgeImg,
  EdgeImgGroup,
  ImgGroup,
  LeftBtn,
  MainImg,
  MainImgGroup,
  RightBtn,
  SideImg,
  SideImgGroup,
} from './ImgList.styled';

import { useRecoilValue } from 'recoil';
import { recoilImgList } from '../../store/store';
import useMoveImage from '../../hooks/useMoveImage';

const ImgList = () => {
  const imageList = useRecoilValue(recoilImgList);
  const { handleMoveImage } = useMoveImage();

  const handleMoveImag = (command: string) => {
    handleMoveImage(command);
  };

  return (
    <>
      <Article>
        <LeftBtn
          onClick={() => {
            handleMoveImag('prev');
          }}
        >
          &lt; Prev
        </LeftBtn>

        <ImgGroup>
          <MainImgGroup>
            <MainImg src={imageList[2]} alt='mainImage' />
          </MainImgGroup>
          <SideImgGroup>
            <SideImg src={imageList[1]} alt='sideImage' />
            <SideImg src={imageList[3]} alt='sideImage' />
          </SideImgGroup>
          <EdgeImgGroup>
            <EdgeImg src={imageList[0]} alt='edgeImage' />
            <EdgeImg src={imageList[4]} alt='edgeImage' />
          </EdgeImgGroup>
        </ImgGroup>

        <RightBtn
          onClick={() => {
            handleMoveImage('next');
          }}
        >
          Next &gt;
        </RightBtn>
      </Article>
    </>
  );
};

export default ImgList;
