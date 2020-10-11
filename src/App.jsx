import React from 'react';
import styled from 'styled-components';
import Guard from './components/Guard';
import Header from './components/Header';
import Router, { Route } from './components/Router';
import { Authentication } from './components/withAuthentication';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

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
  <Authentication>
    <Router>
      <Layout>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Route path="/" render={() => (<Home />)} />
          <Route
            path="/dashboard"
            render={() => (
              <Guard>
                <Dashboard />
              </Guard>
            )}
          />
        </ContentWrapper>
        <FooterWrapper>
          Footer
        </FooterWrapper>
      </Layout>
    </Router>
  </Authentication>
);

export default App;
