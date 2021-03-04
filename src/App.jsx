import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const ContentWrapper = styled.div`
  flex: 1;
`;

const FooterWrapper = styled.div`
`;

const App = () => (
  <Layout>
    <Header />
    <ContentWrapper>
      Content
    </ContentWrapper>
    <FooterWrapper>
      Footer
    </FooterWrapper>
  </Layout>
);

export default App;
