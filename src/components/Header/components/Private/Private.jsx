import React from 'react';
import styled from 'styled-components';
import NavigationButton from '../NavigationButton';
import NavigationLink from '../NavigationLink';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import NakedButton from '../../../NakedButton';
import withFetch from '../../../withFetch';
import Link from '../../../Link';
import { withRouter } from '../../../Router';
import getAuth from '../../../../apis/getAuth';

const Layout = styled.div`
  display: flex;
`;

const MODAL = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  EMPTY: null,
};

class Private extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: MODAL.EMPTY,
      user: null,
    };

    this.showModal = this.showModal.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.getAuth();
  }

  getAuth() {
    const { fetch } = this.props;

    fetch(() => getAuth())
      .then(this.setUser);
  }

  setUser(target) {
    this.setState({
      user: target,
    });
  }

  showModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        showModal: target,
      });
    };
  }

  render() {
    const { router } = this.props;
    const { showModal, user } = this.state;

    return (
      <>
        <Layout>
          {user ? (
            <>
              <NavigationLink href="/dashboard">Dashboard</NavigationLink>
              <NavigationLink
                as={NakedButton}
                onClick={(event) => {
                  event.preventDefault();
                  this.setUser();
                  localStorage.removeItem('user');
                  router.push('/');
                }}
              >
                Log out
              </NavigationLink>
            </>
          ) : (
            <>
              <NavigationLink as={NakedButton} onClick={this.showModal(MODAL.SIGN_IN)}>
                Sign in
              </NavigationLink>
              <NavigationLink as={NakedButton} onClick={this.showModal(MODAL.SIGN_UP)}>
                Sign up
              </NavigationLink>
              {showModal === MODAL.SIGN_IN && (
                <SignInModal
                  onClose={this.showModal(MODAL.EMPTY)}
                  onSignUp={this.showModal(MODAL.SIGN_UP)}
                  onSignInSuccess={this.setUser}
                />
              )}

              {showModal === MODAL.SIGN_UP && (
                <SignUpModal
                  onClose={this.showModal(MODAL.EMPTY)}
                  onSignIn={this.showModal(MODAL.SIGN_IN)}
                  onSignUpSuccess={this.setUser}
                />
              )}
            </>
          )}
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
