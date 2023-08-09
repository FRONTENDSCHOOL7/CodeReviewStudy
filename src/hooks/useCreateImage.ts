import { useRecoilState } from 'recoil';
import { recoilImgList } from '../store/store';
import imageCompression from 'browser-image-compression';

const useCreateImage = () => {
  const [imgList, setImgList] = useRecoilState(recoilImgList);

  const actionImgCompress = async (Image: File) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 300,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(Image, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      reader.onloadend = () => {
        const base64data = reader.result as string;

        const middleIndex = Math.floor(imgList.length / 2);

        const changeImageList = [...imgList];
        changeImageList.splice(middleIndex, 0, base64data);

        setImgList(changeImageList);
      };
    } catch (error) {
      throw new Error('이미지 추가 Error');
    }
  };

  return { actionImgCompress };
};

export default useCreateImage;
