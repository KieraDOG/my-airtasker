import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding-right: 18px;
  margin-right: 18px;
  border-right: 1px solid #ccc;
`;

const MyLogo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #008fb4;
`;

const Logo = () => (
  <StyledLogo href="/">
    <MyLogo>LOGO</MyLogo>
  </StyledLogo>
);

export default Logo;
