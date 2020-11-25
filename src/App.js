import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import AuthenticationProvider from './components/AuthenticationProvider';

const Wrapper = styled.div`
  height: 100vh;
  background: #f6f8fd;
`;

// React.Context
// Global Var

// - App { user }
//  - Navigation [ user, setUser ]
//    - Main
//    - WithAuthenticationModalsAuthentication [ user, setUser ]
//       - Authentication [ user ]
//       - LoginModal [ setUser ]
//       - SignUpModal [ setUser ]
//       - ForgetPasswordModal
//  - WithAuthenticationModalsBanner [ setUser ]
//    - Banner
//    - LoginModal [ setUser ]
//    - SignUpModal [ setUser ]
//    - ForgetPasswordModal
//  - HomePage
//    - Section
//      - WithAuthenticationModalsFoo

// 责任？
// 入口组装的责任
const App = () => (
  <AuthenticationProvider>
    <Wrapper>
      <Navigation />
      <Banner />
    </Wrapper>
  </AuthenticationProvider>
);

export default App;
