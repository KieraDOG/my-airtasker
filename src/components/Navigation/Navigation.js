import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Main from './components/Main';
import Authentication from './components/Authentication';
import NavItem from './components/NavItem';

const Wrapper = styled.div`
  background: white;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled(NavItem)`
  color: #008fb4;
  text-decoration: none;
  padding-left: 0;
  padding-right: 0;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
`;

const Navigation = () => (
  <Wrapper>
    <Container>
      <Layout>
        <Left>
          <Logo as="a" href="/">Logo</Logo>
          <Main />
        </Left>
        <Right>
          <Authentication />
        </Right>
      </Layout>
    </Container>
  </Wrapper>
);

export default Navigation;
