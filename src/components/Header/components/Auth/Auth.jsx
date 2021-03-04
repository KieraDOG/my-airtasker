import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../HeaderItem';
import Button from '../Button';

// 简单的重复要好过复杂的抽象
const Layout = styled.div`
  display: flex;
  align-items: center;
`;

// Maintainable
// 如果这个 Button 是我们想象中的 Button，那我们何必新做一个 Button，而不是复用这个 Button
const NakedButton = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  font-size: inherit;
  cursor: pointer;
`;

const Auth = () => (
  <Layout>
    <HeaderItem as={NakedButton}>
      Sign up
    </HeaderItem>
    <HeaderItem as={NakedButton}>
      Log in
    </HeaderItem>
    <HeaderItem>
      <Button variant="secondary">Become a tasker</Button>
    </HeaderItem>
  </Layout>
);

export default Auth;
