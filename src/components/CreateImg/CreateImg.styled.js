import { styled } from 'styled-components';

export const Header = styled.header`
  @media screen and (max-width: 1800px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin-top: 2rem;
  }
`;

export const CreateImgInput = styled.input`
  max-width: 100%;
  margin-top: 4.81rem;

  overflow: hidden;
  width: 1px;
  height: 1px;
  clip-path: inset(50%);

  @media screen and (max-width: 1800px) {
    margin-top: 0;
  }
`;

export const CreateImgLabel = styled.label`
  border-radius: 0.625rem;
  background: #2f80ed;

  border: none;

  margin-left: 9.31rem;
  padding: 0.88rem 2.63rem 0.88rem 2.44rem;

  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 1.125rem;
  font-weight: 700;

  cursor: pointer;

  @media screen and (max-width: 1800px) {
    margin-left: 0;
  }
`;
