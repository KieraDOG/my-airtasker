import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const FooterWrapper = styled.div`
`;

const App = () => (
  <Layout>
    <HeaderWrapper>
      Header
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
