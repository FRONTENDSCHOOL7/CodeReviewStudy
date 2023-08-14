import React from 'react';
import { useRecoilState } from 'recoil';
import { recoilImgList } from '../store/store';

const useMoveImage = () => {
  const [imageList, setImageList] = useRecoilState(recoilImgList);

  const handleMoveImage = (command: string) => {
    const changeImageList = [...imageList];
    const firstImage = changeImageList[0];
    const lastImage = changeImageList[changeImageList.length - 1];

    if (command === 'prev') handlePrev(changeImageList, lastImage);
    if (command === 'next') handleNext(changeImageList, firstImage);
  };

  const handleNext = (imageList: string[], firstImage: string) => {
    imageList.shift();
    imageList.push(firstImage);
    setImageList(imageList);
  };

  const handlePrev = (imageList: string[], lastImage: string) => {
    imageList.pop();
    imageList.unshift(lastImage);
    setImageList(imageList);
  };

  return { handleMoveImage };
};

export default useMoveImage;
