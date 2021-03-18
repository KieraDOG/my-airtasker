import styled, { css } from 'styled-components';

const Input = styled.input`
  border: 1px solid rgb(187, 194, 220);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  height: 48px;

  ${(props) => props.error && css`
    border-color: rgb(231, 82, 69);
  `}
`;

export default Input;
