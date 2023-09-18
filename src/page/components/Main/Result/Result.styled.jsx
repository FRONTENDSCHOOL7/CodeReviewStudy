import { styled } from "styled-components";

import media from "style/media";

export const ResultContainer = styled.section`
  margin-bottom: 130px;

  ${media.md`
    margin-bottom: 100px;
  `}

  ${media.mobile`
    margin-bottom: 83px;
  `}
`;

const ResultTextBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.md`
    font-size:19px;
   `}

  ${media.mobile`
    font-size:14px;
   `}

   span {
    font-size: 72px;
    font-family: var(--font-GBold);
    margin: 0 12px;

    ${media.md`
      font-size:30px;
    `}
    ${media.mobile`
      font-size:24px;
      margin: 0 8px;
    `}
  }
`;

export const FeildResult = styled(ResultTextBox)`
  margin-bottom: 17px;
  ${media.mobile`
    margin-bottom: 15px;
  `}
`;

export const TimeResult = styled(ResultTextBox)`
  margin-bottom: 127px;

  ${media.md`
    margin-bottom: 80px;
  `}
  ${media.mobile`
    margin-bottom: 55px;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;
