import React from 'react';
import styled from 'styled-components';
import NavigationButton from '../NavigationButton';
import NavigationLink from '../NavigationLink';
import SignInModal from './components/SignInModal';

const Layout = styled.div`
  display: flex;
`;

const MODAL = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  EMPTY: '',
};

class Private extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // showSignInModal: false,
      // showSignUpModal: false,
      // showForgetPasswordModal: false,
      showModal: MODAL.EMPTY,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showModal: target,
      });
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Layout>
          <NavigationButton onClick={this.showModal(MODAL.SIGN_IN)}>
            Sign in
          </NavigationButton>
          <NavigationButton onClick={this.showModal(MODAL.SIGN_UP)}>
            Sign up
          </NavigationButton>
          <NavigationLink.Button variant="secondary" href="/enroll">
            Become a Tasker
          </NavigationLink.Button>
        </Layout>
        {showModal === MODAL.SIGN_IN && (
          <SignInModal
            onClose={this.showModal(MODAL.EMPTY)}
            onSignUp={this.showModal(MODAL.SIGN_UP)}
          />
        )}
        {showModal === MODAL.SIGN_UP && (
          <div>SignUp</div>
        )}
      </>
    );
  }
}

export default Private;
