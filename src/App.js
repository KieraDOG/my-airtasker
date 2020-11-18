import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import AuthenticationContext from './components/AuthenticationContext';
import getAuth from './apis/getAuth';

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


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }
    
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    getAuth()
      .then((data) => this.setUser(data))
      .catch(() => {});
  }

  setUser(value) {
    this.setState({
      user: value,
    });
  }

  render() {
    const { user } = this.state;

    const authentication = {
      user,
      setUser: this.setUser,
    };

    return (
      <AuthenticationContext.Provider value={authentication}>
        <Wrapper>
          <Navigation />
          <Banner />
        </Wrapper>
      </AuthenticationContext.Provider>
    );
  }
}

export default App;
