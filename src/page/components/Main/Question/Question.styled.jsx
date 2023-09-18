import { styled } from "styled-components";

import media from "style/media";

export const InputContainer = styled.section`
  margin-bottom: 147px;

  ${media.md`
    margin-bottom: 105px;
  `}

  ${media.mobile`
    margin-bottom: 64px;
  `}
`;

const InputTextBox = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.md`
    font-size:19px;
  `}

  ${media.mobile`
    font-size:14px;
  `}
`;

export const Field = styled(InputTextBox)`
  margin-bottom: 27px;

  ${media.md`
    margin-bottom: 22px;
  `}

  ${media.mobile`
    margin-bottom: 17px;
  `}
`;

export const Time = styled(InputTextBox)`
  margin-bottom: 65px;
  p {
    display: inline-block;
  }

  ${media.md`
    flex-direction: column;
    div{
      margin-top: 19px;
    }
  `}

  ${media.mobile`
    margin-bottom: 50px;
  `}
`;

export const Submit = styled.div`
  position: relative;
  img {
    position: absolute;
    bottom: -20px;

    ${media.mobile`
      width: 43px;
      bottom: -10px;
    `}
  }
`;
