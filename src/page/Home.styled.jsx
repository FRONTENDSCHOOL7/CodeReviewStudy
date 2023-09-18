import { styled } from "styled-components";
import media from "style/media";

export const Wrapper = styled.div`
  padding: 120px 0 100px;

  ${media.md`
  padding: 80px 0 60px;
  `}
  ${media.mobile`
  padding: 41px 0 20px;
  `}
`;
