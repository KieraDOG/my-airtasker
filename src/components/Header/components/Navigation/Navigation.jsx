import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../HeaderItem';
import Button from '../Button';

const Layout = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Toggler = styled.div`
  cursor: pointer;
`;

const Navigation = () => (
  <Layout>
    <HeaderItem>
      <Button size="sm" variant="primary">Post a task</Button>
    </HeaderItem>
    <HeaderItem as={Toggler} highlight>
      Categories
    </HeaderItem>
    <HeaderItem highlight as={Link} href="/tasks">
      Browse tasks
    </HeaderItem>
    <HeaderItem highlight as={Link} href="/faq">
      How it works
    </HeaderItem>
  </Layout>
);

export default Navigation;
