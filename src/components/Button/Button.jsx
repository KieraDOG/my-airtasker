import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: 0;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  letter-spacing: 0.15px;
  background-color: rgb(224, 68, 109);
  font-size: 18px;
  color: white;
  border-radius: 160px;
  padding: 16px 24px;
  font-weight: bold;
`;

const Button = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
