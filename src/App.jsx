import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Router, { Route } from './components/Router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.section`
`;

const ContentWrapper = styled.section`
  flex: 1;
`;

const FooterWrapper = styled.section`
`;

const App = () => (
  <Router>
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <Route path="/" render={() => (<Home />)} />
        <Route path="/dashboard" render={() => (<Dashboard />)} />
      </ContentWrapper>
      <FooterWrapper>
        Footer
      </FooterWrapper>
    </Layout>
  </Router>
)

export default App;
