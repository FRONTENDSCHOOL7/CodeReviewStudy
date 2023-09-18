import { styled } from "styled-components";

import media from "style/media";

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
  min: 0,
}))`
  width: 228px;
  border-radius: 7px;
  padding: 17px 10px;
  margin: 0 17px;
  text-align: center;

  ${media.md`
  width: 192px;
  `}

  ${media.mobile`
  width: 156px;
  height:37px;
  padding: 11px 0;
  margin: 0 4px;
  `} /* ::placeholder {
    color: #bf4f74;
  } */
`;
