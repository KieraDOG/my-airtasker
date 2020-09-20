import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

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
  <Layout>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <ContentWrapper>
      Content
    </ContentWrapper>
    <FooterWrapper>
      Footer
    </FooterWrapper>
  </Layout>
);

export default App;
