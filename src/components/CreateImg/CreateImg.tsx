import React from 'react';
import { CreateImgInput, CreateImgLabel, Header } from './CreateImg.styled';
import useCreateImage from '../../hooks/useCreateImage';
import '../../Global/global.css';

const CreateImg: React.FC = () => {
  const { actionImgCompress } = useCreateImage();

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const imgFile = e.target.files?.[0];
    const fileCheck = imgFile?.type.includes('image');

    imgFile && fileCheck ? actionImgCompress(imgFile) : alert('파일이 올바르지 않습니다.');
  };

  return (
    <>
      <Header>
        <h1 className='a11y-hidden'>이미지 업로드</h1>
        <CreateImgInput
          type='file'
          id='createImg'
          onChange={(e) => {
            handleImg(e);
          }}
        />
        <CreateImgLabel htmlFor='createImg'>이미지 업로드</CreateImgLabel>
      </Header>
    </>
  );
};

export default CreateImg;
