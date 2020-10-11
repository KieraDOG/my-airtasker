import React from 'react';
import styled from 'styled-components';
import Link from '../../../Link';
import NakedButton from '../../../NakedButton';
import { withRouter } from '../../../Router';
import withFetch from '../../../withFetch';
import NavigationButton from '../NavigationButton';
import NavigationLink from '../NavigationLink';
import Logout from './components/Logout';
import { AuthenticationContext } from '../../../withAuthentication';
import AuthenticationModals from '../../../AuthenticationModals';

const Layout = styled.div`
  display: flex;
`;

class Private extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticationModal: null,
    };

    this.setAuthenticationModal = this.setAuthenticationModal.bind(this);
  }

  setAuthenticationModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        authenticationModal: target,
      });
    };
  }

  render() {
    const { authenticationModal } = this.state;

    return (
      <>
        <Layout>
          <AuthenticationContext.Consumer>
            {(authentication) => (authentication.user ? (
              <>
                <NavigationLink to="/dashboard">Dashboard</NavigationLink>
                <Logout />
              </>
            ) : (
              <>
                <NavigationLink as={NakedButton} onClick={this.setAuthenticationModal('signIn')}>
                  Sign in
                </NavigationLink>
                <NavigationLink as={NakedButton} onClick={this.setAuthenticationModal('signUp')}>
                  Sign up
                </NavigationLink>
                {authenticationModal && (
                  <AuthenticationModals
                    initialModal={authenticationModal}
                    onClose={this.setAuthenticationModal()}
                  />
                )}
              </>
            ))}
          </AuthenticationContext.Consumer>
          <NavigationButton as={Link} variant="secondary" href="/enroll">
            Become a Tasker
          </NavigationButton>
        </Layout>
      </>
    );
  }
}

const withFetchPrivate = withFetch(Private);
const WithRouterPrivate = withRouter(withFetchPrivate);

export default WithRouterPrivate;
