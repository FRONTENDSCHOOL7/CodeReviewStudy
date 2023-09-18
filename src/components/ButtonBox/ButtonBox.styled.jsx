import { styled } from "styled-components";

import media from "style/media";

export const Button = styled.button`
  padding: 20px 35px;

  border-radius: 56px;

  color: var(--color-main);
  font-family: var(--font-GBold);
  word-break: keep-all;

  background: ${(props) => props.color || "#fcee21"};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  ${media.md`
    width: ${(props) => props.$wt || "300px"};

    font-size: 19px;
    line-height: 26px;

  `};
  ${media.mobile`
    width: ${(props) => props.$wt || "241px"};
    border-radius:${(props) => props.$wt || "13px"};
    
    font-size: 14px;
    line-height: 20px;

  `};
`;
