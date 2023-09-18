import React from "react";

import { styled } from "styled-components";
import { loading } from "style/images";

import media from "style/media";

const Loading = styled.img`
  width: 120px;
  animation: rotation 1s linear infinite;

  ${media.mobile`
      width: 90px;
      `}

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingBox = () => {
  return <Loading src={loading} alt="로딩 중" />;
};

export default LoadingBox;
