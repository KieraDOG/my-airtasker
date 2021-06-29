import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  background-color: rgb(224, 68, 109);
  color: white;
  border-radius: 160px;
  font-weight: bold;

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return css`
          font-size: 14px;
          padding: 4px 16px;
        `;

      default:
        return css`
          font-size: 18px;
          padding: 16px 24px;
        `;
    }
  }}

`;

const Button = ({ children, size }) => (
  <StyledButton size={size}>{children}</StyledButton>
);

export default Button;
